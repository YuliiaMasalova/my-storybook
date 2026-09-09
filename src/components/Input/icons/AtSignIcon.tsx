import type { SVGProps } from 'react';

/**
 * "at-sign" icon from the Figma Input component's default startIcon slot.
 * Geometry copied verbatim from the exported asset. Figma's export had
 * `stroke="black"` — every sibling icon (x, search, eye, eye-off) in the
 * same component instead uses the placeholder gray token, so `black` here
 * looks like a missed color binding rather than an intentional choice.
 * Uses `currentColor` like the rest so it inherits `.icon`'s color.
 */
export function AtSignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 5.33333V8.66667C10.6667 9.1971 10.8774 9.70581 11.2525 10.0809C11.6275 10.456 12.1362 10.6667 12.6667 10.6667C13.1971 10.6667 13.7058 10.456 14.0809 10.0809C14.456 9.70581 14.6667 9.1971 14.6667 8.66667V8C14.6666 6.49535 14.1575 5.03499 13.2222 3.85635C12.2869 2.67772 10.9804 1.85015 9.51509 1.5082C8.04982 1.16625 6.51195 1.33003 5.15156 1.97291C3.79117 2.6158 2.68826 3.69997 2.02217 5.04915C1.35608 6.39833 1.16598 7.93316 1.48278 9.40408C1.79958 10.875 2.60465 12.1955 3.76709 13.1508C4.92952 14.1062 6.38095 14.6402 7.88538 14.6661C9.3898 14.692 10.8587 14.2082 12.0533 13.2933"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
