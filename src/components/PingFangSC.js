import styled from 'styled-components';

const PingFangSC = styled.span`
  font-family: 'PingFangSC';
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px;
  color: ${props => props.color};

  @media (max-width: 560px) {
    font-size: ${props => props.mobileSize ? props.mobileSize : props.size * 0.7}px;
  }
`;

export default PingFangSC;
