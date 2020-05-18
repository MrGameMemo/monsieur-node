console.log("Vous venez de lancer l'exercice : \"Couleurs\" !\n\n");

let couleurs = [
    "bleu",
    "vert",
    "jaune",
    "rouge"
];

for (let i=0; i<4; i++) {
    console.log(`L'index ${i} donne la couleur ${couleurs[i]}\n`);
    switch(couleurs[i]) {
        case "bleu":
            console.log("La couleur est : bleu");
        default:
            console.log("Pas de couleur ;)");
    }
} 