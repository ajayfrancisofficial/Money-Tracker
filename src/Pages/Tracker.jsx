import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import TransactionHistories from '../Components/TransactionHistories'
import Header from '../Components/Header'


function Tracker() {
  return (
    
    <div>
        <Header insideTracker></Header>
<Container>
    <Row>
        <Col>
        <TransactionHistories></TransactionHistories>

        <div className='text-center'>
            <h1 className='fw-bolder display-3'>Balance: Rs <span>20000</span>/-</h1>
        </div>
        </Col>
        <Col>
        <Add></Add>
        </Col>
    </Row>
</Container>
        
    </div>
  )
}

export default Tracker