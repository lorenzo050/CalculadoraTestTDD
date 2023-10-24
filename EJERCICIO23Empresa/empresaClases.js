//con clases
class Empleado {
    constructor(nombre) {
      this.nombre = nombre || "";
      this.departamento = "Informático";
    }
  }
  
  class Director extends Empleado {
    constructor(nombre) {
      super(nombre);
      this.informes = [];
    }
  }
  
  class Trabajador extends Empleado {
    constructor(nombre) {
      super(nombre);
      this.Proyectos = [];
    }
  }
  
  class Ingeniero extends Trabajador {
    constructor(nombre) {
      super(nombre);
      this.LenguajeProgramacion = "";
      this.departamento = "Ingeniería";
    }
  }
  
  //INSTANCIAR
  var director1 = new Director("Pepito");
  var director2 = new Director("Manolo");
  var director3 = new Director("Hortencia");
  
  var array_directores = new Array();
  array_directores.push(director1);
  array_directores.push(director2);
  array_directores.push(director3);
  
  //informes
  director2.informes.push("Informe producción enero.");
  director2.informes.push("Informe producción febrero.");
  director2.informes.push("Informe producción marzo.");
  director3.informes.push("Informe despido becario.");
  
  //INGENIEROS
  var ingeniero1 = new Ingeniero("Juan");
  var ingeniero2 = new Ingeniero("Carmen");
  var ingeniero3 = new Ingeniero("Pablo");
  var ingeniero4 = new Ingeniero("Emilio");
  
  var array_ingenieros = new Array();
  array_ingenieros.push(ingeniero1);
  array_ingenieros.push(ingeniero2);
  array_ingenieros.push(ingeniero3);
  array_ingenieros.push(ingeniero4);
  //INGENIEROS leguanje
  
  ingeniero1.LenguajeProgramacion = "JAVA";
  ingeniero2.LenguajeProgramacion = "C++";
  ingeniero3.LenguajeProgramacion = "JS";
  ingeniero4.LenguajeProgramacion = "HTML5";
  
  
  
  
  /*
        document.write(
          "<p>---------*********NOMBRES DIRECTORES**********-----------</p>"
        );
  
        for (let index = 0; index < array_directores.length; index++) {
          var element = array_directores[index].nombre;
          document.write("Director &#8594;" + element + "<br>");
  
          if (array_directores[index].informes.length > 0) {
            document.write(
              "---------*********INFORMES de: " +
                array_directores[index].nombre +
                "<br>"
            );
            for (
              let index2 = 0;
              index2 < array_directores[index].informes.length;
              index2++
            ) {
              var element2 = array_directores[index].informes[index2];
              document.write("------------------********" + element2 + "<br>");
            }
          }
        }
  
        document.write("<p></p>");
  
        document.write(
          "---------*********INGENIEROS**********-----------" + "<br>"
        );
  
        for (let index = 0; index < array_ingenieros.length; index++) {
          var element = array_ingenieros[index];
          document.write(
            "----------------------********* El ingeniero " +
              element.nombre +
              " usa el lenguaje de programación " +
              element.LenguajeProgramacion +
              " en el departamento " +
              element.departamento +
              "<br>"
          );
        }
  
  */
  