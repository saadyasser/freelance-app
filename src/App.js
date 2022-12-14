import { Link, Route, Routes } from 'react-router-dom';
import ForgetPassword from './pages/Auth/ForgetPassword';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import VerifyCode from './pages/Auth/VerifyCode';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Home</h1>
            <Link to="/signin">Sign In</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
          </>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/verify" element={<h1>Verfication</h1>} />
    </Routes>
  );
  // const [phone, setPhone] = useState('');
  // return (
  //   <Layout>
  //     <div>
  //       <Card>
  //         <div class="container">
  //           <Logo>
  //             <img src="./images/logo.png" alt="Talents Valley Logo" />
  //             <h1>Talents Valley</h1>
  //           </Logo>
  //           <Form>
  //             <h2>Create Your Acount</h2>
  //             <Input className="col-6">
  //               <div className="form-input">
  //                 <label>First Name</label>
  //                 <input type="text" placeholder="Enter first name" />
  //               </div>
  //               <div className="form-input">
  //                 <label>Last Name</label>
  //                 <input type="text" placeholder="Enter last name" />
  //               </div>
  //             </Input>
  //             <Input>
  //               <div className="form-input">
  //                 <label>Email</label>
  //                 <input type="email" placeholder="Enter email" />
  //               </div>
  //             </Input>
  //             <Input>
  //               <div className="form-input">
  //                 <label>Password</label>
  //                 <input type="email" placeholder="Enter password" />
  //               </div>
  //             </Input>
  //             <Input>
  //               <div className="form-input">
  //                 <label>Phone Number</label>
  //                 <PhoneInput
  //                   country={'eg'}
  //                   enableSearch={true}
  //                   value={phone}
  //                   onChange={(phone) => setPhone(phone)}
  //                 />
  //               </div>
  //             </Input>
  //             <SelectInput />
  //             <Button>Sign Up</Button>
  //             <p>
  //               Already have an account? <a>Sign in</a>
  //             </p>
  //           </Form>
  //         </div>
  //       </Card>
  //       <Footer />
  //     </div>
  //   </Layout>
  // );
}

export default App;
