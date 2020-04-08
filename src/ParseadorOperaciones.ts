import Contexto from "./Contexto";
import Calculadora from "./Calculadora";
import { Parseador } from "./Parseador";

export class ParseadorOperaciones extends Parseador{

    public parsear(op : Contexto){

        switch(op.expresion){
            case "suma":
                op.valor = new Calculadora().Sumar;
                break;
            case "restar":
                op.valor = new Calculadora().Restar;
                break;
            case "multiplicar":
                op.valor = new Calculadora().Multiplicar;
                break;
            case "dividir":
                op.valor = new Calculadora().Dividir;
                break;
            default:
                op.valor = null
                break;

        }
       
    }

}export default ParseadorOperaciones
