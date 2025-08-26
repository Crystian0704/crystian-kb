---
title: "Guia: Criando e Importando uma Imagem Debian Customizada com Distrobuilder e Incus"
weight: 2 
---



Este documento detalha o processo para construir uma imagem Debian personalizada usando o `distrobuilder` e, em seguida, importá-la para o Incus para ser usada na criação de instâncias.

## Requisitos

- **Distrobuilder**: Você precisa ter o Distrobuilder instalado no seu sistema.

## Passos

### 1. Preparação do Arquivo de Definição

Antes de construir, você precisa de um arquivo de definição (por exemplo, `debian.yaml`) que descreve como a imagem deve ser montada.

- Copie um arquivo `debian.yaml` base para o seu diretório de trabalho.

### 2. Construindo a Imagem

Use o `distrobuilder` para gerar os artefatos da imagem a partir do arquivo de definição. O comando deve ser executado com privilégios de superusuário (`sudo`).

**Comando de Construção:**
```bash
sudo distrobuilder build-incus debian.yaml image/debian-bookworm \
  -o image.architecture=amd64 \
  -o image.release=bookworm \
  -o image.variant=default \
  -o source.url=http://deb.debian.org/debian/
```

**Análise do Comando:**
- **`sudo distrobuilder build-incus`**: O comando base para iniciar a construção de uma imagem compatível com o Incus.
- **`debian.yaml`**: O arquivo de entrada que define a imagem.
- **`image/debian-bookworm`**: O diretório de saída onde os arquivos da imagem (`incus.tar.xz` e `rootfs.squashfs`) serão salvos.
- **`-o <chave>=<valor>`**: Essas flags permitem sobrescrever valores definidos no arquivo YAML.
  - `image.release=bookworm`: Especifica a versão do Debian a ser construída.
  - `source.url=...`: Define o mirror de pacotes a ser usado durante a construção.

### 3. Importando a Imagem para o Incus

Após a construção ser finalizada com sucesso, os arquivos da imagem estarão no diretório de saída. Use o comando `incus image import` para registrá-la no seu ambiente Incus.

**Comando de Importação:**
```bash
incus image import image/debian-bookworm/incus.tar.xz image/debian-bookworm/rootfs.squashfs --alias teste-bookworm
```

**Análise do Comando:**
- **`incus image import`**: O comando do Incus para importar uma imagem a partir de arquivos locais.
- **`.../incus.tar.xz`**: O primeiro argumento é o caminho para o arquivo de metadados da imagem.
- **`.../rootfs.squashfs`**: O segundo argumento é o caminho para o sistema de arquivos raiz (rootfs) da imagem.
- **`--alias teste-bookworm`**: Define um nome amigável (alias) para a imagem, facilitando seu uso posterior para criar instâncias.

Após a importação, a imagem estará disponível localmente e poderá ser listada com `incus image list` e usada para provisionar novas instâncias.