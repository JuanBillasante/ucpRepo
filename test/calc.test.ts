import { expect } from "chai";
import 'mocha';
import { AccionReceptor } from "../src/AccionReceptor";
import { Parseador } from "../src/Parseador";
import {Calculadora} from "../src/Calculadora";
import {Contexto} from "../src/Contexto";
import OperacionSuma from "../src/Suma";



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

  describe('Parseador', function() {
    it('Cero traducido', function() {
      let r = new Parseador();
      const c = new Contexto("unocero")
      r.traducirExpresion(c)
      expect(c.valor).equal(10);
    });
  });

  describe('Parseador', function() {
    it('NumeroGrande', function() {
      let r = new Parseador();
      const c = new Contexto("nuevenuevenuevenuevenuevenueve")
      r.traducirExpresion(c)
      expect(c.valor).equal(999999);
    });
  });

  describe('Parseador', function() {
    it('NumeroGrandeeee', function() {
      let r = new Parseador();
      const c = new Contexto("nuevenuevenuevenuevenuevenueve")
      r.traducirExpresion(c)
      expect(c.valor).equal(999999);
    });
  });

  /*describe('Parseador', function() {
    it('Uno traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("uno")).equal("1");
    });
  });

  describe('Parseador', function() {
    it('Dos traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("dos")).equal("2");
    });
  });

  describe('Parseador', function() {
    it('Tres traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("tres")).equal("3");
    });
  });

  describe('Parseador', function() {
    it('Cuatro traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("cuatro")).equal("4");
    });
  });

  describe('Parseador', function() {
    it('Cinco traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("cinco")).equal("5");
    });
  });

  describe('Parseador', function() {
    it('Seis traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("seis")).equal("6");
    });
  });

  describe('Parseador', function() {
    it('Siete traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("siete")).equal("7");
    });
  });

  describe('Parseador', function() {
    it('Ocho traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("ocho")).equal("8");
    });
  });

  describe('Parseador', function() {
    it('Nueve traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("nueve")).equal("9");
    });
  });

  describe('Parseador', function() {
    it('Default', function() {
      const r = new Parseador();
      expect(r.traducirNumero("diez")).equal("");
    });
  });*/




  
  