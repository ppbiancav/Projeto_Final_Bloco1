import { Produto } from "./Produto";

export class Paleta extends Produto{
    
    private _brilho: string;

	constructor(id: number, nome: string, tipo: number, preco: number, brilho: string) {
        super(id, nome, tipo, preco)
		this._brilho = brilho;
	}


    /**
     * Getter brilho
     * @return {string}
     */
	public get brilho(): string {
		return this._brilho;
	}

    /**
     * Setter brilho
     * @param {string} value
     */
	public set brilho(value: string) {
		this._brilho = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Brilho: ${this._brilho}`);
    }
}