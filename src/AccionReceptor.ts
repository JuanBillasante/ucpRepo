export class AccionReceptor {
    public stateNumero: string = "";
    constructor() {
    }
    ActionNumero(numero: string) {
        this.stateNumero= this.stateNumero.concat(numero);
        return this.stateNumero;
    }
}