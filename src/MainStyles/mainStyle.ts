import styled from 'styled-components/native';

export const CustomScreen = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const getFont = (font: string) => `font-family: Poppins${font}`;
