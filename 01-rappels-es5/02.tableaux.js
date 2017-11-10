var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(function(element){
    console.log(element);
})

lettreADansToutesLesVilles = villes.every(function(element){
    return element.includes("a");
});

console.log("lettreADansToutesLesVilles == " + lettreADansToutesLesVilles)

auMoinsUneVilleAvecUnTiret = villes.some(function(element){
    return element.includes("-");
})
console.log("auMoinsUneVilleAvecUnTiret == " + auMoinsUneVilleAvecUnTiret)

villesSansTiretSansEspace = villes.filter(function(element){
    return !element.includes("-") && !element.includes(" ");
})

console.log("villesSansTiretSansEspace == " + villesSansTiretSansEspace)

villesMajusculeSeTerminantParS = villes.filter(function(element){
    return element.endsWith("s");
}).map(function(element){
    return element.toUpperCase()
})

console.log("villesMajusculeSeTerminantParS == " + villesMajusculeSeTerminantParS)
