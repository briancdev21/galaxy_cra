import styled from 'styled-components';

const OpenBtn = styled.div`
  background: ${props => `linear-gradient(45deg, ${props.start} 10%, ${props.end} 90%)`};
  border-radius: 20px;
  padding: 8px 15px;
  min-width: 70px;
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 560px) {
    min-width: 60px;
  }
`;

export default OpenBtn;
