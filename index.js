console.log("Choisis un des exercices suivants pour commencer :\n    - Couleurs");

let exerciceALancer = process.stdin;
exerciceALancer.setEncoding("utf-8");
exerciceALancer.on("data", function (data) {
if (data === "couleurs\n"){
    console.log("coucou !");
    require("./couleurs");
    return;
}
});