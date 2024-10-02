const { Click } = require('../../interactions/click')
const { WaitForElement } = require('../../interactions/waitForElement')
const { MenuPage } = require('../../pages/menuPage')

/**
 * Task to close the menu by clicking the close button and waiting for it to disappear.
 */
class CloseMenu {
  /**
   * Static method to create a new instance of CloseMenu.
   *
   * @returns {CloseMenu} A new instance of CloseMenu.
   */
  static perform() {
    return new CloseMenu()
  }

  /**
   * Performs the interaction of closing the menu by clicking the close button and waiting for it to disappear.
   *
   * @param {Actor} actor - The actor performing the task.
   * @returns {Promise<void>} - A promise that resolves when the menu is closed.
   */
  async performAs(actor) {
    const menuPage = new MenuPage()

    await actor.attemptsTo(Click.on(menuPage.closeMenuButton), WaitForElement.toDisappear(menuPage.closeMenuButton))
  }
}

module.exports = { CloseMenu }
