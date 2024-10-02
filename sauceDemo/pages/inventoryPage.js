const { URLS } = require('../../config/constants')

/**
 * Represents the inventory page in the application.
 */
class InventoryPage {
  constructor() {
    this.addToCartButton = 'button[id^="add-to-cart-"]'
    this.cartIcon = '.shopping_cart_link'
    this.inventoryItem = '.inventory_item'
    this.pageUrl = URLS.INVENTORY_PAGE
  }
}

module.exports = { InventoryPage }
