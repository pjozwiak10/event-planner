import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  interface DefaultTheme {
    pageBackgroundColor: string;
    backgroundColor: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
    gradientButtonBackgroundColor: string;
    buttonBackgroundColorHover: string;
    buttonTextColorHover: string;
    primaryColor: string;
    secondaryColor: string;
    errorColor: string;
  }
}

export const theme: DefaultTheme = {
  pageBackgroundColor: '#F1F1F1', //FBF3F1
  backgroundColor: '#fff',
  buttonBackgroundColor: '#3c3f48',
  buttonTextColor: '#fff',
  gradientButtonBackgroundColor: '#525764',
  buttonBackgroundColorHover: '#fff',
  buttonTextColorHover: '#3c3f48',
  primaryColor: '#242424',
  secondaryColor: '#f3ce92',
  errorColor: '#f54242'
}