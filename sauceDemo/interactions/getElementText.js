const { BrowseTheWeb } = require('../abilities/browseTheWeb')

/**
 * Represents an interaction where the actor retrieves the text content of an element.
 */
class GetElementText {
  /**
   * @param {string} selector - The CSS selector of the element to retrieve text from.
   */
  constructor(selector) {
    this.selector = selector
  }

  /**
   * Static method to initialize the interaction for retrieving text from a specific element.
   * @param {string} selector - The CSS selector of the element.
   * @returns {GetElementText} A new instance of the GetElementText interaction.
   */
  static from(selector) {
    return new GetElementText(selector)
  }

  /**
   * Executes the interaction of retrieving the text content of an element.
   * @param {Actor} actor - The actor performing the interaction.
   * @returns {Promise<string>} - The text content of the element.
   */
  async performAs(actor) {
    const page = actor.abilityTo(BrowseTheWeb).getCurrentPage()
    return page.textContent(this.selector)
  }
}

module.exports = { GetElementText }
