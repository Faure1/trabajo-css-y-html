import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'



const Layout = ({children}) =>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-secondary'>
            <Container>
                <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' ><h1 className='text-dark'>Div<span className='text-info'>Geek</span></h1></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
                    <Nav className="me-auto  d-flex  ">
                    </Nav>
                    <Nav>
                        <Nav.Link href='/' ><p className='text-white text-center'>inicio</p></Nav.Link>
                        <Nav.Link href='#principio' ><p className='text-white text-center'>principio</p></Nav.Link>
                        <Nav.Link href='#mas-info'><p className='text-white text-center'>Más informacion</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {children}
        <Navbar collapseOnSelect expand="lg"  className='bg-dark'>
            <Container>
                <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' ><h1 className='text-white'>Div<span className='text-info'>Geek</span></h1></Nav.Link>
                <Nav className="me-auto  d-flex  ">
                </Nav>
                <Nav>
                    <Nav.Link className=''><h3 className=" text-light ">© Derechos reservados </h3></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}
export default Layout;