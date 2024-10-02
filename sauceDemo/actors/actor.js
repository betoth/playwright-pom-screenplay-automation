/**
 * Represents an actor in the Screenplay pattern who can perform tasks and answer questions.
 */
class Actor {
  /**
   * @param {Object} user - The user object containing credentials.
   * @param {Object} page - The Playwright page instance for browser interaction.
   */
  constructor(user, page) {
    this.name = user.username
    this.page = page
    this.credentials = {
      username: user.username,
      password: user.password,
    }
    this.abilities = {} // Holds the abilities the actor can use
  }

  /**
   * Assign abilities to the actor.
   * @param {...Object} abilities - One or more abilities the actor can use.
   * @returns {Actor} - The current actor instance.
   */
  whoCan(...abilities) {
    abilities.forEach((ability) => {
      this.abilities[ability.constructor.name] = ability
    })
    return this
  }

  /**
   * Perform a series of tasks.
   * @param {...Object} tasks - One or more tasks the actor will perform.
   * @returns {Promise} - Resolves when all tasks are completed.
   */
  attemptsTo(...tasks) {
    return tasks.reduce((promise, task) => {
      if (typeof task.performAs !== 'function') {
        throw new Error(`performAs is not a function for task: ${task.constructor.name || task}`)
      }
      return promise.then(() => task.performAs(this))
    }, Promise.resolve())
  }

  /**
   * Answer a question by using the actor's abilities.
   * @param {Object} question - The question object that the actor will answer.
   * @returns {Promise<*>} - The result of answering the question.
   */
  async answer(question) {
    return await question.answeredBy(this)
  }

  /**
   * Retrieve a specific ability the actor has.
   * @param {Function} abilityType - The constructor of the ability to retrieve.
   * @returns {Object} - The ability instance.
   */
  abilityTo(abilityType) {
    return this.abilities[abilityType.name]
  }
}

module.exports = { Actor }
