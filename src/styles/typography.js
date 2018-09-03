import styled from 'react-emotion';
import { colors } from 'styles';

export const Heading = styled('h2')`
  font-size: 1.725rem;
`;

export const HeadingInverted = styled(Heading)`
  color: ${colors.white};
`;

export const Subheading = styled('h3')`
  font-size: 1.2rem;
`;

export const Strong = styled('h4')`
  font-size: 1rem;
`;

export const Lede = styled('p')`
  color: ${colors['gray-500']};
  font-size: 1.25rem;
  line-height: 1.5;
`;
