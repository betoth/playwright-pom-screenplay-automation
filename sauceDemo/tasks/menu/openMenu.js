const { Click } = require('../../interactions/click')
const { WaitForElement } = require('../../interactions/waitForElement')
const { MenuPage } = require('../../pages/menuPage')

/**
 * Handles the task of opening the menu by clicking on the menu button and waiting for it to open.
 */
class OpenMenu {
  static perform() {
    return new OpenMenu()
  }

  /**
   * Executes the task of opening the menu by clicking the burger menu button
   * and waiting for the cross button to become visible, indicating the menu is open.
   *
   * @param {Actor} actor - The actor performing the task.
   */
  async performAs(actor) {
    const menuPage = new MenuPage()
    await actor.attemptsTo(Click.on(menuPage.openMenuButton), WaitForElement.toAppear(menuPage.closeMenuButton))
  }
}

module.exports = { OpenMenu }
