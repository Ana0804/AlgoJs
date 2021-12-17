// exports.mytodolist = function (){
//     return "start todolist";
// }


var dico = new Map();


var t1 = "faire les devoirs";
var t2 = "aller au sport";
var t3 = "faire les courses";
var add = "ajouter un element";
var check1 = "OK";
var check2 = "NOT OK";

    dico.set("textarea", add) //trouver comment ajouter élément sans HTML
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


    // à connecter aux taches

// check.set("ok", t1);
// check.set("not ok", t2);
// check.set("ok", t3);

// exports.check() = function (){
//     return check.get();
// }
//     let result;
//         if (x == 'ok'){
//             result = "done"; //strikethrough text 
//         }
//         else { 
//             result = "to do";
//         }
//         return result;
//         }

//     // à connecter aux taches


for (var[key, value] of dico) {
    console.log(key + " : " + value);
}
