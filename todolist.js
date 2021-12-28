

var dico = new Map();


var t1 = "faire les devoirs";
var t2 = "aller au sport";
var t3 = "faire les courses";
var add = "ajouter un element";
var check1 = "OK";
var check2 = "NOT OK";

    dico.set("textarea", add) 
    dico.set("tache1", t1 + " " + check1);
    dico.set("tache2", t2 + " " + check2);
    dico.set("tache3", t3 + " " + check1);
    dico.size;

exports.addElement = function (){
    return dico.get("textarea");
}

exports.showElement = function(){
    return dico.get("tache2");
}

for (var[key, value] of dico) {
    console.log(key + " : " + value);
}
