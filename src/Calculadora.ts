
export class Calculadora {
        public resultado=0;
        public operacion=null;
        public operando=0;

    
    public Sumar(numA , numB){
            return numA + numB;
        }

    public Restar(numA, numB){
            return numA - numB;
        }

    public Dividir(numA, numB){
            return numA / numB;
        }

    public Multiplicar(numA, numB ){
            return numA * numB;
        }    
    } export default Calculadora