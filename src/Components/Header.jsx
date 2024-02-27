import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { TokenAuthContext } from '../Contexts/TokenContext';


function Header(insideTracker) {
    const { isAuthorised, setIsAuthorised } = useContext(TokenAuthContext)
    useEffect(() => {
        const name = sessionStorage.getItem("name")
    }, [])
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.clear()
        setIsAuthorised(false)
        navigate('/')
    }
    const name = sessionStorage.getItem("name")
    return (
        <> <Navbar expand="lg" className="bg-primary ">
            <Container>
                <Link className='' to={'/'} style={{ textDecoration: 'none' }}>
                    <h1 className='text-info ' ><i class="fa-solid fa-receipt me-3"></i>
                        Tracky
                    </h1>
                </Link>
                {name ? <button onClick={handleLogout} className='btn-primary btn'>Logout{` (${name})`}</button>
                    :
                    <Link to={'/login'}><button className='btn-primary btn'>Login</button></Link>
                }
            </Container>
        </Navbar></>
    )
}

export default Header