import { expect } from "chai";
import { Calculador } from "../src/Calc";
import 'mocha';
import { AccionReceptor } from "../src/AccionReceptor";

describe('calculate', function() {
    it('Sumar', function() {
      const c = new Calculador();
      let result = c.sumar(2, 5);
      expect(result).equal(7);
    });
  });

  describe('calculate', function() {
    it('Restar', function() {
      const c = new Calculador();
      let result = c.restar(7, 3);
      expect(result).equal(4);
    });
  });

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