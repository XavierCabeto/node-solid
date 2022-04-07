import Item from "./Item";

export default class Water extends Item {
  constructor(destination: string, price: number) {
    super("Water", destination, price);
  }
}