import Button from '../../Components/Button';
import Card from '../../Components/Card';
import Footer from '../../Components/Footer';
import Form from '../../Components/Form';
import Layout from '../../Components/Layout';
import Logo from '../../Components/Logo';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { IoIosWarning } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import validate from '../../helpers/validate';
import InputStyle from '../../Components/Input/InputStyle';
import Input from '../../Components/Input/Input';

const VerifyCode = () => {
  const [errorSubmit, setErrorSubmit] = useState('');
  const navigate = useNavigate();
  const {
    values,
    valuesChangeHandler,
    errors,
    isValid,
    setIsValid,
    touched,
    inputBlurHandler,
    setErrors,
    setTouched,
  } = useForm(
    {
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
      sixth: '',
    },
    {
      first: {
        required: true,
      },
      second: {
        required: true,
      },
      third: {
        required: true,
      },
      fourth: {
        required: true,
      },
      fifth: {
        required: true,
      },
      sixth: {
        required: true,
      },
    }
  );

  const [loading, error, sendRequest] = useFetch();

  const handleResponseDate = (data) => {
    console.log(data);
    if (data.statusCode === 400) {
      console.log(data);
    } else {
      localStorage.setItem('recoverToken', data.data['recoverToken']);
      navigate('/');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const code =
      values.first +
      values.second +
      values.third +
      values.fourth +
      values.fifth +
      values.sixth;
    const id = localStorage.getItem('_id');
    const body = {
      verificationCode: code,
      _id: id,
    };
    sendRequest(
      {
        url: 'https://talents-valley.herokuapp.com/api/user/password/verify-code',
        body: JSON.stringify(body),
      },
      handleResponseDate
    );
  };
  return (
    <Layout>
      <Card>
        <div className="container">
          <Logo>
            <img src="./images/logo.png" alt="Talents Valley Logo" />
            <h1>Talents Valley</h1>
          </Logo>
          <Form onSubmit={submitHandler}>
            <h2>Forget Password</h2>
            <p className="description">
              We'll send a code to your email to reset your password
            </p>
            <InputStyle className="inline-inputs">
              <div className="flex-item">
                <input
                  name="first"
                  value={values.first}
                  maxLength={1}
                  onChange={valuesChangeHandler}
                  onBlur={inputBlurHandler}
                />
                <input
                  name="second"
                  value={values.second}
                  maxLength={1}
                  onChange={valuesChangeHandler}
                  onBlur={inputBlurHandler}
                />
                <input
                  name="third"
                  value={values.third}
                  maxLength={1}
                  onChange={valuesChangeHandler}
                  onBlur={inputBlurHandler}
                />
              </div>
              <div className="flex-item">
                <input
                  name="fourth"
                  value={values.fourth}
                  maxLength={1}
                  onChange={valuesChangeHandler}
                  onBlur={inputBlurHandler}
                />
                <input
                  name="fifth"
                  value={values.fifth}
                  maxLength={1}
                  onChange={valuesChangeHandler}
                  onBlur={inputBlurHandler}
                />
                <input
                  name="sixth"
                  value={values.sixth}
                  maxLength={1}
                  onChange={valuesChangeHandler}
                  onBlur={inputBlurHandler}
                />
              </div>
            </InputStyle>
            <Button disabled={!isValid} isValid={isValid}>
              {loading ? 'Loading...' : 'Continue'}
            </Button>
          </Form>
        </div>
      </Card>
      <Footer />
    </Layout>
  );
};
export default VerifyCode;
