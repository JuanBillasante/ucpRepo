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

 describe('accionReceptor', function(){
      it('Accion', function(){
        const r = new AccionReceptor();
        let result = r.ActionNumero("2");
        expect(result).equal("2");
      });
    });