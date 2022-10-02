#! /bin/bash

function initialize_back_end() {
  printf "\n> ASYNC: Instalando o back-end e inicializando o banco de dados com o ODM em modo de desenvolvimento\n"
  (
    cd ./back-end;
    npm install;
    npm run dev;
  )
}

initialize_back_end

printf "\n> Script terminado\n\n"