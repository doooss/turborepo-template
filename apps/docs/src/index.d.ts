import '@emotion/react';

import type { CustomTheme } from 'style-sheets';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}
