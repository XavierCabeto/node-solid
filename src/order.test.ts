import Order from "./Order";
import Cigar from "./Cigar";
import Beer from "./Beer";
import Water from "./Water";

test("Should calculate order subtotal", function () {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10));
  order.addItem(new Beer("Itaipava", 5));
  order.addItem(new Water("Crystal 300ml", 2));
  const subtotal = order.getSubtotal();
  expect(subtotal).toBe(17);
});

test("Should calculate order taxes", function () {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10));
  order.addItem(new Beer("Itaipava", 5));
  order.addItem(new Water("Crystal 300ml", 2));
  const taxes = order.getTaxes(new Date("2022-04-04"));
  expect(taxes).toBe(2.5);
});

test("Should calculate order holiday taxes", function () {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10));
  order.addItem(new Beer("Itaipava", 5));
  order.addItem(new Water("Crystal 300ml", 2));
  const taxes = order.getTaxes(new Date("2022-01-04"));
  expect(taxes).toBe(1.5);
});

test("Should calculate order total", function () {
  const order = new Order();
  order.addItem(new Cigar("Marlboro", 10));
  order.addItem(new Beer("Itaipava", 5));
  order.addItem(new Water("Crystal 300ml", 2));
  const taxes = order.getTotal(new Date("2022-04-04"));
  expect(taxes).toBe(19.5);
}); 