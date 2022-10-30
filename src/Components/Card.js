import styled from 'styled-components/macro';

const Card = styled.div`
  width: 37%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 44px 0;
  background-color: #fff;
  flex-grow: 1;
  display: flex;
  align-items: center;
  .container {
    width: 72%;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) and (max-width: 1919px) {
    width: 40%;
    padding: 30px 0;
  }

  @media screen and (max-width: 992px) {
    width: 96%;
    border-radius: 7px;
  }
`;
export default Card;
