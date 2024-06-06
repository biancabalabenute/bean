# bean
Este é um projeto para a disciplina de Laboratório de Banco de Dados. Ele foi desenvolvido para auxiliar no gerenciamento de marketplaces.

## Tecnologias
- Java
- Spring Boot
- React JS

## Pré-requisitos
- Java JDK 17
- Node.js
- npm (gerenciador de pacotes do Node.js)

## Ambiente de desenvolvimento usado
Este projeto foi desenvolvido utilizando as seguintes ferramentas:

- **IntelliJ IDEA**: Uma poderosa IDE para desenvolvimento Java, utilizada para escrever, depurar e executar o código do projeto.
- **VS Code**:Conhecido por sua leveza, interface intuitiva e extensibilidade, proporcionando uma experiência de desenvolvimento eficiente e produtiva.
- **Maven**: Ferramenta de automação de compilação utilizada para gerenciar as dependências do projeto e realizar builds.
- **PostgreSQL**: Banco de dados relacional utilizado para persistência de dados. Recomenda-se a utilização do pgAdmin ou de outras ferramentas de administração para gerenciar o banco de dados.
- **Postman**: Uma plataforma de colaboração para desenvolvimento de APIs. Utilizado para testar endpoints e realizar requisições HTTP durante o desenvolvimento da aplicação.

Certifique-se de ter essas ferramentas instaladas e configuradas corretamente para uma experiência de desenvolvimento sem problemas.

## Como baixar
Primeiro voce precisa clonar o repositorio:
```bash
# Clone o repositório
$ git clone https://github.com/biancabalabenute/bean.git
```
## Executando o projeto:
1 - Para o banco estou usando o PostgreSQL na porta padrão 5432. Importante criar um BD com o nome beanDB. Mude a senha para a que você definiu quando instalou o BD e o usuário se for diferente do padrão.
```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/beanDB
spring.datasource.username=postgres
spring.datasource.password=********
```
2 - Abra e execute o backend pelo Intellij para ele criar as tabelas. (Caso queira iniciar o banco com alguns valores, existe um arquivo na página principal com alguns inserts para facilitar) <br />
3 - Abra o VSCode e em seu terminal execute o comando:
```bash
npm install
```
Com isso as dependencias do node serão instaladas e o projeto estará pronto para rodar, voce pode fazer isso com o comando:
```bash
npm start
```

Com isso o arquivo começará rodar web, voce tambem pode acessar pela URL: http://localhost:3000/home.
Caso já tenha usado arquivo de inserts-BD poderá ver alguns dados no frontend. 
