const { CheckElement } = require('../questions/checkElement')
const { CartPage } = require('../pages/cartPage')

/**
 * Represents a question to check if a product is visible in the cart.
 */
class IsProductInCart {
  /**
   * @param {string} productName - The name of the product to check.
   */
  constructor(productName) {
    this.productName = productName
  }

  /**
   * Static method to create an instance of IsProductInCart for a specific product.
   *
   * @param {string} productName - The name of the product.
   * @returns {IsProductInCart} A new instance of IsProductInCart.
   */
  static forProduct(productName) {
    return new IsProductInCart(productName)
  }

  /**
   * Checks if the product is visible in the cart by searching for its name.
   *
   * @param {Actor} actor - The actor performing the check.
   * @returns {Promise<boolean>} - Resolves to true if the product is visible, otherwise false.
   */
  async answeredBy(actor) {
    const cartPage = new CartPage()
    const selector = cartPage.cartItemSelector(this.productName)
    return await actor.attemptsTo(CheckElement.visibilityOf(selector))
  }
}

module.exports = { IsProductInCart }
