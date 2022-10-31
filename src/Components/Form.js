import styled from 'styled-components/macro';

const Form = styled.form`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  h2 {
    font-size: 23px;
    line-height: 33px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 34px;
    color: #000;
  }
  .description {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    color: #707070;
    margin-bottom: 30px;
    margin-top: 0;
    text-align: left;
  }
  p {
    text-align: center;
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    margin: 0;
    margin-top: 50px;
  }
  p a {
    text-decoration: none;
    padding-left: 5px;
    color: #4375ff;
  }
  @media screen and (min-width: 992px) and (max-width: 1919px) {
    h2 {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 16px;
      line-height: 27px;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 12px;
      margin-top: 45px;
    }
  }
`;
export default Form;
