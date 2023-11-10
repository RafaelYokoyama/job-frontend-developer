<h1 align="center"> Pesquisar Músicos</h1>

<img src="https://github.com/RafaelYokoyama/job-frontend-developer/blob/master/.github/gifs/GIF-WEB.gif" alt="Image description">

> 🔎 Website para pesquisar por pessoas no youtube


## :page_facing_up: Desafio Técnico: Aplicação de Busca de Bandas e Artistas

**Visão Geral**:
Este desafio tem como objetivo avaliar suas habilidades técnicas na construção de uma aplicação frontend para busca de bandas e artistas, utilizando as APIs do Youtube e TicketMaster.

**Requisitos Funcionais**:

**Campo de Busca**:

- Implemente uma tela com um campo de busca centralizado.

- Ao inserir o nome da banda ou artista e acionar a pesquisa, a aplicação deve submeter a consulta para a API do Youtube.

**Listagem de Vídeos:**

- Após a pesquisa, a aplicação deve exibir uma lista de vídeos relacionados à banda ou artista.

- Cada item da lista deve apresentar informações básicas, como título, descrição e thumbnail do vídeo. Quanto mais detalhes, melhor.

- Ao clicar em um vídeo, a aplicação deve permitir a reprodução do vídeo, seja incorporando-o em um modal ou através de um simples link.

**Posicionamento do Campo de Busca**:

- Após o submit do formulário, o campo de busca deve ser reposicionado no topo da tela para otimizar o espaço no centro da página.

**Informações da Banda:**

- Além da lista de vídeos, a aplicação deve exibir informações sobre a banda ou artista.
- Utilize a **API do TicketMaster**, especialmente o recurso de **Attraction Search da Discovery API**, para obter dados de contato em redes sociais, imagens e outras informações relevantes

## 📁 Pages

O site possui uma página, que é:

- **Home:** A página principal é a única do projeto e apresenta algumas informações, como: um campo de busca que localiza que os artistas e lista suas infomações com video .

## 🎯 Steps

**Configuração Inicial**:

- Inicializei o projeto utilizando Next.js, TypeScript e Tailwind CSS para uma base sólida e eficiente.
- Configurei o projeto com jest, editor config, prettier, eslint, axios

- Adicionei a biblioteca de ícones para uma experiência visual enriquecida.

**Estrutura :**

- Criei uma estrutura organizada para facilitar a manutenção e escalabilidade do projeto.
Dividi as pastas principais em **.github ,animations, api, app, components, context, services, tests, types, e utils**.

**.github:**

- Incluí a pasta .github para armazenar recursos relacionados à documentação, como prints e informações adicionais sobre o funcionamento do projeto.
  **animations:**

Esta pasta concentra todas as animações do projeto, proporcionando uma organização centralizada e fácil de manter.

**services:**

- Aqui, agrupei todas as partes relacionadas à integração com a API.
- Criação de baseUrls
- Organizei os serviços de acordo com os endpoints ou funcionalidades para manutenção eficiente.

**tests**:

- Implementei os testes utilizando Jest, mantendo-os em uma estrutura clara e intuitiva.
- A pasta mocks contém mocks específicos para facilitar a simulação de dados no ambiente de teste.

**types:**

- Centralizei todas as definições de tipos neste diretório, promovendo uma consistência nas interfaces utilizadas em todo o projeto.

**context:**

- Utilizei a Context API do React para gerenciar o estado global da aplicação.
- Essa pasta se torna o hub central para o compartilhamento de dados entre componentes.

**utils:**

- Armazenei funções utilitárias e helpers neste diretório para manter o código limpo e modular.
  As funções aqui são reutilizáveis em diferentes partes do projeto.

**app:**

- Essa pasta contém o núcleo da aplicação Next.js.

**Desenvolvimento das APIs:**

- No diretório services, criei módulos para interação com as APIs.
- Para a YouTube API, estabeleci a base URL e funções como fetchYoutubeVideos e fetchYoutubeVideoDetails.
- Similarmente, para a Ticketmaster API, configurei a base URL e desenvolvi a função fetchTicketmasterData.

**Implementação Inicial:**

- Na raiz do projeto, construí uma página inicial com um input simples para busca, utilizei primeiro as api do youtube para buscar e trazer os detalhes,depois a api da Ticketmaster para trazer o resto das informações.
- Organizei as operações iniciais e a estrutura funcional.

