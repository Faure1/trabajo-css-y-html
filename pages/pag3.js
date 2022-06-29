import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Container,Row,ListGroup } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination,Navigation  } from "swiper"
import Brands from '../portafolio'

export default function Home() {
    return (
    <>
        <Layout>
            <Container className='mt-5'>
                <Row className='mb-5'>
                    <div className='d-flex justify-content-center'>
                        <h1 id='principio' className='text-danger'>HTML</h1>
                    </div>
                </Row>
                <Row>
                    <div className='col-lg-3 col-12 d-flex align-items-center justify-content-center mb-5'>
                        <ListGroup>
                            <ListGroup.Item className='text-center '><a className='text-dark' href='#como_iniciar'>¿Qué es HTML?</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a  className='text-dark'href='#Crear'>¿como crear un archivo html?</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#Etiquetas'>Etiquetas</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark'href='#atributos'>atributos</a></ListGroup.Item>
                            <ListGroup.Item className='text-center '><a className='text-dark' href='#Navegacion'>Navegacion</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#Listas'>Listas</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#TABLAS'>Tablas</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#Formularios'>Formularios</a></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-lg-6 col-12 sombra scroll mb-5'>
                        <div className='d-flex justify-content-center'>
                            <h4 id='como_iniciar'>¿Qué es HTML?</h4>
                        </div>
                        <div className='d-flex '>
                            <div >
                                <div><p className='text-center'>HTML significan Hyper Text Markup uage.</p></div>
                                <div><p  className='text-center'>Html es un lenguaje de estructura con el que estan creadas todas las páginas webs del mundo, en otras palabras, se trata de un conjunto de etiquetas que sirven para definir y ordenar el texto y otros elementos que compondrán una página web</p></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Crear'>Como crear un archivo</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>Primero debemos crear una carpeta, la cual arrastraremos luego hacia el VSC y  creamos un archivo y lo nombramos index. html</p></div>
                                <div><h6  className='text-center'>Estructura HTML:</h6></div>
                                <div>
                                    <ul>
                                        <li>Header = Se da información base del documento como el titulo, logo, nombre de autor, etc. </li>
                                        <li>Body = Se declara todo el contenido de la página web solo hay un elemento body</li>
                                        <li>Footer = Es un pie de página, que puede tener información del autor, derechos del mismo, etc</li>
                                        <li>Section = Agrupa contenidos relacionados</li>
                                        <li>Article = Agragar información de otro lugar y que siga teniendo sentido</li>
                                        <li>Aside = Contenido no perteneciente la página  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Etiquetas'>Etiquetas</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>AL ABRIR UNA ETIQUETA DEBEMOS CERRARLA ESTO SE REALIZA DE LA SIGUIENTE MANERA: ETIQUETA CONTENIDO DE UNA ETIQUETA /ETIQUETA</p></div>
                                <div><p className='text-center'>H: AGREFAR N TITULO, SIGUEN UN ORDEN DESDE EL H1 QUE ES EL MÁS IMPORTANTE, Y ASI VA DISMINUYENDO LA IMPORTANCIA HASTA EL H6. PUEDEN ANIDARSE PARA GENERAR SUBSECCIONES PARA ASI TENER MEJOR ORGANIZACION DE LA INOFRMACIÓN</p></div>
                                <div className='text-center'><Image alt='Ejemplo1' src='/2ejemplo1.png'width={200}height={250}layout='intrinsic'/></div>
                                <div><p className='text-center'>P: AGRGAR PARRAFOS QUE CONTIENEN TEXTO. LA ETIQUETA P ES UN ELEMENTO DE BLOQUE YA QUE UTILIZA TODO EL ESPACIO DISPONIBLE.</p></div>
                                <div><p className='text-center'>A: SIRVE PARA AGREGAR UN ENLACE.</p></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='atributos'>atributos</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>Son valores adicionales que ajustan los elementos y su comportamiento</p></div>
                                <div><h6 className='text-center'>algunos ejemplos son:</h6></div>
                                <div>
                                    <ul>
                                        <li><p className='text-center'>Lang= ES : configuramos diciendo que el idioma va a ser español</p></li>
                                        <li><p className='text-center'>HREF: especificar ruta del recurso</p></li>
                                        <li><p className='text-center'>TARGET: configura como quremos ver el recurso</p></li>
                                        <li><p className='text-center'>CLASS : da estilos a nuestra página.</p></li>
                                        <li><p className='text-center'>ID : idetificador unico que nos permite seleccionar un elemento y asi hacer navegación a traves de anclas</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Navegacion'>NAVEGACIÓN A TRÁVES DE ANCLAS</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>Utilizamos la etiqueta nav /nav, y allí navegaremos en la misma página a través de anclas</p></div>
                                <div><p className='text-center'>Rutas absolutas: Tienen un protocolo, http o https y son únicas en la red</p></div>
                                <div><p className='text-center'>Rutas relativas: No usan protocolo.</p></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Listas'>Listas</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>UL: SE UTILIZAN CUANDO EL ORDEN DE LOS ELEMENTOS NO INFLUYE</p></div>
                                <div><p className='text-center'>OL : SE UTILIZAN CUANDO EL ORDEN DE LOS ELEMENTOS ES IMPORTANTE</p></div>
                                <div><p className='text-center'>Dentro del ol o del ul tenes que poner li que ese seria cada elemento de la lista</p></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='TABLAS'>TABLAS</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div>
                                    <ul>
                                        <li>table: Etiqueta que encierra una tabla</li>
                                        <li>caption : establece el titulo de la tabla</li>
                                        <li>thead: van las cabeceras y las celdas iran en vez de td con th</li>
                                        <li>tbody : contenido de la tabla</li>
                                        <li>tfoot: pie de tabla</li>
                                        <li>tr : etiqueta que construye una fila</li>
                                        <li>td : etiqueta que construye una celda</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Formularios'>Formularios</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>FORM: ES LA ETIQUETA QUE ENGLOBA NUESTRO FORMULARIO</p></div>
                                <div><p className='text-center'>LABEL: SIRVE PARA ESCRIBIR EL NOMBRE DEL CAMPO DE RELLENAR</p></div>
                                <div><p className='text-center'>SELECT CREA UNA LISTA DE OPCIONES DONDE PODEMOS SELECCIONAR UNA O VARIAS OPCIONES</p></div>
                                <div><p className='text-center'>BUTTON : VISUALMENTE ES IGUAL, PERO EL FORMULARIO NO SE VA A ENVIAR. </p></div>
                                <div><p className='text-center'></p>SUBMIT: SE UTILIZA PARA ENVIAR EL FORMULARIO</div>
                                <div><p className='text-center'></p>DATE: SE UTILIZA PARA INTRODUCIR UNA FECHA</div>
                                <div><p className='text-center'></p>DATETIME: OBSOLETO</div>
                                <div><p className='text-center'></p>DATETIME-LOCAL: FECHA Y HORA</div>
                                <div><p className='text-center'></p>TIME: SE UTILIZA PARA INTRODUCIR UNA HORA</div>
                                <div><p className='text-center'></p>MONTH: SE UTILIZA PARA INTRODUCIR UN MES</div>
                                <div><p className='text-center'></p>WEEK: SE UTILIZA PARA INTRODUCIR EL NÚMERO DE SEMANA DEL AÑO</div>
                                <div><p className='text-center'></p>COLOR: SE UTILIZA PARA ESPECIFICAR UN COLOR</div>
                                <div><p className='text-center'></p>NUMBER: SE UTILIZA PARA VALORES NUMÉRICOS</div>
                                <div><p className='text-center'></p>RANGE: SE UTILIZA PARA ESTABLECER UN RANGO </div>
                                <div><p className='text-center'></p>RESET: SE UTILIZA PARA RESETEAR EL FORMULARIO</div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mt-5'>
                    <div className='d-flex justify-content-center'>
                        <h2 id='mas-info'>Mas informacion en:</h2>
                    </div>
                </Row>
                <Row className='mb-5' >
                    <div className='d-flex justify-content-center'>
                        <Brands></Brands>
                    </div>
                </Row>
            </Container>
        </Layout>
    </>
)
}

