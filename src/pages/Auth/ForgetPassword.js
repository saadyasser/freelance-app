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

const ForgetPassword = () => {
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
      email: '',
    },
    {
      email: {
        required: true,
        email: true,
      },
    }
  );

  const [loading, error, sendRequest] = useFetch();

  const handleResponseDate = (data) => {
    console.log(data);
    if (data.statusCode === 400) {
      console.log(data);
      setErrors({ email: data.message });
      setTouched({ email: true });
    } else {
      localStorage.setItem('_id', data.data['_id']);
      navigate('/verify-code');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: values.email,
    };
    sendRequest(
      {
        url: 'https://talents-valley.herokuapp.com/api/user/password/forgot',
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
            <InputStyle>
              <Input
                id="email"
                type="email"
                name="email"
                inputValue={values.email}
                changedHandler={valuesChangeHandler}
                bluredHandler={inputBlurHandler}
                label="Email"
                placeholder="Enter Email"
                isError={errorSubmit || (touched.email && errors.email)}
              >
                <div className="validation">
                  <p>
                    {touched.email && errors.email && (
                      <>
                        <IoIosWarning />
                        <span>{errors.email}</span>
                      </>
                    )}
                  </p>
                </div>
              </Input>
            </InputStyle>
            <Button disabled={!isValid} isValid={isValid}>
              {loading ? 'Sending' : 'Send Code'}
            </Button>
          </Form>
        </div>
      </Card>
      <Footer />
    </Layout>
  );
};
export default ForgetPassword;
