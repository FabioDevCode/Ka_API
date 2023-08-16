# ka_api

Node 18.16.1 ou plus <br>
Express.js<br>
MySQL<br>

### Etape 1
Créer une BBD "ka_companies" en MySQL

### Etape 2
Transformer le fichier **.env.example** en **.env**
Remplir les varibles **DB_USER** et **DB_PWD** en focntion de votre BBD.
Modifier les autres variables si nécessaires.
----
Dans le dossier **./config**, transformer le fichiert **script_config.example.js** en **script_config.js**
Remplir les information à l'indentique du fichier **.env** (nécessaire pour lancer le script Etape 5);

### Etape 3
```sh
npm install
```

### Etape 4
Avec nodemon
```sh
npm run dev
```

Sans nodemaon
```sh
npm run start
```
ou
```sh
node sever
```

### Etape 5
Ce placer dnas le dossier **./scripts**

puis
```sh
node get_data.js
```


