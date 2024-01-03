export class Products {
  constructor(
    public id:number,
    public name: string,
    public imgURL: string,
    public category: string,
    public description: string,
    public long_desc: string,
    public price: number,
    public quantity: number,
  ){
  }
}