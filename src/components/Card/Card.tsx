import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Cover image URL. */
  image: string;
  /** Alt text for the cover image — required for accessibility. */
  imageAlt: string;
  /** Small date/meta line above the title. */
  date?: ReactNode;
  /** Card headline. */
  title: ReactNode;
  /** Body copy under the title. */
  description?: ReactNode;
  /** Category pills shown below the description. Omit to hide the row. */
  tags?: string[];
}

/**
 * Card — implements the Figma "Cards" component (node 2103:731).
 * Colors, spacing and radius come from design tokens (src/tokens/tokens.css).
 *
 * `state=hover` is a real `:hover` style, not a prop. `responsive` isn't a
 * prop either — the title size and card width already read tokens that
 * switch by viewport width on their own; see Card.module.css for the couple
 * of properties (meta text color, image layout) that needed their own
 * @media rule.
 */
export function Card({ image, imageAlt, date, title, description, tags, className, ...rest }: CardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')} {...rest}>
      <div className={styles.body}>
        <div className={styles.imageWrap}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
        {date && <div className={styles.date}>{date}</div>}
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>
          {description && <p className={styles.description}>{description}</p>}
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
