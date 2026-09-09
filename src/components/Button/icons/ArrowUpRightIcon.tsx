import type { SVGProps } from 'react';

/**
 * "arrow-up-right" icon exported from the Figma Button component's icon slot
 * (node 2081:1492). Geometry (viewBox, path data, stroke width, line caps) is
 * copied verbatim from the exported asset — the only change is `stroke`:
 * Figma bakes a fixed color per instance (`white` for Primary, `#394753` for
 * Secondary); here it's `currentColor` so the icon always matches the
 * button's text color across variants, interaction states and themes.
 */
export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M4.66667 11.3333L11.3333 4.66667"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66667 4.66667H11.3333V11.3333"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
