import React, { useContext, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addAPI } from '../services/allAPI';
import { addResponseContext } from '../Contexts/AddContext';




function Add() {
    const { addResponse, setAddResponse } = useContext(addResponseContext)
    const [newTransaction, setNewTransaction] = useState({
        title: "", amount: "", type: "", dateAndTime: "", description: ""
    })
    // console.log(newTransaction);
    const handleAdd = async (e) => {
        e.preventDefault()
        const { title,amount, type, dateAndTime } = newTransaction
        if(type=='credit'){
            newTransaction.amount=+newTransaction.amount
        }else if(type=='debit'){
            newTransaction.amount=-newTransaction.amount

        }

        if (!title || !amount || !type || !dateAndTime) {
            toast.warning("Please fill it completely!!!")
        }
        else {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await addAPI(newTransaction, reqHeader)
                    // console.log(result);
                    if (result.status == 200) {
                        // toast.success("Transaction added")
                        setNewTransaction({ title:"", amount:"", type: "", dateAndTime: "", description: "" })
                        setAddResponse(result.data)

                    } else {
                        toast.warning(result.response.data)
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }


    }
    return (
        <div className=' text-center my-4 w-50 ms-auto rounded border shadow'>
            <h3 className='mt-5 pt-5'>Add new transaction</h3>
            <div className='w-75 container'>
                <FloatingLabel controlId="floatingName" label="Title" className='my-3'>
                    <Form.Control value={newTransaction.title} onChange={e => { setNewTransaction({ ...newTransaction, title: e.target.value }) }} type="text" placeholder="Name" className='text-center' />
                </FloatingLabel>
                <div className='d-flex'>
                    <FloatingLabel controlId="floatingEmail" label="Amount" className='my-3 w-50 me-1'>
                        <Form.Control value={newTransaction.amount} onChange={e => { setNewTransaction({ ...newTransaction, amount: e.target.value }) }} type="number" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingType" label="Type" className='my-3 w-50 ms-1' >
                        <Form.Select aria-label="Type" value={newTransaction.type} onChange={e => { setNewTransaction({ ...newTransaction, type: e.target.value }) }} >
                            <option value="">Choose</option>
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </Form.Select>
                    </FloatingLabel>

                </div>
                <FloatingLabel controlId="floatingName" label="Date and Time" className='my-3'>
                    <Form.Control value={newTransaction.dateAndTime} onChange={e => { setNewTransaction({ ...newTransaction, dateAndTime: e.target.value }) }} type="datetime-local" placeholder="Date and time" className='text-center' />
                </FloatingLabel>
                <FloatingLabel controlId="floatingName" label="Description (optional)" className='my-3'>
                    <Form.Control value={newTransaction.description} onChange={e => { setNewTransaction({ ...newTransaction, description: e.target.value }) }} type="text" placeholder="Name" className='text-center' />
                </FloatingLabel>
            </div>

            <Link> <button onClick={handleAdd} className='btn btn-success mb-4'>Add</button></Link>
            <ToastContainer autoClose={4000} theme='colored'></ToastContainer>



        </div>
    )
}

export default Add