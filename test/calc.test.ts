import { expect } from "chai";
import 'mocha';
import { AccionReceptor } from "../src/AccionReceptor";
import { ParseadorNumeros } from "../src/ParseadorNumerosNumeros";
import {Calculadora} from "../src/Calculadora";
import {Contexto} from "../src/Contexto";
import OperacionSuma from "../src/ParseadorNumeros";
import ParseadorOperaciones from "../src/ParseadorNumerosParseadorOperaciones";



    describe('accionNum1', function(){
      it('Accion', function(){
        const r = new AccionReceptor();
        expect(r.ActionNumero("2")).equal("2");
      });
    });

    describe('accionNum2', function(){
      it('Accion', function(){
        const r = new AccionReceptor();
        r.ActionNumero("1");
        expect(r.ActionNumero("2")).equal("12");
      });
    });

    describe('accionNum3', function(){
      it('Accion', function(){
        const r = new AccionReceptor();
        r.ActionNumero("1");
        r.ActionNumero("2");
        expect(r.ActionNumero("3")).equal("123");
      });
    });

    describe('accionNum4', function(){
      it('Accion', function(){
        const r = new AccionReceptor();
        r.ActionNumero("1");
        for(let a=0; a < 22; a++){
          r.ActionNumero("0");
        }
        expect(r.stateNumero).equal("10000000000000000000000");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Cero traducido', function() {
      let r = new ParseadorNumeros();
      const c = new Contexto("unocero")
      r.parsear(c)
      expect(c.valor).equal(10);
    });
  });

  describe('ParseadorNumeros', function() {
    it('NumeroGrande', function() {
      let r = new ParseadorNumeros();
      const c = new Contexto("nuevenuevenuevenuevenuevenueve")
      r.parsear(c)
      expect(c.valor).equal(999999);
    });
  });

  describe('ParseadorNumeros', function() {
    it('NumeroGrandeeee', function() {
      let r = new ParseadorNumeros();
      const c = new Contexto("nuevenuevenuevenuevenuevenueve")
      r.parsear(c)
      expect(c.valor).equal(999999);
    });
  });

  describe('Operacion', function() {
    it('Suma', function() {
      let r = new ParseadorNumeros();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      r.parsear(numA)
      r.parsear(numB)
      
      expect(numA.valor+numB.valor).equal(1000000);
    });
  });

  describe('Operacion', function() {
    it('Producto', function() {
      let r = new ParseadorNumeros();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      r.parsear(numA)
      r.parsear(numB)
      
      expect(numA.valor*numB.valor).equal(999999);
    });
  });

  describe('Operacion', function() {
    it('Division', function() {
      let r = new ParseadorNumeros();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      r.parsear(numA)
      r.parsear(numB)
      
      expect(numA.valor/numB.valor).equal(999999);
    });
  });

  describe('Operacion', function() {
    it('Resta', function() {
      let r = new ParseadorNumeros();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      r.parsear(numA)
      r.parsear(numB)
      
      expect(numA.valor-numB.valor).equal(999998);
    });
  });

  describe('OperacionTraducida', function() {
    it('Suma', function() {
      let r = new ParseadorOperaciones();
      let op = new Contexto("suma")
      r.parsear(op)
      expect(op.valor).equal(new Calculadora().Sumar);
    });
  });

  describe('OperacionTraducida', function() {
    it('Suma', function() {
      let r = new ParseadorOperaciones();
      let op = new Contexto("suma")
      r.parsear(op)
      expect(op.valor).equal(new Calculadora().Sumar);
    });
  });

  describe('OperacionTraducida', function() {
    it('Sumar', function() {
      let r = new ParseadorOperaciones();
      let op = new Contexto("suma")
      r.parsear(op)
      expect(op.valor).equal(new Calculadora().Sumar);
    });
  });
  describe('OperacionTraducida', function() {
    it('Restar', function() {
      let r = new ParseadorOperaciones();
      let op = new Contexto("restar")
      r.parsear(op)
      expect(op.valor).equal(new Calculadora().Restar);
    });
  });
  describe('OperacionTraducida', function() {
    it('Dividir', function() {
      let r = new ParseadorOperaciones();
      let op = new Contexto("dividir")
      r.parsear(op)
      expect(op.valor).equal(new Calculadora().Dividir);
    });
  });
  describe('OperacionTraducida', function() {
    it('Multiplicar', function() {
      let r = new ParseadorOperaciones();
      let op = new Contexto("multiplicar")
      r.parsear(op)
      expect(op.valor).equal(new Calculadora().Multiplicar);
    });
  });

  describe('Calculo con contexto', function() {
    it('Suma', function() {
      let r = new ParseadorNumeros();
      let a = new ParseadorOperaciones();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      let op = new Contexto("suma")
      a.parsear(op)
      r.parsear(numA)
      r.parsear(numB)
      
      expect(op.valor(numA.valor,numB.valor)).equal(1000000);
    });
  });

  describe('Calculo con contexto', function() {
    it('Suma', function() {
      let r = new ParseadorNumeros();
      let a = new ParseadorOperaciones();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      let op = new Contexto("suma")
      a.parsear(op)
      r.parsear(numA)
      r.parsear(numB)
      
      expect(op.valor(numA.valor,numB.valor)).equal(1000000);
    });
  });

  describe('Calculo con contexto', function() {
    it('Suma', function() {
      let r = new ParseadorNumeros();
      let a = new ParseadorOperaciones();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      let op = new Contexto("suma")
      a.parsear(op)
      r.parsear(numA)
      r.parsear(numB)
      
      expect(op.valor(numA.valor,numB.valor)).equal(1000000);
    });
  });

  describe('Calculo con contexto', function() {
    it('Suma', function() {
      let r = new ParseadorNumeros();
      let a = new ParseadorOperaciones();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      let op = new Contexto("suma")
      a.parsear(op)
      r.parsear(numA)
      r.parsear(numB)
      
      expect(op.valor(numA.valor,numB.valor)).equal(1000000);
    });
  });
  










  describe('Calculo con', function() {
    it('Suma', function() {
      let traductores=[];
      let contextos=[];
      traductores.push(new ParseadorNumeros());
      traductores.push(new ParseadorOperaciones());
      contextos.push(new Contexto("nuevenuevenuevenuevenuevenueve"))
      contextos.push(new Contexto("uno"))
      contextos.push(new Contexto("suma"))
        for(let i=0; i = contextos.length;i++){
            for(let j=0; j=traductores.length; j++ ){
              traductores[j].parsear(contextos[i])
              if()
            }
        }
      
      expect(op.valor(numA.valor,numB.valor)).equal(1000000);
    });
  });

  describe('Calculo con', function() {
    it('Suma', function() {
      let r = new ParseadorNumeros();
      let a = new ParseadorOperaciones();
      const numA = new Contexto("nuevenuevenuevenuevenuevenueve")
      const numB = new Contexto("uno")
      let op = new Contexto("suma")
      a.parsear(op)
      r.parsear(numA)
      r.parsear(numB)
      
      expect(op.valor(numA.valor,numB.valor)).equal(1000000);
    });
  });

  /*describe('ParseadorNumeros', function() {
    it('Uno traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("uno")).equal("1");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Dos traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("dos")).equal("2");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Tres traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("tres")).equal("3");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Cuatro traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("cuatro")).equal("4");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Cinco traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("cinco")).equal("5");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Seis traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("seis")).equal("6");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Siete traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("siete")).equal("7");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Ocho traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("ocho")).equal("8");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Nueve traducido', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("nueve")).equal("9");
    });
  });

  describe('ParseadorNumeros', function() {
    it('Default', function() {
      const r = new ParseadorNumeros();
      expect(r.traducirNumero("diez")).equal("");
    });
  });*/




  
  