import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Add() {
    return (
        <div className=' text-center my-4 w-50 ms-auto rounded shadow'>
            <h3 className='mt-5 pt-5'>Add new transaction</h3>
            <div className='w-75 container'>
                <FloatingLabel controlId="floatingName" label="Title" className='my-3'>
                    <Form.Control type="text" placeholder="Name" className='text-center' />
                </FloatingLabel>
                <div className='d-flex'>
                    <FloatingLabel controlId="floatingEmail" label="Amount" className='my-3 w-50 me-1'>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingType" label="Type" className='my-3 w-50 ms-1' >
                        <Form.Select aria-label="Type">
                            <option value="1">Debit</option>
                            <option value="2">Credit</option>
                        </Form.Select>
                    </FloatingLabel>
                    
                </div>
                <FloatingLabel controlId="floatingName" label="Date and Time" className='my-3'>
                    <Form.Control type="datetime-local" placeholder="Date and time" className='text-center' />
                </FloatingLabel>
                <FloatingLabel controlId="floatingName" label="Description (optional)" className='my-3'>
                    <Form.Control type="text" placeholder="Name" className='text-center' />
                </FloatingLabel>
            </div>

            <Link> <button className='btn btn-success mb-4'>Add</button></Link>



        </div>
    )
}

export default Add