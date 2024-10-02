const { CheckElement } = require('../questions/checkElement');
const { InventoryPage } = require('../pages/inventoryPage');

/**
 * Task to check the item count in the shopping cart.
 */
class CartItemCount {
    /**
     * Static method to create a new instance of CartItemCount.
     * 
     * @returns {CartItemCount} A new instance of CartItemCount.
     */
    static check() {
        return new CartItemCount();
    }

    /**
     * Performs the task of checking the item count in the cart.
     * 
     * @param {Actor} actor - The actor performing the task.
     * @returns {Promise<number>} The number of items in the cart.
     */
    async performAs(actor) {
        const itemCountText = await new CheckElement(new InventoryPage().cartIcon).answeredBy(actor);
        return Number(itemCountText);
    }
}

module.exports = { CartItemCount };
