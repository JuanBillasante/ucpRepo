import { expect } from "chai";
import { Calculador } from "../src/calc";

describe('calculate', function() {
    it('Sumador', function() {
      const c = new Calculador();
      let result = c.sumar(2, 5);
      expect(result).equal(7);
    });
  });

  describe('calculate', function() {
    it('Restador', function() {
      const c = new Calculador();
      let result = c.resta(7, 3);
      expect(result).equal(4);
    });
  });