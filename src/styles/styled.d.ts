import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      danger: string;
      purple: string;
      white: string;
      pink: string;
      gray: string;
      green: string;

      highlightedBackground: string;
      answeredBackground: string;

      logo: string;

      question: string;
      questionDisabled: string;

      background: string;
      backgroundSecundary: string;
      defaultText: string;
    };
  }
}
