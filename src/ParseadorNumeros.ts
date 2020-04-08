import { Contexto } from "./Contexto";
import { Parseador } from "./Parseador";

export class ParseadorNumeros extends Parseador{

    public traducirNumero(c : Contexto){
        let valor="";
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
                    c.expresion="";
                    break;
                    
            } return valor;
        }


        public parsear(c : Contexto){
            let expresion = c.expresion;
            let a = c;
            let traduccion="";

            while(a.expresion!=""){
                traduccion=traduccion.concat(this.traducirNumero(a))
            
            }
            if(traduccion==""){
                c.valor=null;
                c.expresion=expresion;
                
            }else {
                c.valor = parseInt(traduccion);
            }
        }
    }