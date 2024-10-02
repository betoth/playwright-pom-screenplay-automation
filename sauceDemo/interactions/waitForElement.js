const { BrowseTheWeb } = require('../../abilities/browseTheWeb')

/**
 * Represents an interaction where the actor waits for an element to either appear or disappear on the page.
 */
class WaitForElement {
  /**
   * @param {string} selector - The CSS selector of the element to wait for.
   * @param {Object} options - Options for waiting, such as the state of visibility.
   */
  constructor(selector, options = { state: 'hidden' }) {
    this.selector = selector
    this.options = options
  }

  /**
   * Static method to initialize the interaction for waiting until an element disappears.
   * @param {string} selector - The CSS selector of the element to wait for.
   * @returns {WaitForElement} A new instance of WaitForElement with the state set to 'hidden'.
   */
  static toDisappear(selector) {
    return new WaitForElement(selector, { state: 'hidden' })
  }

  /**
   * Static method to initialize the interaction for waiting until an element appears.
   * @param {string} selector - The CSS selector of the element to wait for.
   * @returns {WaitForElement} A new instance of WaitForElement with the state set to 'visible'.
   */
  static toAppear(selector) {
    return new WaitForElement(selector, { state: 'visible' })
  }

  /**
   * Executes the interaction of waiting for the element based on the specified state.
   * @param {Actor} actor - The actor performing the interaction.
   * @returns {Promise<void>} - Resolves when the element reaches the specified state.
   */
  async performAs(actor) {
    const browse = actor.abilityTo(BrowseTheWeb)
    await browse.page.waitForSelector(this.selector, this.options)
  }
}

module.exports = { WaitForElement }
