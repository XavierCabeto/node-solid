import Item from "./Item";

export default abstract class TaxItem extends Item {
  constructor(category: string, destination: string, price: number) {
    super(category, destination, price);
  }

  calculateTaxes(date: Date): number {
    return this.price * this.getTax(date);
  }

  abstract getTax(date: Date): number;
}