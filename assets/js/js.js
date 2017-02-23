

  var arr= [{ Nombre : "Arabela", Apellido : "Rojas", Rol : "T.A", Cumpleanios : "23 de enero" },
                { Nombre : "Michelle", Apellido : "Seguil", Rol : "T.A", Cumpleanios : "25 de noviembre" },
                { Nombre : "Meche", Apellido : "Zubieta", Rol : "T.A", Cumpleanios : "02 de marzo" },
                { Nombre : "Papu", Apellido : "Rivariola", Rol : "Psicóloga", Cumpleanios : "10 de octubre" },
                { Nombre : "Gian", Apellido : "Corzo", Rol : "Profesor", Cumpleanios : "23 de enero" } ];

var mostrar=document.getElementById("show");
var all = "";
arr.forEach(function(e){
  all+= "<div><ul><li>Nombre: "    + e.Nombre      + "</li>"  +
                "<li>Apellido: "   + e.Apellido    + "</li>"  +
                "<li>Rol: "        + e.Rol         + "</li>"  +
                "<li>Cumpleaños: " + e.Cumpleanios + "</li></ul></div>";
    })
mostrar.innerHTML=all;
