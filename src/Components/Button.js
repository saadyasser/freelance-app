import styled from 'styled-components/macro';

const Button = styled.button`
  outline: 0;
  border: none;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 25px;
  line-height: 33px;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding: 14px 0;
  margin-top: 60px;
  background-color: ${(props) =>
    props.isValid ? '#4375ff' : 'rgba(67,117,255,.8)'};
  border-radius: 7px;
  @media screen and (min-width: 992px) and (max-width: 1919px) {
    border-radius: 5px;
    margin-top: 40px;
    font-size: 18px;
    line-height: 1;
    padding: 10px 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
    padding: 10px 0;
    margin-top: 30px;
    border-radius: 3px;
  }
`;

export default Button;
