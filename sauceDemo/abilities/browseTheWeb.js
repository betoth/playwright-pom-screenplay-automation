/**
 * Ability that allows the actor to interact with a web page using Playwright.
 */
class BrowseTheWeb {
  /**
   * Initializes the ability with the given Playwright page instance.
   * @param {Page} page - The Playwright page that the actor will interact with.
   */
  constructor(page) {
    this.page = page
  }

  /**
   * Static method to instantiate the ability using a Playwright page.
   * @param {Page} page - The Playwright page that the actor will interact with.
   * @returns {BrowseTheWeb} - A new instance of BrowseTheWeb.
   */
  static using(page) {
    return new BrowseTheWeb(page)
  }

  /**
   * Returns the current Playwright page being used by the actor.
   * @returns {Page} - The current Playwright page.
   */
  getCurrentPage() {
    return this.page
  }
}

module.exports = { BrowseTheWeb }
