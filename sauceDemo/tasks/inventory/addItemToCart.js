const { Click } = require('../../interactions/click')
const { InventoryPage } = require('../../pages/inventoryPage')

/**
 * Task to add a product to the cart.
 */
class AddItemToCart {
  /**
   * Static method to initialize the task for a specific product.
   * @param {string} productName - The name of the product to add to the cart.
   * @returns {AddItemToCart} A new instance of AddItemToCart.
   */
  static forProduct(productName) {
    return new AddItemToCart(productName)
  }

  constructor(productName) {
    this.productName = productName
  }

  /**
   * The task to be performed by the actor.
   * @param {Actor} actor - The actor who will perform the task.
   */
  async performAs(actor) {
    const inventoryPage = new InventoryPage()
    const productSelector = `${inventoryPage.inventoryItem}:has-text("${this.productName}") ${inventoryPage.addToCartButton}`
    await actor.attemptsTo(Click.on(productSelector))
  }
}

module.exports = { AddItemToCart }
