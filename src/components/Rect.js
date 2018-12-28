import styled from 'styled-components';

const Rect = styled.div`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: ${props => props.color};
`;

export default Rect;
