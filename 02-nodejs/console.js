const readline = require('readline');
var service = require('./service');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

var menu={
    "1":{
        libelle:'1. Liste de tous les présentateurs',
        execute:function(){
            console.log(service.listerTousLesPresentateurs().map(presentateur=>presentateur.firstname +" " + presentateur.lastname))
        }
    },
    "2":{
        libelle:'2. Top présentateurs',
        execute: function(){
            console.log(service.listerTopPresentateurs().map(presentateur=>presentateur.firstname +" " + presentateur.lastname))
        }
    },
    "3":{
        libelle:'3. Liste des sessions',
        execute:function(){
            console.log(service.listerToutesLesSessions().map(session=>session.title))
        }
    },
    "4":{
        libelle:'4. Détail d\'une session',
        execute:function(){
            rl.question('L\'id de la session ?', (id) => {
            if(id !=null){
                console.log(service.trouverUneSession(id).map(session=>session.title + " " + session.hour + " " + session.confRoom + " " + session.type));
                callMenu();
            }
        })
    },
},
    "5":{
        libelle:'5. Quitter la session',
        execute:function(){
            rl.close();
        }
    }
}
  
function callMenu(){
    console.log('*** Application Conférence ***')
    for(option in menu){
        console.log(menu[option].libelle);
    }
  
    rl.question('Votre réponse', (answer) => {
      // TODO: Log the answer in a database
      menu[answer].execute();
      if(answer != "5"){
          callMenu();
      }else{
          rl.close();
      }
   })
}
callMenu()