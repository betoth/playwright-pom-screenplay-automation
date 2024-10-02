const { test, expect } = require('@playwright/test');
const { Actor } = require('../sauceDemo/actors/actor');
const { AddItemToCart } = require('../sauceDemo/tasks/inventory/addItemToCart');
const { BrowseTheWeb } = require('../sauceDemo/abilities/browseTheWeb');
const { Users } = require('../sauceDemo/data/users');
const { LoginTask } = require('../sauceDemo/tasks/login/loginTask');
const { NavigateToCart } = require('../sauceDemo/interactions/navigateToCart');
const { CartItemCount } = require('../sauceDemo/questions/cartItemCount');
const products = require('../sauceDemo/data/products');

test.describe('Inventory Tests', () => {
    test('Standard user can add items to cart', async ({ page }) => {
        const actor = new Actor(Users.standardUser, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(
            LoginTask.for(Users.standardUser),
            AddItemToCart.forProduct(products.sauceLabsBackpack)
        );

        await actor.attemptsTo(NavigateToCart.onInventoryPage());
        const itemCount = await CartItemCount.check().performAs(actor);
        expect(itemCount).toBe(1);
    });
});
