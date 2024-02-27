import React, { useContext, useEffect } from 'react'
import Auth from '../Components/Auth'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { TokenAuthContext } from '../Contexts/TokenContext'
import { Link } from 'react-router-dom'


function LandingPage({ insideLandingPage, insideLogin }) {
    const {isAuthorised, setIsAuthorised}=useContext(TokenAuthContext)
    
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

                                {isAuthorised?
                                <Link to={'/tracker'}><button className='btn btn-primary btn-lg'>Track your Expenses</button></Link>
                                :(insideLandingPage? <Link to={'/login'}><button className='btn btn-primary btn-lg '>Get Started</button></Link>
                                :<div>Please Login to Continue</div>
                                )
                               
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