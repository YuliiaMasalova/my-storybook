import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode, Ref } from 'react';
import styles from './Tags.module.css';

export type TagState = 'default' | 'hover';

interface TagsOwnProps {
  /** Label text. */
  children: ReactNode;
  /**
   * Visual state. Figma: `property1` (Default/hover). Pins the hover look
   * for previews/Chromatic snapshots — real pointer `:hover` renders the
   * same style, so this isn't required for interactive use.
   * @default 'default'
   */
  state?: TagState;
}

export type TagsProps =
  | ({ interactive?: false } & TagsOwnProps & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>)
  | ({ interactive: true } & TagsOwnProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>);

/**
 * Tags — implements the Figma "Tags" component (node 2106:307).
 * Colors, spacing and radius come from design tokens (src/tokens/tokens.css).
 *
 * Decorative by default (`<span>`, e.g. the category pills on Card) — pass
 * `interactive` to render a real `<button>` instead (keyboard-focusable,
 * `onClick` works, `disabled` is supported).
 */
export const Tags = forwardRef<HTMLSpanElement | HTMLButtonElement, TagsProps>(function Tags(
  { children, state = 'default', interactive, className, ...rest },
  ref,
) {
  const classes = [styles.tag, className].filter(Boolean).join(' ');

  if (interactive) {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        data-state={state === 'hover' ? 'hover' : undefined}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      ref={ref as Ref<HTMLSpanElement>}
      className={classes}
      data-state={state === 'hover' ? 'hover' : undefined}
      {...(rest as HTMLAttributes<HTMLSpanElement>)}
    >
      {children}
    </span>
  );
});
