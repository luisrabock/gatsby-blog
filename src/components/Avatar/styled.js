import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 10rem;
  margin: auto;
  width: 10rem;

  ${media.lessThan('large')`
    height: 5rem;
    width: 5rem;
  `}
`;
