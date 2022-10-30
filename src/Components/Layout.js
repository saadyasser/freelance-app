import styled from 'styled-components/macro';

const Layout = styled.section`
  width: 100%;
  background-color: #f3f4f6;
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 109px;
  padding-bottom: 37px;

  & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 992px) and (max-width: 1920px) {
    padding-top: 60px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 992px) {
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
export default Layout;
