import Contexto from "./Contexto";

export class Operaciones {

    public traducirOperacion(op : Contexto){
        let operacion;

        switch(op.expresion){
            case "suma":
                operacion = "+";
                break;
            case "resta":
                operacion = "-";
                break;
            case "multiplicar":
                operacion = "*";
                break;
            case "dividir":
                operacion = "/";
                break;
            default:
                operacion = null
                break;
                
        } return operacion;
       
    }

}export default Operaciones
