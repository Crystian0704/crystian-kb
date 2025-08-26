var relearn_searchindex = [
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento",
    "content": "Arquivo: _index.md (A página principal do capítulo) Bem-vindo ao guia completo de como usar o Hugo para criar sua base de conhecimento!\nNeste capítulo, você aprenderá o essencial para gerenciar seu site de documentação, desde a criação de páginas e capítulos até a inserção de imagens e links internos.\nTópicos abordados:\nEstrutura Básica: Entenda as pastas mais importantes do seu projeto. Adicionando Conteúdo: Aprenda a diferença entre capítulos e páginas e como organizá-los. Trabalhando com Imagens: Descubra o local correto para suas imagens e como exibi-las. Criando Links Internos: Use o método do Hugo para criar links robustos que nunca quebram. Navegue pelos tópicos no menu lateral para começar.\nArquivo: 1-estrutura-basica.md title: “1. Estrutura Básica de Pastas” weight: 10 Para trabalhar com Hugo de forma eficiente, você precisa conhecer apenas três locais principais no seu projeto. Todo o seu trabalho se concentrará aqui.\nA Pasta content Esta é a pasta mais importante. Todo o conteúdo textual do seu site vive aqui.\nOrganização é a Chave: A estrutura de pastas que você cria dentro de content/ se torna a estrutura de URLs e do menu de navegação do seu site. Arquivos Markdown: Cada página ou capítulo é um arquivo de texto simples com a extensão .md. A Pasta static Use esta pasta para todos os seus “arquivos estáticos”.\nO que são arquivos estáticos? Imagens (PNG, JPG), documentos (PDF), folhas de estilo (CSS) ou scripts (JS) que não precisam ser processados pelo Hugo. Como funciona? Tudo que você coloca aqui é copiado para a raiz do site final. Se você colocar um arquivo em static/imagens/logo.png, ele estará acessível em seusite.com/imagens/logo.png. O Arquivo hugo.toml Este é o cérebro do seu site. É o arquivo de configuração principal onde você define:\nO título do site. O tema que está sendo usado (theme = \"relearn\"). Configurações de menu, idioma e outros parâmetros globais. Você raramente precisará mexer em outras pastas além destas três.\nArquivo: 2-adicionando-conteudo.md title: “2. Adicionando Capítulos e Páginas” weight: 20 O Hugo organiza o conteúdo de forma hierárquica. Para criar essa estrutura, você precisa entender a diferença entre dois tipos de arquivo.\nCapítulos (ou Seções) com _index.md Um capítulo é como uma pasta que agrupa várias páginas. Para definir a página principal de um capítulo, crie um arquivo chamado _index.md dentro de uma pasta.\nExemplo: Para criar um capítulo chamado “Guia de Instalação”, você criaria a seguinte estrutura:\ncontent/ └── guia-de-instalacao/ └── _index.md \u003c-- Esta é a página principal do capítulo Páginas (ou Artigos) com qualquer-nome.md Uma página é um artigo individual dentro de um capítulo. Ela pode ter qualquer nome, desde que termine com .md.\nExemplo: Adicionando páginas de instalação para Windows e Linux:\ncontent/ └── guia-de-instalacao/ ├── _index.md ├── windows.md \u003c-- Página/artigo └── linux.md \u003c-- Página/artigo Ordenando o Menu com weight Para controlar a ordem em que os itens aparecem no menu lateral, adicione o parâmetro weight (peso) no cabeçalho de cada arquivo. Itens com weight menor aparecem primeiro.\nExemplo de content/guia-de-instalacao/windows.md:\n--- title: \"Instalando no Windows\" weight: 10 # Aparecerá antes de um item com weight 20 --- Conteúdo sobre a instalação no Windows... Arquivo: 3-adicionando-imagens.md title: “3. Trabalhando com Imagens” weight: 30 Adicionar imagens à sua documentação é um processo simples e direto. A regra principal é usar a pasta static.\nPasso 1: Coloque a Imagem na Pasta static Dentro da pasta static, crie uma subpasta para organizar suas imagens. Um bom nome é imagens. Copie seu arquivo de imagem (ex: diagrama-arquitetura.png) para dentro dessa pasta. Sua estrutura de pastas ficará assim:\nstatic/ └── imagens/ └── diagrama-arquitetura.png Passo 2: Referencie a Imagem no seu Conteúdo Agora, em qualquer um dos seus arquivos .md, você pode exibir a imagem usando a sintaxe padrão do Markdown.\nO caminho para a imagem sempre começa com uma barra /, que representa a raiz do seu site (a pasta static).\nExemplo de como exibir a imagem:\n## Diagrama da Nossa Arquitetura Abaixo está o diagrama que ilustra o fluxo de dados do sistema. ![Este é o texto alternativo, importante para acessibilidade](/imagens/diagrama-arquitetura.png) O texto dentro dos colchetes `[]` é o \"texto alternativo\", que é exibido se a imagem não carregar e é lido por leitores de tela para pessoas com deficiência visual. Arquivo: 4-criando-links.md title: “4. Criando Links Internos” weight: 40 Criar links entre as páginas da sua documentação é crucial. O Hugo oferece uma maneira segura e robusta de fazer isso, que evita links quebrados.\nO Método Correto: Shortcode ref Em vez de usar a sintaxe normal do Markdown como [texto](../pasta/arquivo.md), que é frágil, use o “shortcode” ref do Hugo.\nA sintaxe é: {{/*\u003c ref \"caminho/do/arquivo.md\" \u003e*/}}\nO caminho para o arquivo é sempre relativo à pasta content/. Vantagem: Se você tentar linkar para um arquivo que não existe, o Hugo avisará com um erro ao construir o site. Isso garante que você nunca terá links quebrados! Exemplo Prático Imagine que você tem a seguinte estrutura de arquivos:\ncontent/ ├── guia-de-instalacao/ │ └── windows.md └── configuracao-avancada/ └── _index.md E você quer criar um link de dentro do arquivo windows.md para a página de configuracao-avancada.\nVocê escreveria o seguinte no arquivo windows.md:\n--- title: \"Instalando no Windows\" weight: 10 --- Após concluir a instalação, talvez você queira ver as opções de [Configuração Avançada]({{/*\u003c ref \"configuracao-avancada/_index.md\" \u003e*/}}). Lembre-se de sempre incluir o nome completo do arquivo, incluindo `_index.md` quando for o caso. O Hugo irá converter isso automaticamente para o link correto no site final.",
    "description": "Arquivo: _index.md (A página principal do capítulo) Bem-vindo ao guia completo de como usar o Hugo para criar sua base de conhecimento!\nNeste capítulo, você aprenderá o essencial para gerenciar seu site de documentação, desde a criação de páginas e capítulos até a inserção de imagens e links internos.\nTópicos abordados:\nEstrutura Básica: Entenda as pastas mais importantes do seu projeto. Adicionando Conteúdo: Aprenda a diferença entre capítulos e páginas e como organizá-los.",
    "tags": [],
    "title": "Como Usar o Hugo para Documentação",
    "uri": "/crystian-kb/como-usar-hugo/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops \u003e Linux \u003e Gerenciador Incus",
    "content": "Começando a Instalação Siga os passos abaixo para instalar o Incus no seu sistema…",
    "description": "Começando a Instalação Siga os passos abaixo para instalar o Incus no seu sistema…",
    "tags": [],
    "title": "Guia de Instalação",
    "uri": "/crystian-kb/devops/linux/incus/instalacao/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento",
    "content": "Esta é a seção sobre o Linux. Aqui você encontrará guias de instalação, configuração, etc.",
    "description": "Esta é a seção sobre o Linux. Aqui você encontrará guias de instalação, configuração, etc.",
    "tags": [],
    "title": "Devops",
    "uri": "/crystian-kb/devops/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops",
    "content": "Esta é a seção sobre o Linux. Aqui você encontrará guias de instalação, configuração, etc.",
    "description": "Esta é a seção sobre o Linux. Aqui você encontrará guias de instalação, configuração, etc.",
    "tags": [],
    "title": "Linux",
    "uri": "/crystian-kb/devops/linux/index.html"
  },
  {
    "breadcrumb": "Bem-vindo à Minha Base de Conhecimento \u003e Devops \u003e Linux",
    "content": "Esta é a seção sobre o Incus. Aqui você encontrará guias de instalação, configuração, etc.",
    "description": "Esta é a seção sobre o Incus. Aqui você encontrará guias de instalação, configuração, etc.",
    "tags": [],
    "title": "Gerenciador Incus",
    "uri": "/crystian-kb/devops/linux/incus/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Esta é a minha central de conhecimento pessoal, um lugar para organizar e compartilhar informações sobre diversos tópicos importantes para mim.\nSinta-se à vontade para explorar os capítulos abaixo ou usar a barra de busca para encontrar algo específico.\nTópicos Principais Explore as seções principais para começar:\nAcesso Rápido",
    "description": "Esta é a minha central de conhecimento pessoal, um lugar para organizar e compartilhar informações sobre diversos tópicos importantes para mim.\nSinta-se à vontade para explorar os capítulos abaixo ou usar a barra de busca para encontrar algo específico.\nTópicos Principais Explore as seções principais para começar:\nAcesso Rápido",
    "tags": [],
    "title": "Bem-vindo à Minha Base de Conhecimento",
    "uri": "/crystian-kb/index.html"
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
