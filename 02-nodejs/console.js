const readline = require('readline');
var service = require('./service');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function afficherSpeakers(speakers) {
    var str = ""
    if (speakers != undefined) {
        speakers.forEach(function (nom) {
            str = str + service.listerTousLesPresentateurs().filter(speaker => speaker.id == nom ).map(speaker => speaker.lastname + " " + speaker.firstname+" ")
        });
    } else {
        str = "Aucun"
    }
    return str
}

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
                console.log(service.trouverUneSession(id).map(session=>session.title + " présenté par " + afficherSpeakers(session.speakers)));
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



console.log('*** Application Conférence ***')
for(option in menu){
    console.log(menu[option].libelle);
}
  
function callMenu(){
    rl.question('Votre réponse', (answer) => {
        if(menu[answer] !=null){
            menu[answer].execute();
            if(answer != "5"){
                callMenu();
            }
        }else{
            console.log("Cette option n'existe pas");
            callMenu();
        }
      
   })
}
callMenu()