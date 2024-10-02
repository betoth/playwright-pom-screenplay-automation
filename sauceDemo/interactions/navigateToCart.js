const { BrowseTheWeb } = require('../abilities/browseTheWeb')
const { InventoryPage } = require('../pages/inventoryPage')

/**
 * Represents an interaction where the actor navigates to the cart from the inventory page.
 */
class NavigateToCart {
  /**
   * Executes the interaction of clicking the cart icon on the inventory page.
   * @param {Actor} actor - The actor performing the interaction.
   * @returns {Promise<void>} - Resolves when the cart icon is clicked.
   */
  async performAs(actor) {
    const page = actor.abilityTo(BrowseTheWeb).getCurrentPage() // Get the current page from the BrowseTheWeb ability
    const inventoryPage = new InventoryPage()
    await page.click(inventoryPage.cartIcon)
  }

  /**
   * Static method to initialize the interaction for navigating to the cart from the inventory page.
   * @returns {NavigateToCart} A new instance of the NavigateToCart interaction.
   */
  static onInventoryPage() {
    return new NavigateToCart()
  }
}

module.exports = { NavigateToCart }
