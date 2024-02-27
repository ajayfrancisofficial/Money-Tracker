import React, { useContext, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI,loginAPI } from '../services/allAPI';
import { TokenAuthContext } from '../Contexts/TokenContext';
import validator from 'validator';
function Auth({ insideLogin }) {
    const {isAuthorised, setIsAuthorised}=useContext(TokenAuthContext)
    const [userInputData, setUserInputData] = useState({ name: "", email: "", password: "" })
    // console.log(userInputData);
    const navigate=useNavigate()
    const validateEmail=(email)=>{
        if(validator.isEmail(email)){
            return true
        }else{
            return false
        }
    }

    const handleRegister =async (e) => {
        e.preventDefault()
        const { name, email, password } = userInputData
        
        if (!name || !email || !password) {
                toast.warning("Please fill the form completely!!!")
        }
        else{
            if(validateEmail(email)){
            try{
                const result=await registerAPI(userInputData)
                // console.log(result);
                if(result.status==200){
                    toast.success("Registration Successful, Please Log in")
                setUserInputData({ name: "", email: "", password: "" })
                navigate('/login')
                }
                else{
                    toast.warning(result.response.data)
                }

            }catch(err){
                console.log(err);
            }

        }else{
            toast.warning("invalid Email")
        }
    
    }
    }
    const handleLogin=async(e)=>{
        
        e.preventDefault()
        
        // console.log(userInputData);
        const {email,password}=userInputData
        
       
           if(!email||!password){
            toast.warning("Please fill the form Completely!!!")
        }else{
            if(validateEmail(email)){
          try{  const result=await loginAPI({email,password})
            // console.log(result);
            if(result.status==200){
                sessionStorage.setItem("name",result.data.existingUser.name)
                sessionStorage.setItem("token",result.data.token)
                setIsAuthorised(true)
                navigate('/tracker')
            }else{
                toast.warning(result.response.data)
            }
        }catch(err){
            console.log(err);
        }

        }else{
            toast.warning("invalid Email")
        }
    
    }
    }

    return (
        <div className=' text-center my-4 w-50 ms-auto rounded shadow'>
            {insideLogin ? <h1 className='mt-5 pt-5'>Log in</h1> : <h1 className='pt-5 mt-5'>Register</h1>}
            <div className='w-75 container'>
                {!insideLogin && <FloatingLabel controlId="floatingName" label="Name" className='my-3'>
                    <Form.Control value={userInputData.name} onChange={e => setUserInputData({ ...userInputData, name: e.target.value })} type="text" placeholder="Name" className='text-center' />
                </FloatingLabel>}
                <FloatingLabel controlId="floatingEmail" label="Email address" className='my-3'>
                    <Form.Control value={userInputData.email} onChange={e => setUserInputData({ ...userInputData, email: e.target.value })} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='my-3'>
                    <Form.Control value={userInputData.password} onChange={e => setUserInputData({ ...userInputData, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>
            </div>

            {insideLogin ? <>
                <Link> <button onClick={handleLogin} className='btn btn-success'>Log in</button></Link>
                <div className='text-center d-flex justify-content-center  mt-2'>
                    <p className=' me-1'>New User? </p>
                    <Link to={'/register'}> Register</Link>
                </div>
            </> :
                <>
                    <Link> <button onClick={handleRegister} className='btn btn-success'>Register</button></Link>
                    <div className='text-center d-flex justify-content-center  mt-2'>
                        <p className=' me-1'>Already registered? </p>
                        <Link to={'/login'}> Log in</Link>
                    </div>
                </>
            }
            <ToastContainer autoClose={4000} theme='colored'></ToastContainer>
        </div>
    )
}

export default Auth