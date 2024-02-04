import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({ insideTracker }) {
    return (
        <> <Navbar expand="lg" className="bg-primary ">
            <Container>
                <Link className='' to={'/'} style={{ textDecoration: 'none' }}>
                    <h1 className='text-info ' ><i class="fa-solid fa-receipt me-3"></i>
                        Tracky
                    </h1>
                </Link>
                {insideTracker&&<Link to={''} className=' ' style={{ textDecoration: 'none' }}>
              <h6 className='text-info '>Logout</h6>
            </Link>}
            </Container>
        </Navbar></>
    )
}

export default Header