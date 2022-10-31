import styled from 'styled-components/macro';

const FooterStyled = styled.footer`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-left: 100px;
  align-self: flex-start;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    margin: 0;
    display: inline;
    padding-right: 70px;
  }
  a {
    text-decoration: none;
    color: #151617;
    font-size: 18px;
    line-height: 1.333;
  }
  @media screen and (min-width: 992px) and (max-width: 1919px) {
    padding-left: 80px;
    li {
      padding-right: 50px;
    }
    a {
      font-size: 16px;
      line-height: 1;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 96%;
    margin: 0 auto;
    padding: 0;
    li {
      padding-right: 20px;
    }
    a {
      font-size: 18px;
      line-height: 1;
    }
  }
  @media screen and (max-width: 768px) {
    width: 96%;
    margin: 0 auto;
    padding: 0;
    li {
      padding-right: 20px;
    }
    a {
      font-size: 14px;
      line-height: 1;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>
          <a>Talents Valley</a>
        </li>
        <li>
          <a>Contacts</a>
        </li>
        <li>
          <a>Privacy & Terms</a>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
