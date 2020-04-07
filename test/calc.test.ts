import { expect } from "chai";
import 'mocha';
import { AccionReceptor } from "../src/AccionReceptor";
import { Parseador } from "../src/Parseador";




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
      const r = new Parseador();
      expect(r.traducirNumero("cero")).equal("0");
    });
  });

  describe('Parseador', function() {
    it('Uno traducido', function() {
      const r = new Parseador();
      expect(r.traducirNumero("uno")).equal("1");
    });
  });

  