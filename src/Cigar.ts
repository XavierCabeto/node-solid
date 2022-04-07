import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
  constructor(destination: string, price: number) {
    super("Cigar", destination, price);
  }

  getTax(date: Date): number {
    const jan = 0;
    if (date.getMonth() === jan) return 0.1
    return 0.2;
  }
}