
# Shopping Cart System

A simple JavaScript shopping cart implementation that allows users to add, remove, and manage products in a cart, including calculating total costs and item quantities.

---

## Features

- **Product Management**: Define products with id, name, and price.
- **Shopping Cart Operations**:
  - Add items to the cart.
  - Increment and decrement item quantities.
  - Remove items from the cart.
  - Calculate total cost and item count.
  - Display cart contents.

---

## Classes

### Product

Represents a product with the following properties:

- `id`: Unique identifier for the product.
- `item`: Item type.
- `name`: Name of the product.
- `price`: Price of the product.

### ShoppingCartItem

Represents an item in the shopping cart, including:

- `product`: The product instance.
- `quantity`: Quantity of the product in the cart.

Methods:

- `incrementQuantity(amount)`: Increments the quantity of the item.
- `decrementQuantity(amount)`: Decrements the quantity of the item.
- `calculateTotalPrice()`: Calculates the total price for the item.
- `displayItem()`: Displays item details.

### ShoppingCart

Manages a collection of `ShoppingCartItem` instances.

Methods:

- `addItem(product, quantity)`: Adds a single item to the cart.
- `addItems(itemsArray)`: Adds multiple items to the cart.
- `removeItem(productIdentifier)`: Removes an item from the cart.
- `calculateTotalCost()`: Calculates total cost of all items in the cart.
- `getTotalItems()`: Returns the total quantity of items in the cart.
- `displayCart()`: Displays all items in the cart.
- `incrementItemQuantity(productName, amount)`: Increments the quantity of a specific product.
- `decrementItemQuantity(productName, amount)`: Decrements the quantity of a specific product.

---

## Usage

1. **Create Product Instances**:

   ```javascript
   const product1 = new Product(1, "phone", "Iphone 16promax", 1200);
   ```

2. **Create a Shopping Cart**:

   ```javascript
   const cart = new ShoppingCart();
   ```

3. **Add Products to Cart**:

   ```javascript
   cart.addItem(product1, 2);
   ```

4. **Display Cart**:

   ```javascript
   console.log(cart.displayCart());
   ```

5. **Manage Quantities**:

   ```javascript
   cart.incrementItemQuantity("Iphone 16promax", 1);
   cart.decrementItemQuantity("Iphone 16promax", 1);
   ```

6. **Calculate Totals**:
   ```javascript
   console.log(`Total Cost: $${cart.calculateTotalCost().toFixed(2)}`);
   console.log(`Total Items: ${cart.getTotalItems()}`);
   ```