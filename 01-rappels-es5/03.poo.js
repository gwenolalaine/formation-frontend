function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return "" + this.nom + " " + this.prenom + " " + this.pseudo;
    }
    this.age;

    this.getInitiales = function(){
        return this.nom.charAt(0) + this.prenom.charAt(0);
    }
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

function afficherPersonne(Personne){
    console.log(Personne.nom, Personne.prenom, Personne.pseudo, Personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

Personne.prototype.age = "NON RENSEIGNE"

console.log(jules.age);

jules.age = 30;
console.log(jules.age);

console.log(jules.getInitiales());

var robert = {
    prenom : "Robert",
    nom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function(){
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
}


afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient){
   Personne.call(this,nom, prenom, pseudo);
   this.numeroClient = numeroClient;

    this.getInfos = function (){
        return this.numeroClient + " " +  this.nom  + " " + this.prenom;
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");

afficherPersonne(steve);
console.log(steve.getInfos());