import styled from 'styled-components';

const Rect = styled.div`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: ${props => props.color};

  @media (max-width: 460px) {
    display: none;
  }
  @media (max-width: 560px) {
    width: ${props => props.width * 0.8}px;
    height: ${props => props.width * 0.8}px;
  }
`;

export default Rect;
