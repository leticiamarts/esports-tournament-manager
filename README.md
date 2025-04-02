# Esports Tournament Manager
Este é um projeto que utiliza o npm para gerenciar dependências e executar o ambiente de desenvolvimento. Abaixo estão as instruções para instalar as dependências e rodar o projeto.

## Requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados. Você pode verificar se os tem instalados utilizando os seguintes comandos:

```bash
node -v
npm -v
```

Se não tiver o Node.js e npm instalados, baixe e instale a partir do site oficial.


## Instalar Dependências

Para instalar todas as dependências do projeto, execute o seguinte comando dentro do diretório do projeto:

```bash
npm install
```


## Rodar o Projeto

Para rodar o servidor de desenvolvimento, use o comando:
```bash
docker-compose up -d

docker exec -it esports-tournament-manager-web-1 bash

php /var/www/html/create_table.php

exit

npm run dev
```

visualizar banco:

```bash
docker exec -it esports-tournament-manager-db-1 psql -U esports esports_db

\dt

SELECT * FROM users;

-- Sair
\q
```

