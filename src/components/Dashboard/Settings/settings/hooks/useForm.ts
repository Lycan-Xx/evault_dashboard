import { useState, useCallback } from 'react';

interface FormState {
  [key: string]: any;
}

interface ValidationRules {
  [key: string]: (value: any) => boolean;
}

interface UseFormProps {
  initialState: FormState;
  validationRules?: ValidationRules;
  onSubmit?: (values: FormState) => void;
}

export const useForm = ({ initialState, validationRules, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field: string, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    
    if (validationRules?.[field]) {
      const isValid = validationRules[field](value);
      setErrors((prev) => ({
        ...prev,
        [field]: isValid ? undefined : 'Invalid value',
      }));
    }
  }, [validationRules]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (validationRules) {
      const newErrors: FormState = {};
      Object.keys(validationRules).forEach((field) => {
        if (!validationRules[field](values[field])) {
          newErrors[field] = 'Invalid value';
        }
      });

      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit?.(values);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validationRules, onSubmit]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};