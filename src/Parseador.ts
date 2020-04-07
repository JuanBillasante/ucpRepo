import {Contexto} from "./Contexto";
export class Parseador{


    public traducirNumero(num : string){
        let valor="";
        switch(num){
                case "cero":
                    valor = "0";
                    break;
                case "uno":
                    valor = "1";
                    break;
                case "dos":
                    valor = "2";
                    break;
                case "tres":
                    valor = "3";
                    break;
                case "cuatro":
                    valor = "4";
                    break;
                case "cinco":
                    valor = "5";
                    break;
                case "seis":
                    valor = "6";
                    break;
                case "siete":
                    valor = "7";
                    break;
                case "ocho":
                    valor = "8";
                    break;
                case "nueve":
                    valor = "9";
                    break;
                default:
                    valor = "";
                    break;
                    
            } return valor;
        }

        public borrarEspacios(text : string){
            let aux = text;
            text = text.replace(" ", "");
            while(aux != text){
                aux = text;
                text = text.replace(" ", "");

            }return aux;
           
        }

       /* public borrar(numT: string, num : string){
            let valor;
            switch(num){
                case "0":
                    valor = numT.replace("cero", "");
                    break;
                case "1":
                    valor = numT.replace("uno", "");
                    break;                
                case "2":
                    valor = numT.replace("dos", "");
                    break;
                case "3":
                    valor = numT.replace("tres", "");
                    break;
                case "4":
                    valor = numT.replace("cuatro", "");
                    break;
                case "5":
                    valor = numT.replace("cinco", "");
                    break;
                case "6":
                    valor = numT.replace("seis", "");
                    break;
                case "7":
                    valor = numT.replace("siete", "");
                    break;
                case "8":
                    valor = numT.replace("ocho", "");
                    break;
                case "9":
                    valor = numT.replace("nueve", "");
                    break;
            }
            return valor;
    
        }*/
    }