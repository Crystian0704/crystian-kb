var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Esta é a minha central de conhecimento pessoal, um lugar para organizar códigos, tutoriais e tudo que precisa ser refeito, tendo como base LLMs, Youtube, livros, experiência pessoal e profissional.",
    "description": "Esta é a minha central de conhecimento pessoal, um lugar para organizar códigos, tutoriais e tudo que precisa ser refeito, tendo como base LLMs, Youtube, livros, experiência pessoal e profissional.",
    "tags": [],
    "title": "Bem-vindo à Minha Base de Conhecimento",
    "uri": "/crystian-kb/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops \u003e Linux \u003e Incus",
    "content": "Instalação",
    "description": "Instalação",
    "tags": [],
    "title": "Guia de Instalação",
    "uri": "/crystian-kb/devops/linux/incus/instalacao/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento",
    "content": "Arquivo: _index.md (A página principal do capítulo) Bem-vindo ao guia completo de como usar o Hugo para criar sua base de conhecimento!\nNeste capítulo, você aprenderá o essencial para gerenciar seu site de documentação, desde a criação de páginas e capítulos até a inserção de imagens e links internos.\nTópicos abordados:\nEstrutura Básica: Entenda as pastas mais importantes do seu projeto. Adicionando Conteúdo: Aprenda a diferença entre capítulos e páginas e como organizá-los. Trabalhando com Imagens: Descubra o local correto para suas imagens e como exibi-las. Criando Links Internos: Use o método do Hugo para criar links robustos que nunca quebram. Navegue pelos tópicos no menu lateral para começar.\nArquivo: 1-estrutura-basica.md title: “1. Estrutura Básica de Pastas” weight: 10 Para trabalhar com Hugo de forma eficiente, você precisa conhecer apenas três locais principais no seu projeto. Todo o seu trabalho se concentrará aqui.\nA Pasta content Esta é a pasta mais importante. Todo o conteúdo textual do seu site vive aqui.\nOrganização é a Chave: A estrutura de pastas que você cria dentro de content/ se torna a estrutura de URLs e do menu de navegação do seu site. Arquivos Markdown: Cada página ou capítulo é um arquivo de texto simples com a extensão .md. A Pasta static Use esta pasta para todos os seus “arquivos estáticos”.\nO que são arquivos estáticos? Imagens (PNG, JPG), documentos (PDF), folhas de estilo (CSS) ou scripts (JS) que não precisam ser processados pelo Hugo. Como funciona? Tudo que você coloca aqui é copiado para a raiz do site final. Se você colocar um arquivo em static/imagens/logo.png, ele estará acessível em seusite.com/imagens/logo.png. O Arquivo hugo.toml Este é o cérebro do seu site. É o arquivo de configuração principal onde você define:\nO título do site. O tema que está sendo usado (theme = \"relearn\"). Configurações de menu, idioma e outros parâmetros globais. Você raramente precisará mexer em outras pastas além destas três.\nArquivo: 2-adicionando-conteudo.md title: “2. Adicionando Capítulos e Páginas” weight: 20 O Hugo organiza o conteúdo de forma hierárquica. Para criar essa estrutura, você precisa entender a diferença entre dois tipos de arquivo.\nCapítulos (ou Seções) com _index.md Um capítulo é como uma pasta que agrupa várias páginas. Para definir a página principal de um capítulo, crie um arquivo chamado _index.md dentro de uma pasta.\nExemplo: Para criar um capítulo chamado “Guia de Instalação”, você criaria a seguinte estrutura:\ncontent/ └── guia-de-instalacao/ └── _index.md \u003c-- Esta é a página principal do capítulo Páginas (ou Artigos) com qualquer-nome.md Uma página é um artigo individual dentro de um capítulo. Ela pode ter qualquer nome, desde que termine com .md.\nExemplo: Adicionando páginas de instalação para Windows e Linux:\ncontent/ └── guia-de-instalacao/ ├── _index.md ├── windows.md \u003c-- Página/artigo └── linux.md \u003c-- Página/artigo Ordenando o Menu com weight Para controlar a ordem em que os itens aparecem no menu lateral, adicione o parâmetro weight (peso) no cabeçalho de cada arquivo. Itens com weight menor aparecem primeiro.\nExemplo de content/guia-de-instalacao/windows.md:\n--- title: \"Instalando no Windows\" weight: 10 # Aparecerá antes de um item com weight 20 --- Conteúdo sobre a instalação no Windows... Arquivo: 3-adicionando-imagens.md title: “3. Trabalhando com Imagens” weight: 30 Adicionar imagens à sua documentação é um processo simples e direto. A regra principal é usar a pasta static.\nPasso 1: Coloque a Imagem na Pasta static Dentro da pasta static, crie uma subpasta para organizar suas imagens. Um bom nome é imagens. Copie seu arquivo de imagem (ex: diagrama-arquitetura.png) para dentro dessa pasta. Sua estrutura de pastas ficará assim:\nstatic/ └── imagens/ └── diagrama-arquitetura.png Passo 2: Referencie a Imagem no seu Conteúdo Agora, em qualquer um dos seus arquivos .md, você pode exibir a imagem usando a sintaxe padrão do Markdown.\nO caminho para a imagem sempre começa com uma barra /, que representa a raiz do seu site (a pasta static).\nExemplo de como exibir a imagem:\n## Diagrama da Nossa Arquitetura Abaixo está o diagrama que ilustra o fluxo de dados do sistema. ![Este é o texto alternativo, importante para acessibilidade](/imagens/diagrama-arquitetura.png) O texto dentro dos colchetes `[]` é o \"texto alternativo\", que é exibido se a imagem não carregar e é lido por leitores de tela para pessoas com deficiência visual. Arquivo: 4-criando-links.md title: “4. Criando Links Internos” weight: 40 Criar links entre as páginas da sua documentação é crucial. O Hugo oferece uma maneira segura e robusta de fazer isso, que evita links quebrados.\nO Método Correto: Shortcode ref Em vez de usar a sintaxe normal do Markdown como [texto](../pasta/arquivo.md), que é frágil, use o “shortcode” ref do Hugo.\nA sintaxe é: {{\u003c ref “caminho/do/arquivo.md” \u003e}}\nO caminho para o arquivo é sempre relativo à pasta content/. Vantagem: Se você tentar linkar para um arquivo que não existe, o Hugo avisará com um erro ao construir o site. Isso garante que você nunca terá links quebrados! Exemplo Prático Imagine que você tem a seguinte estrutura de arquivos:\ncontent/ ├── guia-de-instalacao/ │ └── windows.md └── configuracao-avancada/ └── _index.md E você quer criar um link de dentro do arquivo windows.md para a página de configuracao-avancada.\nVocê escreveria o seguinte no arquivo windows.md:\n--- title: \"Instalando no Windows\" weight: 10 --- Após concluir a instalação, talvez você queira ver as opções de [Configuração Avançada]({{\u003c ref \"configuracao-avancada/_index.md\" \u003e}}). Lembre-se de sempre incluir o nome completo do arquivo, incluindo `_index.md` quando for o caso. O Hugo irá converter isso automaticamente para o link correto no site final.",
    "description": "Arquivo: _index.md (A página principal do capítulo) Bem-vindo ao guia completo de como usar o Hugo para criar sua base de conhecimento!\nNeste capítulo, você aprenderá o essencial para gerenciar seu site de documentação, desde a criação de páginas e capítulos até a inserção de imagens e links internos.\nTópicos abordados:\nEstrutura Básica: Entenda as pastas mais importantes do seu projeto. Adicionando Conteúdo: Aprenda a diferença entre capítulos e páginas e como organizá-los.",
    "tags": [],
    "title": "Como Usar o Hugo para sua base de conhecimento",
    "uri": "/crystian-kb/como-usar-hugo/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops \u003e Linux \u003e Incus",
    "content": "Este documento detalha o processo para construir uma imagem Debian personalizada usando o distrobuilder e, em seguida, importá-la para o Incus para ser usada na criação de instâncias.\nRequisitos Distrobuilder: Você precisa ter o Distrobuilder instalado no seu sistema. Passos 1. Preparação do Arquivo de Definição Antes de construir, você precisa de um arquivo de definição (por exemplo, debian.yaml) que descreve como a imagem deve ser montada.\nCopie um arquivo debian.yaml base para o seu diretório de trabalho. 2. Construindo a Imagem Use o distrobuilder para gerar os artefatos da imagem a partir do arquivo de definição. O comando deve ser executado com privilégios de superusuário (sudo).\nComando de Construção:\nsudo distrobuilder build-incus debian.yaml image/debian-bookworm \\ -o image.architecture=amd64 \\ -o image.release=bookworm \\ -o image.variant=default \\ -o source.url=http://deb.debian.org/debian/ Análise do Comando:\nsudo distrobuilder build-incus: O comando base para iniciar a construção de uma imagem compatível com o Incus. debian.yaml: O arquivo de entrada que define a imagem. image/debian-bookworm: O diretório de saída onde os arquivos da imagem (incus.tar.xz e rootfs.squashfs) serão salvos. -o \u003cchave\u003e=\u003cvalor\u003e: Essas flags permitem sobrescrever valores definidos no arquivo YAML. image.release=bookworm: Especifica a versão do Debian a ser construída. source.url=...: Define o mirror de pacotes a ser usado durante a construção. 3. Importando a Imagem para o Incus Após a construção ser finalizada com sucesso, os arquivos da imagem estarão no diretório de saída. Use o comando incus image import para registrá-la no seu ambiente Incus.\nComando de Importação:\nincus image import image/debian-bookworm/incus.tar.xz image/debian-bookworm/rootfs.squashfs --alias teste-bookworm Análise do Comando:\nincus image import: O comando do Incus para importar uma imagem a partir de arquivos locais. .../incus.tar.xz: O primeiro argumento é o caminho para o arquivo de metadados da imagem. .../rootfs.squashfs: O segundo argumento é o caminho para o sistema de arquivos raiz (rootfs) da imagem. --alias teste-bookworm: Define um nome amigável (alias) para a imagem, facilitando seu uso posterior para criar instâncias. Após a importação, a imagem estará disponível localmente e poderá ser listada com incus image list e usada para provisionar novas instâncias.",
    "description": "Este documento detalha o processo para construir uma imagem Debian personalizada usando o distrobuilder e, em seguida, importá-la para o Incus para ser usada na criação de instâncias.\nRequisitos Distrobuilder: Você precisa ter o Distrobuilder instalado no seu sistema. Passos 1. Preparação do Arquivo de Definição Antes de construir, você precisa de um arquivo de definição (por exemplo, debian.yaml) que descreve como a imagem deve ser montada.\nCopie um arquivo debian.",
    "tags": [],
    "title": "Guia: Criando e Importando uma Imagem Debian Customizada com Distrobuilder e Incus",
    "uri": "/crystian-kb/devops/linux/incus/criar_imagens/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Devops",
    "uri": "/crystian-kb/devops/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Linux",
    "uri": "/crystian-kb/devops/linux/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops \u003e Linux",
    "content": "Esta é a seção sobre o Incus. Aqui você encontrará guias de instalação, configuração, etc.",
    "description": "Esta é a seção sobre o Incus. Aqui você encontrará guias de instalação, configuração, etc.",
    "tags": [],
    "title": "Incus",
    "uri": "/crystian-kb/devops/linux/incus/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops \u003e Linux",
    "content": "Esta é a seção sobre o Opentofu. Aqui você encontrará guias de instalação, configuração, etc.",
    "description": "Esta é a seção sobre o Opentofu. Aqui você encontrará guias de instalação, configuração, etc.",
    "tags": [],
    "title": "Opentofu",
    "uri": "/crystian-kb/devops/linux/opentofu/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/crystian-kb/categories/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/crystian-kb/tags/index.html"
  }
]