**Refatoração e Organização:**

- Refatorei o código inicial, dividindo-o em componentes em um diretório components.
- Simplifiquei funções

**Introdução do Contexto:**

- Criei um contexto em context para gerenciar o estado global da aplicação, facilitando o compartilhamento de dado

**Estilização Responsiva:**

Utilizando Tailwind CSS, comecei a estilização pelo design responsivo, depois fui para a web ajsutando conforme necessário.

**Aprimoramentos Adicionais:**

- Adicionei recursos como um componente de loading para indicar carregamento de dados.
- Implementei mensagens de erro específicas, como para excesso de requisições à API do YouTube ou quando nenhum usuário é encontrado.

**Adição de Testes:**

- Implementei testes usando Jest , incluindo mocks para simular dados durante os testes.

## 📁 Screen

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/RafaelYokoyama/job-frontend-developer/raw/master/.github/screens/Screenshot_1.png" alt="Imagem 1" width="300"/>
    <img src="https://github.com/RafaelYokoyama/job-frontend-developer/raw/master/.github/screens/Screenshot_2.png" alt="Imagem 2" width="300"/>
    <img src="https://github.com/RafaelYokoyama/job-frontend-developer/raw/master/.github/screens/Screenshot_3.png" alt="Imagem 3" width="200"/>
    <img src="https://github.com/RafaelYokoyama/job-frontend-developer/raw/master/.github/screens/Screenshot_4.png" alt="Imagem 4" width="250"/>
    <img src="https://github.com/RafaelYokoyama/job-frontend-developer/raw/master/.github/screens/Screenshot_5.png" alt="Imagem 5" width="300"/>
</div>

## 📁 Gifs
<div style="display: flex; justify-content: space-between;">
   <img src="https://github.com/RafaelYokoyama/job-frontend-developer/blob/master/.github/gifs/GIF-MOBILE.gif" alt="Imagem 1" width="200"/>
    <img src="https://github.com/RafaelYokoyama/job-frontend-developer/blob/master/.github/gifs/GIF-WEB.gif" alt="Imagem 2" width="800"
</div>

## 🚀 Tecnologiaas

- [Nextjs](https://nextjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [lucide Icon](https://lucide.dev/icons/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## :white_check_mark: Requerimento

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Starting

```bash
#  Clone este projeto
$ git clone https://github.com/RafaelYokoyama/job-frontend-developer.git
# Acessar
$ cd job-frontend-developer
# Instalar dependências
$ yarn
# Execute o projeto
$ yarn dev
# O servidor será inicializado em <http://localhost:3000>
```

## Configuração das Chaves de API

Para que este projeto funcione corretamente, você precisará obter chaves de API para as APIs do YouTube e do Ticketmaster. Siga as instruções abaixo para gerar e configurar suas chaves:

### 1. Chave de API do YouTube

Para obter uma chave de API do YouTube, siga os passos abaixo:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um projeto existente.
3. No painel de navegação à esquerda, clique em "API e Serviços" e depois em "Credenciais".
4. Clique em "Criar credenciais" e escolha "Chave de API".
5. Copie a chave gerada.

Agora, abra o arquivo `.env.local` na raiz do projeto e adicione a seguinte linha:

```env
NEXT_PUBLIC_YOUTUBE_API_KEY=SuaChaveDoYouTubeAqui
```

### 2. Chave de API do Ticketmaster

Para obter uma chave de API do Ticketmaster, siga os passos abaixo:

1. Acesse [Ticketmaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/).
2. Crie uma conta ou faça login.
3. Crie um novo aplicativo para obter sua chave de API.
4. Copie a chave gerada.

Agora, abra o arquivo `.env.local` na raiz do projeto e adicione a seguinte linha:

```env
NEXT_PUBLIC_TICKETMASTER_API_KEY=SuaChaveDoTicketmasterAqui
```



## 🤝 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/60978293?s=400&u=ac4be92aaa9bd68b77f92a473400213582d3e032&v=4 " width="100px;" alt="Photo do Rafael"/><br>
        <sub>
          <b>Rafael Yokoyama </b>
        </sub>
      </a>
    </td>
  </tr>
</table>
