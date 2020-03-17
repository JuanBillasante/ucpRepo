import { expect } from "chai";

describe ('Calculador',function(){
    it ('Debe sumar 5',function(){
     let result = Calculadora.sumar(2,3);
     expect(result).equal(5);
    });
});