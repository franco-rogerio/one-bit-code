class Product {
  constructor(name, description, price) {
    (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.inStock = 0);
  }
  addToStock(quantidade) {
    this.inStock += quantidade;
  }
  calculateDiscount(discount) {
    this.price = this.price - (this.price * discount) / 100;
  }
}

const notebook = new Product("Notebook", "Dell", 180, 0);

notebook.calculateDiscount(10);

console.log(notebook);
