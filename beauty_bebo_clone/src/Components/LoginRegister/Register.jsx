import React from 'react'
import "./Register.css"
import facebookLogo from "../assets/facebook_image_logo.jpg"
import googleLogo from "../assets/Google__G__Logo.svg.png"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [passwordInput, setPasswordInput] = useState("No Password");
    const [showText, setShowText] = useState("");

    let passwordDiv;

    if (passwordInput === "Weak Password") {
        passwordDiv = {
            background: "red",
            color: "white"
        }
    }
    else if (passwordInput === "Strong Password") {
        passwordDiv = {
            background: "green",
            color: "white"
        }
    }

    // const history = useNavigate();

    const [inpval, setInpval] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: ""

    })
    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;

        if (e.target.name === "password") {
            passwordStrength(e.target.value);
        }
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const passwordStrength = (password) => {

        if (password.length >= 1) {
            for (let i = 0; i < password.length; i++) {
                if (password[i] === "@" || password[i] === "#" || password[i] === "$" || password[i] === "%" || password[i] === "&" || password[i] === "*") {
                    setPasswordInput("Strong Password");
                }
                else {
                    setPasswordInput("Weak Password");
                }
            }
            setShowText("Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.")
        }
    }
    const addData = (e) => {
        e.preventDefault();
        const { fname, lname, email, phone, password, confirmpassword } = inpval;

        if (fname === "") {
            toast.error(' First Name Field is Requred!', {
                position: "top-center",
            });
        } else if (lname === "") {
            toast.error('Last Name Field is Requred!', {
                position: "top-center",
            });
        }
        else if (email === "") {
            toast.error('Email  Field is Requred!', {
                position: "top-center",
            });
        }
        else if (!email.includes("@")) {
            toast.error('Please Enter valid Email Addres!', {
                position: "top-center",
            });
        } else if (phone === "") {
            toast.error('Phone Field is Requred!', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password Field is Requred!', {
                position: "top-center",
            });
        } else if (password.length < 8) {
            toast.error('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.!', {
                position: "top-center",
            });
        }
        else if (confirmpassword === "") {
            toast.error('Confirm Password Field is Requred!', {
                position: "top-center",
            });
        }
        else if (confirmpassword !== password) {
            toast.error('Password Mismatched!', {
                position: "top-center",
            });
        }
        else {
            // console.log("data added succesfully");
            toast.success('User Details Added Successfully', {
                position: "top-center",
            });
            // history("/login")
            localStorage.setItem("userInputData", JSON.stringify([...data, inpval]));

        }

    }

    return (
        <>
            <div className='register_main_div'>

                <h1 className='create_new_account_heading'>CREATE NEW CUSTOMER ACCOUNT</h1>

                <div className='signinwithgooglefacebook'>
                    <div className='logo_div'>
                        <img className='sign_in_with_google_facebook_logo' src={facebookLogo} alt="faceboologo" />
                        <p className='logo_div_sign'>Sign in with Facebook</p>
                    </div>
                    <div style={{ background: "#dd4b39" }} className='logo_div'>
                        <img style={{ background: "#fff" }} className='sign_in_with_google_facebook_logo' src={googleLogo} alt="googlelogo" />
                        <p className='logo_div_sign'>Sign in with Google</p>
                    </div>
                </div>

                <p style={{ textAlign: "center" }}>-- OR --</p>

                <div className='main_chail_div'>

                    <div className='inside_main_div_child'>

                        <h3 className='personal_information_heading'>PERSONAL INFORMATION</h3>
                        <hr />

                        <div className='fname_lastname_div'>

                            <div className='lable_first_secound_div'>
                                <label class="label" for="email">
                                    <span>First Name *</span>
                                </label>
                                <div class="control">
                                    <input onChange={getdata} name='fname' type="text" className="input-text" title="Fname" />
                                </div>
                            </div>


                            <div className='lable_first_secound_div'>
                                <label className="label" for="email">
                                    <span>Last Name *</span>
                                </label>
                                <div className="control">
                                    <input onChange={getdata} name='lname' type="text" className="input-text" title="Lname" />
                                </div>
                            </div>
                        </div>

                        <div className='type_checkbox'>
                            <input style={{ marginLeft: "0px" }} type="checkbox"></input>
                            <p style={{ marginTop: "1px" }}>Sign Up for Newsletter</p>
                        </div>

                        <div>
                            <label className="label" for="email">
                                <span>Email *</span>
                            </label>
                            <div className="control">
                                <input onChange={getdata} name='email' type="email" className="input-text" title="Email" />
                            </div>
                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <label className="label" for="email">
                                <span>Phone *</span>
                            </label>
                            <div className="control">
                                <input onChange={getdata} name='phone' type="text" className="input-text" title="Email" />
                            </div>
                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <label className="label" for="email">
                                <span>Password *</span>
                            </label>
                            <div className="control">

                                <input onChange={getdata} name='password' type="password" className="input-text" title="Password" />
                                <p className='show_text'>{showText}</p>
                            </div>
                        </div>

                        <div style={passwordDiv} className='password_strength'>
                            <p>Password Strength: <span>{passwordInput}</span></p>
                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <label className="label" for="email">
                                <span>Confirm Password *</span>
                            </label>
                            <div className="control">
                                <input onChange={getdata} name='confirmpassword' type="password" className="input-text" title="ConformPassword" />
                            </div>
                        </div>

                        <div className="primary">
                            <button onClick={addData} type="submit" className="create_an_account" name="send" id="send2">
                                <span>CREATE AN ACCOUNT</span>
                            </button>
                        </div>

                    </div>

                </div>

                <ToastContainer />

            </div>
        </>
    )
}

export default Register;
