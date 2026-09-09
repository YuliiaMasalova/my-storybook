import { forwardRef, useId, useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';
import { EyeIcon } from './icons/EyeIcon';
import { EyeOffIcon } from './icons/EyeOffIcon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Field label, shown above the input box. */
  label?: string;
  /** Helper text below the input box; recolored red when `error` is set. */
  helperText?: ReactNode;
  /** Marks the field as invalid. Figma: `state=Error`. */
  error?: boolean;
  /** Icon at the start of the input box, e.g. `<AtSignIcon />` or `<SearchIcon />`. Decorative — wrap it in a `<button>` yourself if it needs to be clickable. */
  startIcon?: ReactNode;
  /** Icon at the end of the input box. Ignored when `type="password"` — that gets a built-in show/hide toggle instead. */
  endIcon?: ReactNode;
  /** className for the outer wrapper (e.g. to set a width). */
  wrapperClassName?: string;
}

/**
 * Input — implements the Figma "Inputs" component (node 2087:1117).
 * Colors, spacing and font come from design tokens (src/tokens/tokens.css).
 * `type="password"` gets a real, working show/hide toggle (the Figma mock
 * only showed static eye/eye-off icons) since a decorative-only toggle would
 * be worse than no toggle at all.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error = false,
    startIcon,
    endIcon,
    wrapperClassName,
    className,
    type = 'text',
    id,
    disabled,
    ...rest
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';
  const resolvedType = isPassword ? (visible ? 'text' : 'password') : type;

  const boxClasses = [styles.box, error && styles.error, disabled && styles.disabled].filter(Boolean).join(' ');

  return (
    <div className={[styles.wrapper, wrapperClassName].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={boxClasses}>
        {startIcon && <span className={styles.icon}>{startIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          type={resolvedType}
          disabled={disabled}
          className={[styles.field, className].filter(Boolean).join(' ')}
          aria-invalid={error || undefined}
          {...rest}
        />
        {isPassword ? (
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setVisible((v) => !v)}
            disabled={disabled}
            aria-label={visible ? 'Hide password' : 'Show password'}
            aria-pressed={visible}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        ) : (
          endIcon && <span className={styles.icon}>{endIcon}</span>
        )}
      </div>
      {helperText && (
        <p className={[styles.helperText, error && styles.helperTextError].filter(Boolean).join(' ')}>{helperText}</p>
      )}
    </div>
  );
});
