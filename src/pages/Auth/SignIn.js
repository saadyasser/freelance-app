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
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import validate from '../../helpers/validate';
import InputStyle from '../../Components/Input/InputStyle';
import Input from '../../Components/Input/Input';
import SignUp from './SignUp';

const SignIn = () => {
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
      password: '',
    },
    {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        password: true,
      },
    }
  );

  const [loading, error, sendRequest] = useFetch();

  const [passwordShown, setPasswordShown] = useState(false);

  const login = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(true);

  const handleResponseDate = (data) => {
    if (data === 422) {
      const { errorMessages } = validate(values, {
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          password: true,
        },
      });
      setErrors(errorMessages);
      setTouched({
        email: true,
        password: true,
      });
    } else if (data === 400) {
      console.log(data);
    } else {
      localStorage.setItem('token', data['data'].accessToken);
      login.setTokenId(data['data'].accessToken);
      navigate('/');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: values.email,
      password: values.password,
    };
    sendRequest(
      {
        url: 'https://talents-valley.herokuapp.com/api/user/login',
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
            <h2>Login To Your Account</h2>
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
            <InputStyle>
              <Input
                id="password"
                type={showPassword ? 'password' : 'text'}
                name="password"
                inputValue={values.password}
                changedHandler={valuesChangeHandler}
                bluredHandler={inputBlurHandler}
                label="Password"
                placeholder="Enter Password"
                isError={errorSubmit || (touched.password && errors.password)}
              >
                {showPassword ? (
                  <IconContext.Provider value={{ className: 'password-icon' }}>
                    <AiOutlineEyeInvisible
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ className: 'password-icon' }}>
                    <AiOutlineEye
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    />
                  </IconContext.Provider>
                )}
                <div className="validation">
                  <p>
                    {((touched.password && errors.password) || errorSubmit) && (
                      <>
                        <IoIosWarning />
                        <span>{errors.password || errorSubmit}</span>
                      </>
                    )}
                  </p>
                  <Link to="/forget-password" className="link">
                    Forgot Password?
                  </Link>
                </div>
              </Input>
            </InputStyle>
            <Button disabled={!isValid} isValid={isValid}>
              {loading ? 'Signing...' : 'Sign In'}
            </Button>

            <p>
              Dont have an acount? <Link to="/signup">Sign up</Link>
            </p>
          </Form>
        </div>
      </Card>
      <Footer />
    </Layout>
  );
};
export default SignIn;
