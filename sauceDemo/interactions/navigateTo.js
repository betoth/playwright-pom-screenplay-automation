const { BrowseTheWeb } = require('../abilities/browseTheWeb')

/**
 * Represents an interaction where the actor navigates to a specified URL in the browser.
 */
class NavigateTo {
  /**
   * @param {string} url - The URL to navigate to.
   */
  constructor(url) {
    this.url = url
  }

  /**
   * Static method to initialize the interaction for navigating to a specific URL.
   * @param {string} url - The URL to navigate to.
   * @returns {NavigateTo} A new instance of the NavigateTo interaction.
   */
  static the(url) {
    return new NavigateTo(url)
  }

  /**
   * Executes the interaction of navigating to the specified URL.
   * @param {Actor} actor - The actor performing the navigation.
   * @returns {Promise<void>} - Resolves when navigation is completed.
   * @throws {Error} - Throws an error if the actor does not have the ability to browse the web or if the page is undefined.
   */
  async performAs(actor) {
    const browse = actor.abilityTo(BrowseTheWeb)
    if (!browse || !browse.page) {
      throw new Error('The actor does not have the ability to browse the web or the page is undefined.')
    }
    await browse.page.goto(this.url)
  }
}

module.exports = { NavigateTo }
