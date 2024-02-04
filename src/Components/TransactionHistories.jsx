import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TransactionHistories() {
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
                        <tr>
    
                            <td>Salary</td>
                            <td><span className='text-success'>+25000</span></td>
                            <td>2/2/24 10:58</td>
                            <td>Salary credited</td>
                            <td><Link ><button className='btn btn-link text-warning'><i class="fa-solid fa-pen"></i></button></Link></td>
                            <td><Link><button className='btn btn-link text-danger'><i class="fa-solid fa-trash"></i></button></Link></td>
                        </tr>
                        <tr>
    
                            <td>shopping</td>
                            <td><span className='text-danger'>-5000</span></td>
                            <td>2/2/24 10:58</td>
                            <td></td>
                            <td><Link ><button className='btn btn-link text-warning'><i class="fa-solid fa-pen"></i></button></Link></td>
                            <td><Link><button className='btn btn-link text-danger'><i class="fa-solid fa-trash"></i></button></Link></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default TransactionHistories