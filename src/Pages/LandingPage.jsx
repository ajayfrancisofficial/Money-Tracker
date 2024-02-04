import React from 'react'
import Auth from '../Components/Auth'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'




function LandingPage({ insideLandingPage, insideLogin }) {
    return (
        <>
        <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <div className='my-4'>
                            <h1 className='display-2'>Track your Expenses easily</h1>
                            <h3>with <span className='fw-bolder text-info'>Tracky</span>.</h3>

    
                                <p className='mt-5 display-4 text-secondary'>"You can make money in two ways- make more, or spend less" </p>
                                <h6 className='text-secondary'><pre>                                                      -John Hope Bryant</pre></h6>
                                 

                            <div className='my-5'>

                                {insideLandingPage ?
                                    <Link to={'/login'}><button className='btn btn-primary btn-lg'> Get Started</button></Link>
                                    :
                                    <h3>Please Login to continue</h3>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>{!insideLandingPage && (insideLogin ? <Auth insideLogin></Auth> : <Auth insideRegister></Auth>)}</div>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default LandingPage