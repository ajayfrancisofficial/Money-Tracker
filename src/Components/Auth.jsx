import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Auth({ insideLogin }) {
    return (
        <div className=' text-center my-4 w-50 ms-auto rounded shadow'>
            {insideLogin?<h1 className='mt-5 pt-5'>Log in</h1>:<h1 className='pt-5 mt-5'>Register</h1>}
            <div className='w-75 container'>
                <FloatingLabel controlId="floatingName" label="Name" className='my-3'>
                    <Form.Control type="text" placeholder="Name" className='text-center' />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email address" className='my-3'>
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='my-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
            </div>

            {insideLogin ? <>
                <Link> <button className='btn btn-success'>Log in</button></Link>
                <div className='text-center d-flex justify-content-center  mt-2'>
                    <p className=' me-1'>New User? </p>
                    <Link to={'/register'}> Register</Link>
                </div>
            </> :
                <>
                    <Link> <button className='btn btn-success'>Register</button></Link>

                    <div className='text-center d-flex justify-content-center  mt-2'>
                        <p className=' me-1'>Already registered? </p>
                        <Link to={'/login'}> Log in</Link>
                    </div>
                </>
            }

        </div>
    )
}

export default Auth