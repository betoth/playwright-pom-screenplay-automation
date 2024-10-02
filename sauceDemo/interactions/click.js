const { BrowseTheWeb } = require('../../sauceDemo/abilities/browseTheWeb')

/**
 * Represents an interaction where the actor clicks on an element in the browser.
 */
class Click {
  /**
   * @param {string} selector - The CSS selector of the element to be clicked.
   */
  constructor(selector) {
    this.selector = selector
  }

  /**
   * Static method to initialize the interaction for clicking a specific element.
   * @param {string} selector - The CSS selector of the element to be clicked.
   * @returns {Click} A new instance of the Click interaction.
   */
  static on(selector) {
    return new Click(selector)
  }

  /**
   * Executes the click interaction.
   * @param {Actor} actor - The actor who will perform the click.
   * @returns {Promise<void>} - Resolves when the click action is completed.
   */
  async performAs(actor) {
    const page = actor.abilityTo(BrowseTheWeb).getCurrentPage()
    await page.click(this.selector)
  }
}

module.exports = { Click }
