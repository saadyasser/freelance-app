import styled from 'styled-components/macro';

const Logo = styled.header`
  text-align: center;
  margin-bottom: 22px;

  & img {
    width: 123px;
    margin-bottom: 15px;
  }
  & h1 {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }

  @media screen and (min-width: 992px) and (max-width: 1919px) {
    margin-bottom: 30px;
    & img {
      width: 100px;
      margin-bottom: 5px;
    }
    & h1 {
      font-size: 22px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 80px;
      margin-bottom: 15px;
    }
    h1 {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;

export default Logo;
