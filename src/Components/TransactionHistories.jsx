import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { deleteTransactionAPI, getUserTransactionsAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addResponseContext } from '../Contexts/AddContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Label} from 'recharts';



function TransactionHistories() {
    const { addResponse, setAddResponse } = useContext(addResponseContext)
    const [userTransactions, setUserTransactions] = useState([])
    const [balance, setBalance] = useState(0)
    const getUserTransactions = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await getUserTransactionsAPI(reqHeader)
                // console.log(result);
                if (result.status == 200) {
                    setUserTransactions(result.data)
                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }

    }
    console.log(userTransactions);
    useEffect(() => {
        getUserTransactions()
    }, [addResponse])
    const reloadBalance = () => {
        setBalance(userTransactions.map(i => i.amount).reduce((a, b) => a + b))
    }

    const handleDeleteTransaction = async (tid) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await deleteTransactionAPI(tid, reqHeader)
                if (result.status == 200) {
                    // toast.warning("Transaction Deleted!")
                    getUserTransactions()

                } else {
                    toast.warning(result);
                }
            } catch (err) {
                console.log(err);
            }
        }



    }
    return (
        <div className='rounded border shadow  m-5 w-100'>
            <h1 className='fw-bolder m-5 text-center'>Your Transaction History
            </h1>
            <div className='m-3'>
                <Table className=''>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Date and Time</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTransactions.length > 0 ? userTransactions.sort((a, b) => {
                            let da = new Date(a.dateAndTime),
                                db = new Date(b.dateAndTime);
                            return da - db;
                        }).map((transaction, index) =>
                            <tr key={index}>

                                <td>{transaction.title}</td>
                                {transaction.type == "debit" ?
                                    <td><span className='text-danger'>{transaction.amount}</span></td>
                                    :
                                    <td><span className='text-success'>+{transaction.amount}</span></td>
                                }

                                <td>{transaction.dateAndTime}</td>
                                <td>{transaction.description}</td>
                                <td><button onClick={() => handleDeleteTransaction(transaction._id)} className='btn btn-link text-danger'><i class="fa-solid fa-trash"></i></button></td>
                            </tr>
                        )
                            :
                            <p className='text-warning mt-4'>No Transactions added yet!!!</p>
                        }

                    </tbody>
                </Table>
            </div>
            <ToastContainer autoClose={4000} theme='colored'></ToastContainer>
            <div className='text-center d-flex'>

                <h6 className='fw-bolder ms-4'>Balance: Rs {balance} /-</h6>
                <button className='btn btn-primary btn-sm mb-3 ms-2' onClick={reloadBalance} ><i class="fa-solid fa-rotate-right"></i></button>
            </div>
            <div className='' >
                <h1 className='m-5'>Your transaction Graph</h1>


            <div className='border m-3'>
                    <LineChart 
                        width={500}
                        height={300}
                        data={userTransactions}
                        margin={{
                            top: 30,
                            right: 30,
                            left: 30,
                            bottom: 30,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis label={{ value: 'Title (sorted by time)',offset:-10, position: 'insideBottom' }}   dataKey="title"/>
                        <YAxis  label={{ value: 'Amount', angle: -90,offset:-10, position: 'insideLeft' }} dataKey="amount" />
                        <Tooltip />
                        <Line type="monotone"   dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
            </div>

            </div>

        </div>

    )
}

export default TransactionHistories