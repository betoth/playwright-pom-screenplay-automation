const { OpenMenu } = require('./openMenu')
const { Click } = require('../../interactions/click')
const { WaitForElement } = require('../../interactions/waitForElement')
const { MenuPage } = require('../../pages/menuPage')

/**
 * Handles the logout process, including opening the menu and clicking the logout link.
 */
class Logout {
  static perform() {
    return new Logout()
  }

  /**
   * Executes the logout task by opening the menu, clicking the logout link,
   * and waiting for the page to redirect to the login URL.
   *
   * @param {Actor} actor - The actor performing the task.
   */
  async performAs(actor) {
    const menuPage = new MenuPage()

    await actor.attemptsTo(
      OpenMenu.perform(),
      Click.on(menuPage.logoutButton),
      WaitForElement.toDisappear(menuPage.logoutButton)
    )
  }
}

module.exports = { Logout }
