import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import './register.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Context/useAuth';
const Register = () => {
    const [registerData, setregisterData] = useState({});
    const [passError, setpassError] = useState('');
    const history = useNavigate();
    const { createUser } = useAuth();
    let repassword;
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setregisterData(newRegisterData);
        // console.log(loginData)

    }
    const hadlePass = e => {
        console.log(e.target.value);
        repassword = e.target.value;
        if (registerData.pass === repassword) {
            console.log(registerData.pass, repassword)
            setpassError('')
        } else {
            console.log(registerData.pass, repassword)
            setpassError('passward doesnt match')

        }
    }
    const handleRegisterSubmit = e => {
        e.preventDefault()
        console.log(registerData);
        createUser(registerData.name, registerData.email, registerData.pass, history);

    }
    return (
        <Container fluid className='explore-body'>
            <Container className='py-2'>
                {/* register form */}
                <h3 className='text-center'>Join Unive for free</h3>
                <hr />
                <form className='mx-auto  py-3 ' onSubmit={handleRegisterSubmit}>
                    <label htmlFor="">Username</label>
                    <input required className='input-group mt-2 mb-3 ' type="text" onChange={handleOnChange} placeholder='name' name="name" id="name" />
                    <label htmlFor="">Email</label>
                    <input required className='input-group my-2 mb-3 ' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                    <label htmlFor="">Password</label>
                    <input required className='input-group my-2 mb-3 ' type="password" onChange={handleOnChange} placeholder='password' name="pass" id="pass" />
                    <label htmlFor="">Confirm Password</label>
                    <input required className='input-group my-2 mb-3 ' type="password" onBlur={hadlePass} placeholder='re-enter password' name="re-pass" id="pass" />
                    {passError ? <p className='text-danger text-center'>{passError}</p> : ''}

                    <button className='btn btn-primary px-5 mx-auto mt-2  mb-5'>Register </button>
                </form>
            </Container>
        </Container>
    );
};

export default Register;