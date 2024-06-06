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

## IDEs usadas
- Intellij
- VSCode
  
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
