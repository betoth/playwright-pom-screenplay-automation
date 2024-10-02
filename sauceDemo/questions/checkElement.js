const { GetElementText } = require('../interactions/getElementText');

/**
 * Represents a question where the actor checks the content of a specific element.
 */
class CheckElement {
  /**
   * @param {string} selector - The CSS selector of the element to check.
   */
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Checks the content of the element using an interaction.
   *
   * @param {Actor} actor - The actor performing the check.
   * @returns {Promise<string>} - Returns the text content of the element.
   */
  async answeredBy(actor) {
    return actor.attemptsTo(GetElementText.from(this.selector));
  }

  /**
   * Static method to create an instance of CheckElement for a given selector.
   *
   * @param {string} selector - The CSS selector of the element.
   * @returns {CheckElement} A new instance of CheckElement.
   */
  static contentOf(selector) {
    return new CheckElement(selector);
  }
}

module.exports = { CheckElement };
