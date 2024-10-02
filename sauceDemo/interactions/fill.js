const { BrowseTheWeb } = require('../../sauceDemo/abilities/browseTheWeb')

/**
 * Represents an interaction where the actor fills a form field with a specific value.
 */
class Fill {
  /**
   * @param {string} selector - The CSS selector of the form field to fill.
   */
  constructor(selector) {
    this.selector = selector
  }

  /**
   * Static method to initialize the interaction for filling a specific field.
   * @param {string} selector - The CSS selector of the form field to fill.
   * @returns {Fill} A new instance of the Fill interaction.
   */
  static field(selector) {
    return new Fill(selector)
  }

  /**
   * Specifies the value to fill in the form field.
   * @param {string} value - The value to be entered in the field.
   * @returns {Fill} - The current instance of the Fill interaction, allowing method chaining.
   */
  with(value) {
    this.value = value
    return this
  }

  /**
   * Executes the fill interaction.
   * @param {Actor} actor - The actor who will perform the fill action.
   * @returns {Promise<void>} - Resolves when the field is filled with the specified value.
   */
  async performAs(actor) {
    const page = actor.abilityTo(BrowseTheWeb).getCurrentPage()
    await page.fill(this.selector, this.value)
  }
}

module.exports = { Fill }
