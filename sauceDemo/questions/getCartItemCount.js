const { CheckElement } = require('../questions/checkElement')
const { InventoryPage } = require('../pages/inventoryPage')

/**
 * Represents an interaction to get the number of items in the cart.
 */
class GetCartItemCount {
  /**
   * Static method to create a new instance of GetCartItemCount.
   *
   * @returns {GetCartItemCount} A new instance of GetCartItemCount.
   */
  static perform() {
    return new GetCartItemCount()
  }

  /**
   * Retrieves the cart item count by checking the content of the cart badge.
   *
   * @param {Actor} actor - The actor performing the interaction.
   * @returns {Promise<number>} - The number of items in the cart.
   */
  async performAs(actor) {
    const inventoryPage = new InventoryPage()
    const count = await actor.attemptsTo(CheckElement.contentOf(inventoryPage.cartIcon))
    return Number(count)
  }
}

module.exports = { GetCartItemCount }
