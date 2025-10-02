---
title: "Guia Completo: Criando um Template Windows Server com Incus"
description: "Um guia passo a passo para criar uma máquina virtual base (golden image) do Windows Server no Incus, incluindo a instalação de drivers VirtIO, o agente Incus e a preparação para clonagem com Sysprep."
date: 2025-10-02
weight: 3
---

Este guia detalha o processo completo para criar um template reutilizável (uma "imagem dourada") de uma máquina virtual Windows Server no Incus. O processo cobre desde a criação da VM no host, a instalação e configuração dentro do Windows, até a preparação para clonagem em massa.

## 1. Pré-requisitos
Antes de começar, você precisará dos seguintes arquivos:

- **ISO de Instalação do Windows Server:** Baixado do site oficial da Microsoft.
  - Neste guia, usaremos `SERVER_EVAL_x64FRE_en-us.iso`.

- **ISO dos Drivers VirtIO para Windows:** Contém os drivers de disco, rede, o agente Incus e outros componentes essenciais.
  - **Link para Download (Estável):** [virtio-win.iso](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/stable-virtio/virtio-win.iso)
  - Neste guia, usaremos `virtio-win-0.1.248.iso`.

## 2. Preparando o Servidor Host
Os arquivos ISO precisam estar no servidor Incus para que ele possa acessá-los, mesmo que tenha adicionado o servidor ao seu cliente com `incus remote add`.

### 2.1. Crie um diretório para os ISOs no servidor
Execute este comando no seu cliente para criar uma pasta `/root/isos` no servidor.
```bash
ssh root@SERVIDOR "mkdir -p /root/isos"
```

### 2.2. Copie os ISOs para o servidor
A partir da pasta de Downloads do seu cliente, copie os dois arquivos para o servidor.
```bash
scp SERVER_EVAL_x64FRE_en-us.iso root@SERVIDOR:/root/isos/
scp virtio-win-0.1.248.iso root@SERVIDOR:/root/isos/
```

## 3. Criando a VM Base (Template)
Este script cria a VM base, que chamaremos de `winserver-template`.

Garanta que a VM não exista
```bash
incus delete winserver-template --force
```

1. Crie a VM vazia com as configurações 
```bash
incus init winserver-template --empty --vm \
-c limits.cpu=4 \
-c limits.memory=8GiB \
-c image.os="Windows Server 2022" \
-d root,size=85GiB \
-d root,io.bus=nvme 
```

2. Adicione o dispositivo TPM
```bash
incus config device add winserver-template vtpm tpm path=/dev/tpm0
```

3. Adicione o ISO de instalação como um bloco USB
```bash
incus config device add winserver install disk source=/root/SERVER_EVAL_x64FRE_en-us.iso boot.priority=10 io.bus=usb
```

4. Adicione o ISO do VirtIO como um bloco USB (para acesso aos drivers)
```bash
incus config device add winserver-template virtio disk source=/root/isos/virtio-win-0.1.248.iso io.bus=usb
```

5. Adicione o disco de configuração do agente Incus
```bash
incus config device add winserver-template incus_agent disk source=agent:config
```

6. Inicie a VM e o console para começar a instalação
```bash
incus start winserver-template
incus console winserver-template --type vga
```

## 4. Instalação do Windows (Dentro da VM)
Com o console da VM aberto aperte ESC para detectar a instalação:

1. Prossiga até a tela de seleção de disco.
2. Prossiga para a instalação normal.
3. Navegue até o driver de CD do VirtIO (geralmente `D:` ou `E:`).
4. Instale os drivers do VirtIO.

## 5. Pós-Instalação (Comandos no Windows)
Após a instalação terminar e você estiver na Área de Trabalho do Windows, abra o `cmd` como **Administrador** para instalar o agente Incus.

O agente Incus estara montada em `F:`, use o CMD para instalar.

```cmd
F:
incus-agent.exe
```

Após instalar tudo, faça as Windows Updates e instale qualquer software base que desejar em seu template. Ao final, reinicie a VM uma vez.

## 6. Preparando para Clonagem com Sysprep
O Sysprep prepara a instalação do Windows para ser clonada.

Ainda no `cmd` como **Administrador**, execute:
```cmd
C:\Windows\System32\Sysprep\sysprep.exe 
```
Marque a opção de desligamento e faça o teste com a opção generalize desmarcada e marcada, em alguns casos se o Windows não estiver completamente instalado pode ocorrer problemas na cópia não carregar drivers, no entanto ela remove os identificadores únicos da máquina (como o SID - Security Identifier). Se você pular este passo e criar clones, terá múltiplas máquinas na sua rede com o mesmo SID, o que pode causar problemas de autenticação e gerenciamento, especialmente em um domínio do Active Directory. 

A VM será preparada e desligada automaticamente ao final do processo.

## 7. Finalizando o Template no Host
De volta ao terminal do seu cliente, com a VM desligada pelo sysprep, remova os ISOs de instalação:

Remove o ISO de instalação do Windows
```bash
incus config device remove winserver-template install
```

Remove o ISO de drivers VirtIO
```bash
incus config device remove winserver-template virtio
```

Agora, crie o snapshot final, que servirá de base para os clones:
```bash
incus snapshot create winserver-template clean
```

## 8. Criando Clones
Seu template está pronto! Para criar uma nova VM a partir dele:
```bash
incus copy winserver-template/clean minha-nova-vm-01
incus copy winserver-template/clean minha-nova-vm-02
```

Inicie a nova VM (`incus start minha-nova-vm-01`) e ela passará pela tela de configuração inicial do Windows para você definir a senha do administrador. Todos os seus programas, drivers e atualizações já estarão instalados.
