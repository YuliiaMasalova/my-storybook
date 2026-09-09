import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Button label. Omit it (keeping `icon`) to render an icon-only button — pass `aria-label` in that case. */
  children?: ReactNode;
  /** Visual style. Figma: `type`. @default 'primary' */
  variant?: ButtonVariant;
  /** Size scale — drives padding/radius/icon size from the Component Sizes tokens. Figma: `size`. @default 'md' */
  size?: ButtonSize;
  /** Optional icon, e.g. `<ArrowUpRightIcon />`. */
  icon?: ReactNode;
  /** Where the icon sits relative to the label. Ignored for icon-only buttons. Figma: `icon`. @default 'right' */
  iconPosition?: IconPosition;
  /** Toggled/active visual state (e.g. a segmented control). Figma: `state=Selected`. */
  selected?: boolean;
}

/**
 * Button — implements the Figma "Buttons" component (node 2081:1492).
 * Colors, spacing and radius come from design tokens (src/tokens/tokens.css);
 * `Hover`/`Focused`/`Disabled` are real CSS states rather than props — only
 * `Selected` (a toggled/active look) is exposed as a prop, since it isn't a
 * transient interaction.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    selected = false,
    className,
    disabled,
    ...rest
  },
  ref,
) {
  const iconOnly = !children && Boolean(icon);

  if (import.meta.env.DEV && iconOnly && !rest['aria-label']) {
    // eslint-disable-next-line no-console
    console.warn('Button: an icon-only button needs an `aria-label` for accessibility.');
  }

  const classes = [styles.button, styles[variant], styles[size], iconOnly && styles.iconOnly, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      disabled={disabled}
      data-selected={selected || undefined}
      {...rest}
    >
      {icon && iconPosition === 'left' && !iconOnly && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.label}>{children}</span>}
      {icon && (iconOnly || iconPosition === 'right') && <span className={styles.icon}>{icon}</span>}
    </button>
  );
});
