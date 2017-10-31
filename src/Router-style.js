import styled from 'styled-components';
import { fonts } from './resources/styles/fonts';
import { colors } from './resources/styles/colors';

export const Theme = styled.div`
  ${fonts.primary};
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.textPrimary};
`