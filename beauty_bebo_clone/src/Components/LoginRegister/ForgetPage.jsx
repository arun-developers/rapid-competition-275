import React from 'react'
import "./ForgetPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
const ForgetPage = () => {
    // const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: ""
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
        const { email } = inpval;
        if (email === "") {
            toast.error('Email Field is Requred!', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please Enter Valid Email Address!', {
                position: "top-center",
            });
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email;
                });
                if (userlogin.length === 0) {
                    toast.error('Please Entre Valid Email Address!', {
                        position: "top-center",
                    });
                } else {
                    for (let i = 0; i < userlogin.length; i++) {
                        toast.success(`Password Reset Link Send on : ${userlogin[i].email} Password : ${userlogin[i].password}`, {
                            position: "top-center"
                        });
                    }
                    // history("/details")
                }
            }
        }
    }
    return (
        <>
            <div className='forget_main_div'>
                <h1 className='forget_password_heading'>FORGOT YOUR PASSWORD?</h1>
                <div className='main_child_first_div'>
                    <div className='main_chail_forget_div'>
                        <p className='paragraph_forget_text'>Please enter your email address below to receive a password reset link.</p>
                        <div>
                            <label className="label" for="email">
                                <span>Email *</span>
                            </label>
                            <div className="control">
                                <input onChange={getdata} name='email' type="email" className="input-text" title="Email" />
                            </div>
                        </div>
                        <div className="primary">
                            <button onClick={addData} type="submit" className="create_an_account" name="send" id="send2">
                                <span>RESET MY PASSWORD</span>
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default ForgetPage