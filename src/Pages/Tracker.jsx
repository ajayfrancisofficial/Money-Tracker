import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import TransactionHistories from '../Components/TransactionHistories'
import Header from '../Components/Header'
import { getUserTransactionsAPI } from '../services/allAPI'

function Tracker() {
  return (
    
    <div>
        <Header insideTracker></Header>
<Container>
    <Row>
        <Col>
        <TransactionHistories></TransactionHistories>

        
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