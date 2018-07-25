export class Goods {
  private landlord: string;
  private date: any;
  private address: string;
  private price: number;

  constructor(landlord, price, address, date) {
    this.landlord = landlord;
    this.price = price;
    this.address = address;
    this.date = date;
  }
}
