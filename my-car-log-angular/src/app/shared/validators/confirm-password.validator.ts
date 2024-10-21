import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const passwordMatch =
    control.value.password === control.value.passwordConfirmation;

  if (passwordMatch) {
    control.get('passwordConfirmation')?.setErrors(null);
    return null;
  } else {
    control.get('password')?.valid &&
      control.get('passwordConfirmation')?.setErrors({ noMatch: true });
    return { PasswordNoMatch: true };
  }
};
