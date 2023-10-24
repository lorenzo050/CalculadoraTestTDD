var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should();
var testEmpresa = require("../test/empresa.js");
var clases = require("../empresaClases.js");

describe("Comprobando tipos y partes de las clases: ", function () {
  describe("Check addTested Function: ", function () {

    it("Check the returned value using: assert.equal(typeof(result),\"string\"): ", function () {
      empleadoNew = new Empleado("Juan");
      result = empleadoNew.nombre;
      assert.equal(typeof(result),"string");
    });

    it("Check the returned value using: assert.equal(typeof(result),\"number\"): ", function () {
      empleadoNew = new Empleado("Juan");
      result = empleadoNew.nombre;
      assert.equal(typeof(result),"number");
    });

    it("Check the returned value using: expect(result).to.be.a('string');): ", function () {
      empleadoNew = new Empleado("Juan");
      result = empleadoNew.nombre;
      expect(result).to.be.a('string');
    });

    it("Check the returned value using:  result.should.equal('Juan');", function () {
      empleadoNew = new Empleado("Juan");
      result = empleadoNew.nombre;
      result.should.equal("Juan");
    });

    //POR cada clase hacer UNA PRUEBA
    it("Check the returned value using:  result.should.equal('Juan2')", function () {
      TrabajadorNew = new Trabajador("Juan2");
      result = TrabajadorNew.nombre;
      result.should.equal("Juan2");
    });

    it("Ingeniero Check the returned value using:  result.should.equal('Juan Ingeniero');", function () {
      IngenieroNew = new Trabajador("Juan Ingeniero");
      result = IngenieroNew.nombre;
      result.should.equal("Juan Ingeniero");
    });

  });
});



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
