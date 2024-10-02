const { OpenMenu } = require('./openMenu')
const { CloseMenu } = require('./closeMenu')
const { MenuPage } = require('../../pages/menuPage')
const { Click } = require('../../interactions/click')

/**
 * Handles the task of resetting the app status by opening the menu, clicking the reset button, and closing the menu.
 */
class ResetAppStatus {
  static perform() {
    return new ResetAppStatus()
  }

  /**
   * Executes the task of resetting the app status by interacting with the menu.
   *
   * @param {Actor} actor - The actor performing the task.
   */
  async performAs(actor) {
    const menuPage = new MenuPage()
    await actor.attemptsTo(OpenMenu.perform(), Click.on(menuPage.resetAppButton), CloseMenu.perform())
  }
}

module.exports = { ResetAppStatus }
