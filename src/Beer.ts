import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
  constructor(destination: string, price: number) {
    super("Beer", destination, price);
  }

  getTax(date: Date): number {
    return 0.1;
  }
}