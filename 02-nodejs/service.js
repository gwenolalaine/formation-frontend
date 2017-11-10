var donnees = require("./data/devfest-2015")
module.exports = {
    listerTousLesPresentateurs: function (){
            return donnees.speakers;
    },

    listerToutesLesSessions: function (){
        return donnees.sessions;
    },

    trouverUneSession :function (idSession){
        return donnees.sessions.filter(session=>session.id==idSession);
    },

    listerTopPresentateurs: function (){
        return donnees.speakers.filter(s=>s.topspeaker);
    }
}