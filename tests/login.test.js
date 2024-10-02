const { test, expect } = require('@playwright/test');
const { Actor } = require('../sauceDemo/actors/actor');
const { LoginTask } = require('../sauceDemo/tasks/login/loginTask');
const { BrowseTheWeb } = require('../sauceDemo/abilities/browseTheWeb');
const { Users } = require('../sauceDemo/data/users');
const { NavigateTo } = require('../sauceDemo/interactions/navigateTo');
const { CheckElement } = require('../sauceDemo/questions/checkElement');
const { URLS } = require('../config/constants');
const { LoginPage } = require('../sauceDemo/pages/loginPage');

test.describe('Login Tests', () => {

    test('Standard user can log in successfully', async ({ page }) => {
        const actor = new Actor(Users.standardUser, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(NavigateTo.the(URLS.LOGIN_PAGE));
        await actor.attemptsTo(LoginTask.for(Users.standardUser));

        const currentUrl = await page.url();
        expect(currentUrl).toBe(URLS.INVENTORY_PAGE);
    });

    test('Locked out user sees an error message', async ({ page }) => {
        const actor = new Actor(Users.lockedOutUser, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(NavigateTo.the(URLS.LOGIN_PAGE));
        await actor.attemptsTo(LoginTask.for(Users.lockedOutUser));

        const loginPage = new LoginPage();
        const errorMessage = await new CheckElement(loginPage.errorMessageContainer).answeredBy(actor);
        expect(errorMessage).toBe(loginPage.LOCKED_OUT_ERROR_MESSAGE);
    });

    test('Problem user can log in but faces issues', async ({ page }) => {
        const actor = new Actor(Users.problemUser, page).whoCan(BrowseTheWeb.using(page));

        await actor.attemptsTo(NavigateTo.the(URLS.LOGIN_PAGE));
        await actor.attemptsTo(LoginTask.for(Users.problemUser));

        const currentUrl = await page.url();
        expect(currentUrl).toBe(URLS.INVENTORY_PAGE);
    });
});
