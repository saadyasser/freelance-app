import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import Footer from '../../Components/Footer';
import Form from '../../Components/Form';
import Input from '../../Components/Input/Input';
import InputStyle from '../../Components/Input/InputStyle';
import Layout from '../../Components/Layout';
import Logo from '../../Components/Logo';
import SelectInput from '../../Components/SelectInput';
import validate from '../../helpers/validate';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { IoIosWarning } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [errorSubmit, setErrorSubmit] = useState('');
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
      country: '',
    },
    {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        password: true,
      },
      mobile: {
        required: true,
        mobile: true,
      },
      country: {
        required: true,
      },
    }
  );
  const login = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(true);

  const handleResponseDate = (data) => {
    if (data.statusCode === 400) {
      if (data.message.split(' ')[0] == 'رقم') {
        console.log('mobile');
        setErrors({ mobile: 'mobile number is already used' });
        setTouched({ mobile: true });
      } else {
        console.log('email');
        setErrors({ email: 'email is already used' });
        setTouched({ email: true });
      }
    } else {
      localStorage.setItem('token', data['data'].accessToken);
      login.setTokenId(data['data'].accessToken);
      navigate('/verify');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      mobile: values.mobile,
      country: values.country,
    };
    sendRequest(
      {
        url: 'https://talents-valley.herokuapp.com/api/user/signup',
        body: JSON.stringify(body),
      },
      handleResponseDate
    );
  };

  const [loading, error, sendRequest] = useFetch();

  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <Layout>
      <Card>
        <div className="container">
          <Logo>
            <img src="./images/logo.png" alt="Talents Valley Logo" />
            <h1>Talents Valley</h1>
          </Logo>
          <Form onSubmit={submitHandler}>
            <h2>Create Your Acount</h2>
            <InputStyle>
              <div className="col-6">
                <Input
                  id="f-name"
                  type="text"
                  name="firstName"
                  inputValue={values.firstName}
                  changedHandler={valuesChangeHandler}
                  bluredHandler={inputBlurHandler}
                  label="First Name"
                  placeholder="Enter First Name"
                  isError={
                    errorSubmit || (touched.firstName && errors.firstName)
                  }
                >
                  <div className="validation">
                    <p>
                      {touched.firstName && errors.firstName && (
                        <>
                          <IoIosWarning />
                          <span>{errors.firstName}</span>
                        </>
                      )}
                    </p>
                  </div>
                </Input>
                <Input
                  id="l-name"
                  type="text"
                  name="lastName"
                  inputValue={values.lastName}
                  changedHandler={valuesChangeHandler}
                  bluredHandler={inputBlurHandler}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  isError={errorSubmit || (touched.lastName && errors.lastName)}
                >
                  <div className="validation">
                    <p>
                      {touched.lastName && errors.lastName && (
                        <>
                          <IoIosWarning />
                          <span>{errors.lastName}</span>
                        </>
                      )}
                    </p>
                  </div>
                </Input>
              </div>
            </InputStyle>
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
                </div>
              </Input>
            </InputStyle>
            <InputStyle>
              <Input
                id="mobile"
                type="mobile"
                name="mobile"
                inputValue={values.mobile}
                changedHandler={valuesChangeHandler}
                bluredHandler={inputBlurHandler}
                label="Mobile"
                placeholder="Enter Mobile"
                isError={errorSubmit || (touched.mobile && errors.mobile)}
              >
                <div className="validation">
                  <p>
                    {touched.mobile && errors.mobile && (
                      <>
                        <IoIosWarning />
                        <span>{errors.mobile}</span>
                      </>
                    )}
                  </p>
                </div>
              </Input>
            </InputStyle>
            <InputStyle>
              <Input
                id="country"
                type="country"
                name="country"
                inputValue={values.country}
                changedHandler={valuesChangeHandler}
                bluredHandler={inputBlurHandler}
                label="country"
                placeholder="Enter Country"
                isError={errorSubmit || (touched.country && errors.country)}
              >
                <div className="validation">
                  <p>
                    {touched.country && errors.country && (
                      <>
                        <IoIosWarning />
                        <span>{errors.country}</span>
                      </>
                    )}
                  </p>
                </div>
              </Input>
            </InputStyle>
            <Button type="submit" disabled={!isValid} isValid={isValid}>
              {loading ? 'Signing...' : 'Sign Up'}
            </Button>
            <p>
              Already have an account?
              <Link to="/signin" className="link">
                Sign In
              </Link>
            </p>
          </Form>
        </div>
      </Card>
      <Footer />
    </Layout>
  );
};

export default SignUp;
