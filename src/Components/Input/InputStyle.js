import styled from 'styled-components/macro';

const InputStyle = styled.div`
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 35px;
  width: 100%;
  &.col-6 {
    display: flex;
    gap: 32px;
  }
  &.col-6 .form-input {
    flex-basis: 50%;
  }
  .form-input {
    position: relative;
  }
  label {
    box-sizing: border-box;
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: #707070;
    letter-spacing: 0.36px;
    margin-bottom: 10px;
  }
  input {
    outline: 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-radius: 7px;
    font-size: 18px;
    line-height: 24px;
    border: 1px solid ${(props) => (props.isError ? '#F50000' : '#bec2c6')};
    color: #000;
    padding: 18px 0 18px 16px;
    transition: box-shadow ease 0.25s, border-color ease 0.25s;
  }
  input:focus {
    border: 1px solid #4375ff;
  }

  .form-input p {
    margin: 0;
    color: #ee404c;
    text-align: left;
  }
  .form-input p svg {
    font-size: 22px;
  }
  .validation,
  .validation p {
    display: flex;
    align-items: center;
  }
  .validation p {
    gap: 5px;
  }
  .validation p {
    flex-basis: 60%;
  }
  .validation .link {
    flex-basis: 40%;
    text-align: right;
    text-decoration: none;
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #707070;
  }

  .password-icon {
    position: absolute;
    top: 51px;
    right: 24px;
    color: #bec2c6;
    font-size: 24px;
  }

  & .react-tel-input .form-control {
    width: 100%;
    border-radius: 7px;
    font-size: 18px;
    border: 1px solid #bec2c6;
  }
  & .react-tel-input .form-control:focus {
    box-shadow: none;
    border: 1px solid blue;
  }
  select {
    width: 100%;
    overflow: hidden;
  }
  option:focus {
    outline: 0;
    width: 100%;
  }

  /* & .react-tel-input .flag {
    width: 30px;
  } */

  @media screen and (min-width: 992px) and (max-width: 1920px) {
    margin-bottom: 15px;
    label {
      font-size: 16px;
      line-height: 18px;
      color: #707070;
      letter-spacing: 0px;
      margin-bottom: 5px;
    }
    input {
      border-radius: 5px;
      font-size: 14px;
      line-height: 1;
      padding: 10px 0 10px 16px;
    }
    .form-input p svg {
      font-size: 17px;
    }
    .validation p {
      gap: 3px;
      font-size: 13px;
      line-height: 16px;
    }
    .password-icon {
      top: 34px;
      right: 10px;
      color: #bec2c6;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 17px;
    label {
      font-size: 15px;
      line-height: 15px;
      margin-bottom: 5px;
    }

    input {
      border-radius: 3px;
      font-size: 14px;
      line-height: 1;
      padding: 10px 0 10px 12px;
    }
    .validation p {
      gap: 3px;
      font-size: 11px;
      line-height: 1;
    }
    .form-input p svg {
      font-size: 17px;
    }
    .validation .link {
      font-size: 13px;
      line-height: 1;
    }

    .password-icon {
      top: 29px;
      right: 12px;
      font-size: 22px;
    }
  }
`;

export default InputStyle;
