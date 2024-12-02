// Product class definition with id, name and price
class Product {
    constructor(id, item, name, price) {
      this.id = id;
      this.item = item;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class definition with product, quantity and calculateTotalPrice method
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    incrementQuantity(amount = 1) {
      this.quantity += amount;
      console.log(`Quantity of ${this.product.name} increased to ${this.quantity}`);
    }
  
    decrementQuantity(amount = 1) {
      if (this.quantity - amount < 0) {
        console.log(`Quantity of ${this.product.name} cannot be less than 0`);
        return;
      }
      this.quantity -= amount;
      console.log(`Quantity of ${this.product.name} decreased to ${this.quantity}`);
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  
    displayItem() {
      return `Item: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.calculateTotalPrice().toFixed(2)}`;
    }
  }
  
  // ShoppingCart class definition with items
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  
    addItems(itemsArray) {
      itemsArray.forEach(item => this.items.push(item));
    }
  
    removeItem(productIdentifier) {
      const index = this.items.findIndex(item =>
        item.product.id === productIdentifier || item.product.name === productIdentifier
      );
  
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`Item removed from the cart.`);
      } else {
        console.log(`Item not found in the cart.`);
      }
    }
  
    calculateTotalCost() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
  
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    displayCart() {
      return this.items.map(item => item.displayItem()).join("\n");
    }
  
    incrementItemQuantity(productName, amount = 1) {
      const item = this.items.find(item => item.product.name === productName);
      if (item) {
        item.incrementQuantity(amount);
      } else {
        console.log(`Item ${productName} not found in the cart`);
      }
    }
  
    decrementItemQuantity(productName, amount = 1) {
      const item = this.items.find(item => item.product.name === productName);
      if (item) {
        item.decrementQuantity(amount);
      } else {
        console.log(`Item ${productName} not found in the cart`);
      }
    }
  }
  
  // Creating instances of Product and ShoppingCart classes
  const product1 = new Product(1, "phone", "Iphone 16promax", 1200);
  const product2 = new Product(2, "laptop", "Dell XPS 15", 1359);
  const product3 = new Product(3, "watch", "Cartier", 7750);
  
  const cart = new ShoppingCart();
  cart.addItems([
    new ShoppingCartItem(product1, 2),
    new ShoppingCartItem(product2, 3),
    new ShoppingCartItem(product3, 4)
  ]);
  
  console.log(cart.displayCart());
  console.log();
  
  cart.incrementItemQuantity("Iphone 16promax", 3);
  console.log(cart.displayCart());
  console.log();
  
  cart.decrementItemQuantity("Iphone 16promax", 1);
  console.log(cart.displayCart());
  console.log();
  
  console.log(`Total Cost: $${cart.calculateTotalCost().toFixed(2)}`);
  console.log(`Total Items: ${cart.getTotalItems()}`);
  console.log();
  
  cart.removeItem("Cartier");
  console.log(cart.displayCart());
  console.log(`Total Cost: $${cart.calculateTotalCost().toFixed(2)}`);
  console.log(`Total Items: ${cart.getTotalItems()}`);
  