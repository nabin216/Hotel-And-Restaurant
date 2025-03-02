import { useState } from 'react';

// Define the validation rule types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
  errorMessage?: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface FormErrors {
  [key: string]: string;
}

export interface UseFormValidationReturn {
  errors: FormErrors;
  validateField: (name: string, value: any) => boolean;
  validateForm: (formData: Record<string, any>) => boolean;
  clearErrors: () => void;
  clearError: (name: string) => void;
}

const useFormValidation = (rules: ValidationRules): UseFormValidationReturn => {
  const [errors, setErrors] = useState<FormErrors>({});

  // Validate a single field
  const validateField = (name: string, value: any): boolean => {
    if (!rules[name]) return true;

    const rule = rules[name];
    let isValid = true;
    let errorMessage = '';

    // Check required
    if (rule.required && (!value || value.trim() === '')) {
      isValid = false;
      errorMessage = rule.errorMessage || 'This field is required';
    }

    // Check min length
    else if (rule.minLength && value.length < rule.minLength) {
      isValid = false;
      errorMessage = rule.errorMessage || `Minimum length is ${rule.minLength} characters`;
    }

    // Check max length
    else if (rule.maxLength && value.length > rule.maxLength) {
      isValid = false;
      errorMessage = rule.errorMessage || `Maximum length is ${rule.maxLength} characters`;
    }

    // Check pattern
    else if (rule.pattern && !rule.pattern.test(value)) {
      isValid = false;
      errorMessage = rule.errorMessage || 'Invalid format';
    }

    // Check custom validation
    else if (rule.custom && !rule.custom(value)) {
      isValid = false;
      errorMessage = rule.errorMessage || 'Invalid value';
    }

    // Update errors state
    setErrors(prev => {
      if (isValid) {
        const { [name]: _, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [name]: errorMessage };
      }
    });

    return isValid;
  };

  // Validate the entire form
  const validateForm = (formData: Record<string, any>): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate each field with a rule
    Object.keys(rules).forEach(fieldName => {
      const value = formData[fieldName];
      if (!validateField(fieldName, value)) {
        isValid = false;
        newErrors[fieldName] = errors[fieldName] || 'Invalid field';
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Clear all errors
  const clearErrors = () => {
    setErrors({});
  };

  // Clear a specific error
  const clearError = (name: string) => {
    setErrors(prev => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  return {
    errors,
    validateField,
    validateForm,
    clearErrors,
    clearError
  };
};

export default useFormValidation; 