import { css, useTheme } from '@emotion/react';
import * as React from 'react';
import { BorderRadius, Color, CustomTheme } from 'style-sheets';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  children?: React.ReactNode;
  borderRadius?: BorderRadius;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}

export const Button = ({
  children,
  color = 'dark-neutral',
  borderRadius = 'sm',
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <button
      css={css`
        background-color: ${theme.colors[color][500]};
        color: ${theme.colors.netural[100]};
        border-radius: ${theme.borderRadius[borderRadius]};
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: ${theme.spacing[2]} ${theme.spacing[4]};
      `}
      {...props}
    >
      {children}
    </button>
  );
};
