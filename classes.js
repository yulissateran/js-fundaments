/*Prototipos y classes */

class Persona {
  constructor(name,lastname, heigth) {
    this.name = name;
    this.lastname = lastname;
    this.heigth = heigth;
  }
  saludar = (responderSaludo) =>{ 
    const { name, lastname } = this;
    console.log(this, this.name, this.lastname, 'hola')
    if(responderSaludo){
      responderSaludo(name, lastname, false)
    }
  };

  soyalto = () => this.heigth > 1.80;
}

class Developer extends Persona {
  constructor(name,lastname, heigth) {
    super(name,lastname, heigth);
    this.name = name;
    this.lastname = lastname;
    this.heigth = heigth;
  }
  saludar = () =>  {

    console.log('hola soy developer', this.name, this.lastname);
    const { name, lastname } = this;

    if(responderSaludo){
      responderSaludo(name, lastname, true)
    }
  };
}

var sasha = new Persona('sasha', 'listick', 1.90);
var yuli = new Developer('yuli', 'terán', 1, 50);



function responderSaludo(name, lastname, esDev) {
  console.log(`Buen día ${name} ${lastname} `);
  if(esDev){
    console.log(`Eres developer`);
    
  }
}
sasha.saludar(responderSaludo)
yuli.saludar()



