const { Fill } = require('../../interactions/fill');
const { Click } = require('../../interactions/click');
const { NavigateTo } = require('../../interactions/navigateTo');
const { LoginPage } = require('../../pages/loginPage');

/**
 * Task to perform the login action using the provided user credentials.
 */
class LoginTask {
    /**
     * @param {Object} user - The user object containing username and password.
     */
    constructor(user) {
        this.user = user;
    }

    /**
     * Static method to create an instance of the LoginTask for a specific user.
     * @param {Object} user - The user object containing username and password.
     * @returns {LoginTask} A new instance of LoginTask for the given user.
     */
    static for(user) {
        return new LoginTask(user);
    }

    /**
     * Executes the login task by navigating to the login page, filling in the username, password, and clicking the login button.
     * @param {Actor} actor - The actor performing the login task.
     * @returns {Promise<void>} - A promise that resolves when the login task is completed.
     */
    async performAs(actor) {
        const loginPage = new LoginPage();

        // Navigate to the login page
        await actor.attemptsTo(NavigateTo.the(loginPage.pageUrl));

        // Fill in the username and password and click the login button
        await actor.attemptsTo(
            Fill.field(loginPage.usernameInput).with(this.user.username),
            Fill.field(loginPage.passwordInput).with(this.user.password),
            Click.on(loginPage.loginButton)
        );
    }
}

module.exports = { LoginTask };
