import { Stock } from "./stock.model";

export class NoveltyOutput {
        
    constructor(
        private _id: number,
        private _name: string,
        private _category: string,
        private _brand: string,
        private _description: string,
        private _imageurl: string,
        private _price: number,
        private _stocklist: Stock[]
    ){}

    public get stocklist(): Stock[] {
        return this._stocklist;
    }
    public set stocklist(value: Stock[]) {
        this._stocklist = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get imageurl(): string {
        return this._imageurl;
    }
    public set imageurl(value: string) {
        this._imageurl = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }    

}