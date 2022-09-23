import {
  MessagesBagContract,
  ErrorReporterContract,
  ValidationException,
} from '@ioc:Adonis/Core/Validator'

interface Errors {
  [key: string]: any
}

export class FormErrorReporter implements ErrorReporterContract<{ errors: Errors }> {
  public hasErrors = false

  private errors: Errors = {}

  constructor(private messages: MessagesBagContract) {}

  /**
   * Invoked by the validation rules to
   * report the error
   */
  public report(
    pointer: string,
    rule: string,
    message: string,
    arrayExpressionPointer?: string,
    args?: any
  ) {
    this.hasErrors = true

    const parsedMessage = this.messages.get(pointer, rule, message, arrayExpressionPointer, args)

    this.setError(pointer, parsedMessage)
  }

  /**
   * Add error to errors attribute
   */
  public setError(pointer: string, message: string) {
    const keysArr = pointer.split('.')
    const keysLength = keysArr.length

    keysArr.reduce((previousValue, currentKey, currentIndex) => {
      if (currentIndex === keysLength - 1) {
        previousValue[currentKey] = previousValue[currentKey]
          ? `${previousValue[currentKey]}, ${message}`
          : message
      } else {
        if (previousValue[currentKey] === undefined) {
          const isArray = isNaN(parseInt(currentKey))

          previousValue[currentKey] = isArray ? {} : []
        }
      }

      return previousValue[currentKey]
    }, this.errors)
  }

  /**
   * Converts validation failures to an exception
   */
  public toError() {
    throw new ValidationException(false, this.toJSON())
  }

  /**
   * Get error messages as JSON
   */
  public toJSON() {
    return {
      message: 'hasValidationErrors',
      errors: this.errors,
    }
  }
}
