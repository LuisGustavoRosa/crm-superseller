import { FormErrorReporter } from './FormErrorReporter'

export class BaseValidator {
  /**
   * Custom messages for validation
   */
  public messages = {
    'required': 'required',
    'maxLength': 'maxLength',
    'minLength': 'minLength',
    'string': 'notString',
    'number': 'notNumber',
    'unique': 'failUnique',
    'email': 'invalidEmail',
    'file.extname': 'InvalidExtFile',
    'file.size': 'InvalidSizeFile',
    'exists': 'moduleNotFound',
  }

  public reporter = FormErrorReporter
}
