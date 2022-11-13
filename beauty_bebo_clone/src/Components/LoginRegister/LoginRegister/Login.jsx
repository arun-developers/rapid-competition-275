import React from 'react'
import "./Login.css"
import facebookLogo from "../Assets/Assets/facebook_image_logo.jpg"
import googleLogo from "../Assets/Assets/Google__G__Logo.svg.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Login = () => {
    // const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userInputData");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "") {
            toast.error('Email Field is Requred!', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please Enter Valid Email Address!', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password Field is Requred!', {
                position: "top-center",
            });
        } else if (password.length < 8) {
            toast.error('Minimum length of this field must be equal or greater than 8 symbols.!', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    toast.error('invalid details', {
                        position: "top-center",
                    });
                } else {
                    console.log("user Arun login succesfulyy");
                    toast.success('User Login Successfully', {
                        position: "top-center"
                    });
                    // history("/details")
                }
            }
        }

    }

    return (
        <>

            <div className='mainlogindiv'>

                <div className='main_login_inside_div'>


                    <div className='mainloginchildsdiv'>
                        <h1 className='customerloginheading'>CUSTOMER LOGIN</h1>


                        <div className='signinwithgooglefacebook'>
                            <div className='logo_div'>
                                <img className='sign_in_with_google_facebook_logo' src={'https://i.pinimg.com/736x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg'} alt="faceboologo" />
                                <p className='logo_div_sign'>Sign in with Facebook</p>
                            </div>
                            <div style={{ background: "#dd4b39" }} className='logo_div'>
                                <img style={{ background: "#fff" }} className='sign_in_with_google_facebook_logo' src={'https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png'} alt="googlelogo" />
                                <p className='logo_div_sign'>Sign in with Google</p>
                            </div>
                        </div>


                        <p style={{ textAlign: "center" }}>-- OR --</p>
                        <div className='logincredentialdiv'>
                            <div>
                                <h3 className='registerloginnewcustomerheading'>REGISTERED CUSTOMERS</h3>
                                <hr style={{ width: "96%", marginLeft: "0px" }} />
                                <p className='paragraph_text'>If you have an account, sign in with your email address.</p>
                                <label class="label" for="email">
                                    <span>Email *</span>
                                </label>
                                <div class="control">
                                    <input onChange={getdata} name="email" type="email" class="input-text" title="Email" />
                                </div>
                                <label for="pass" class="label">
                                    <span>Password *</span>
                                </label>
                                <div class="control">
                                    <input onChange={getdata} name="password" type="password" class="input-text" title="Password" />
                                </div>
                                <div class="primary">
                                    <button onClick={addData} type="submit" class="action login primary" name="send" id="send2">
                                        <span>Sign In</span>
                                    </button>
                                </div>
                                <span className='forget_password'>Forgot Your Password?</span>
                            </div>
                        </div>
                    </div>


                    <div className='mainloginchildsdiv'>
                        <div style={{ marginTop: "192px" }} className='logincredentialdiv'>
                            <div>
                                <h3 className='registerloginnewcustomerheading'>NEW CUSTOMERS</h3>
                                <hr style={{ width: "96%", marginLeft: "0px" }} />
                                <p className='paragraph_text'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                                <div>
                                    <button style={{ marginTop: "10px" }} className='login'>Create an Account</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <ToastContainer />

            </div>



        </>
    )
}
export default Login;
