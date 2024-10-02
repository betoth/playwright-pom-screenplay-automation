const { Fill } = require('../../interactions/fill')
const { LoginPage } = require('../../pages/loginPage')

/**
 * Task to enter login credentials.
 */
class EnterCredentials {
  /**
   * Static method to initialize the task with username and password.
   * @param {string} username - The username to enter.
   * @param {string} password - The password to enter.
   * @returns {EnterCredentials} A new instance of EnterCredentials.
   */
  static with(username, password) {
    return new EnterCredentials(username, password)
  }

  constructor(username, password) {
    this.username = username
    this.password = password
  }

  /**
   * The task to be performed by the actor.
   * @param {Actor} actor - The actor who will perform the task.
   */
  async performAs(actor) {
    const loginPage = new LoginPage()

    await actor.attemptsTo(
      Fill.field(loginPage.usernameInput).with(this.username),
      Fill.field(loginPage.passwordInput).with(this.password)
    )
  }
}

module.exports = { EnterCredentials }
