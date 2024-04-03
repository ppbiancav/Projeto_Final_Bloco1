import { Produto } from "./Produto";

export class Batom extends Produto{
    
    private _labial: string;

	constructor(id: number, nome: string, tipo: number, preco: number, labial: string) {
        super(id, nome, tipo, preco) 
		this._labial = labial;
	}


    /**
     * Getter labial
     * @return {string}
     */
	public get labial(): string {
		return this._labial;
	}

    /**
     * Setter labial
     * @param {string} value
     */
	public set labial(value: string) {
		this._labial = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Labial: ${this._labial}`);
    }
}