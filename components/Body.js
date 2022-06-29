import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container, Row,Carousel,  } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination,Navigation  } from "swiper"
import Brands from '../portafolio'
import Link from 'next/link'



const Body = ({children}) =>{
    return(
        <>
            <Container className='mt-5'>
                <Row id='principio'>
                    <div className='d-flex justify-content-center'>
                        <h1 className='text-center'>Trabajo de html y css</h1>
                    </div>
                </Row>
                <Row className='mt-4 d-flex justify-content-center'>
                    <div className='col-12 col-lg-5 d-flex justify-content-center sombra mb-5 align-items-center'>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-info '>CSS</h2>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Link href='/pag2'>
                                    <Image alt='Css' src='/css.png'  width={280} height={200} layout='intrinsic'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'>
                    </div>
                    <div className='col-12 col-lg-5 d-flex justify-content-center sombra  mb-5 align-items-center' >
                        <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-danger'>HTML</h2>
                            </div>
                            <div className='d-flex justify-content-center'>
                                    <Link href='/pag3'>
                                        <Image  alt='HTML' src='/html.png'  width={280} height={200} layout='intrinsic'/>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mt-5' id='mas-info'>
                    <div className='d-flex justify-content-center'>
                        <h2>Mas informacion en:</h2>
                    </div>
                </Row>
                <Row className='mb-5' >
                    <div className='d-flex justify-content-center'>
                        <Brands></Brands>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Body;