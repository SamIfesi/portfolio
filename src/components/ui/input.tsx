import { forwardRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type InputProps<T extends ElementType = "input"> = {
  label?: string;
  error?: string;
  helper?: string;
  icon?: ReactNode;
  right?: ReactNode;
  as?: T;
  className?: string;
  disabled?: boolean;
  fieldId?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "disabled">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label = "",
      error = "",
      helper = "",
      icon = null,
      right = null,
      as: Tag = "input",
      className = "",
      disabled = false,
      fieldId,
      ...props
    },
    ref
  ) {
    const hasError = Boolean(error);
    const id = fieldId || props.id;

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

          <Tag
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${id}-error`
                : helper
                  ? `${id}-helper`
                  : undefined
            }
            {...props}
            className={`w-full rounded-card border transition-colors duration-180
              focus:outline-none focus:ring-2 focus:ring-offset-0
              disabled:cursor-not-allowed disabled:opacity-50
              touch-manipulation
              ${icon ? "pl-10" : "pl-4"}
              ${right ? "pr-10" : "pr-4"}
              ${
                hasError
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-gray-300 focus:ring-blue-500/30"
              }
            `}
          />

          {right && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {right}
            </div>
          )}
        </div>

        {hasError ? (
          <p
            id={`${id}-error`}
            className="text-xs text-error leading-snug"
          >
            {error}
          </p>
        ) : helper ? (
          <p
            id={`${id}-helper`}
            className="text-xs text-muted leading-snug"
          >
            {helper}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
