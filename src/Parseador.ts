import { Contexto } from "../src/Contexto";

export class Parseador{

    public traducirNumero(c : Contexto){
        let valor;
        switch(c.expresion.substring(0,2)){
                case "ce":
                    valor ="0";
                    c.expresion = c.expresion.replace("cero","");
                    break;
                case "un":
                    valor="1";
                    c.expresion = c.expresion.replace("uno","");
                    break;
                case "do":
                    valor = "2";
                    c.expresion = c.expresion.replace("dos","");
                    break;
                case "tr":
                    valor = "3";
                    c.expresion = c.expresion.replace("tres","");
                    break;
                case "cu":
                    valor = "4";
                    c.expresion = c.expresion.replace("cuatro","");
                    break;
                case "ci":
                    valor = ("5");
                    c.expresion = c.expresion.replace("cinco","");
                    break;
                case "se":
                    valor = ("6");
                    c.expresion = c.expresion.replace("seis","");
                    break;
                case "si":
                    valor = ("7");
                    c.expresion = c.expresion.replace("siete","");
                    break;
                case "oc":
                    valor = ("8");
                    c.expresion = c.expresion.replace("ocho","");
                    break;
                case "nu":
                    valor = ("9");
                    c.expresion = c.expresion.replace("nueve","");
                    break;
                default:
                    
                    break;
                    
            } return valor;
        }


        public traducirExpresion(c : Contexto){
            let a = c;
            let traduccion="";
            while(a.expresion!=""){
                traduccion=traduccion.concat(this.traducirNumero(a))
            }c.valor = parseInt(traduccion);
        }
    }