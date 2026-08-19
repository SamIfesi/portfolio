import {
  forwardRef,
  type ReactNode,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';

type SharedProps = {
  label?: string;
  error?: string;
  helper?: string;
  icon?: ReactNode;
  right?: ReactNode;
  className?: string;
  fieldId?: string;
};

type InputAsInput = SharedProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
    as?: 'input';
  };

type InputAsTextarea = SharedProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & {
    as: 'textarea';
  };

type InputProps = InputAsInput | InputAsTextarea;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  function Input(
    {
      label = '',
      error = '',
      helper = '',
      icon = null,
      right = null,
      as = 'input',
      className = '',
      fieldId,
      ...props
    },
    ref
  ) {
    const hasError = Boolean(error);
    const id = fieldId || props.id;
    const Tag = as;

    const fieldClassName = `w-full rounded-xl border transition-colors duration-180
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:cursor-not-allowed disabled:opacity-50
      touch-manipulation
      ${icon ? 'pl-10' : 'pl-4'}
      ${right ? 'pr-10' : 'pr-4'}
      ${Tag === 'textarea' ? 'min-h-30 resize-y py-3 leading-relaxed' : 'h-12'}
      ${
        hasError
          ? 'border-red-500 focus:ring-red-500/30'
          : 'border-border focus:ring-border/30'
      }`;

    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label htmlFor={id} className="text-sm font-medium">
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )}

          {Tag === 'textarea' ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={id}
              aria-invalid={hasError}
              aria-describedby={
                hasError ? `${id}-error` : helper ? `${id}-helper` : undefined
              }
              className={fieldClassName}
              {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={id}
              aria-invalid={hasError}
              aria-describedby={
                hasError ? `${id}-error` : helper ? `${id}-helper` : undefined
              }
              className={fieldClassName}
              {...(props as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}

          {right && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {right}
            </div>
          )}
        </div>

        {hasError ? (
          <p id={`${id}-error`} className="text-xs text-red-500 leading-snug">
            {error}
          </p>
        ) : helper ? (
          <p
            id={`${id}-helper`}
            className="text-xs text-neutral-500 leading-snug"
          >
            {helper}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
