import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  interface DefaultTheme {
    pageBackgroundColor: string;
    backgroundColor: string;
    buttonBackgroundColor: string;
    gradientButtonBackgroundColor: string;
    buttonTextColor: string;
    buttonBackgroundColorHover: string;
    buttonTextColorHover: string;
    textColor: string;
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
  }
}

export const theme: DefaultTheme = {
  pageBackgroundColor: '#FBF3F1',
  backgroundColor: '#fff',
  buttonBackgroundColor: '#680747',
  gradientButtonBackgroundColor: '#c3195d',
  buttonTextColor: '#fff',
  buttonBackgroundColorHover: '#fff',
  buttonTextColorHover: '#680747',
  textColor: '#141010',
  primaryColor: '#680747',
  secondaryColor: '#c3195d',
  thirdColor: '#f70776',
}
