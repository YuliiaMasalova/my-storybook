import type { SVGProps } from 'react';

/** "eye" icon — password hidden, click reveals it. From the password-variant Input instance. */
export function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M0.833333 10C0.833333 10 4.16667 3.33333 10 3.33333C15.8333 3.33333 19.1667 10 19.1667 10C19.1667 10 15.8333 16.6667 10 16.6667C4.16667 16.6667 0.833333 10 0.833333 10Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
