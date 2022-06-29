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
                        <h1 id='principio' className='text-info'>CSS</h1>
                    </div>
                </Row>
                <Row>
                    <div className='col-lg-3 col-12 d-flex align-items-center justify-content-center mb-5'>
                        <ListGroup>
                            <ListGroup.Item className='text-center '><a className='text-dark' href='#como_iniciar'>¿Qué es CSS?</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a  className='text-dark'href='#Plugins'>Plugins</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#como-usar'>¿Cómo utilizar CSS y HTML?</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark'href='#Sintaxis'>Sintaxis CSS</a></ListGroup.Item>
                            <ListGroup.Item className='text-center '><a className='text-dark' href='#Selectores'>Selectores</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#principios-basicos'>Principios básicos de CSS</a></ListGroup.Item>
                            <ListGroup.Item className='text-center'><a className='text-dark' href='#Box-Model'>Box Model</a></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-lg-6 col-12 sombra scroll mb-5'>
                        <div className='d-flex justify-content-center'>
                            <h4 id='como_iniciar'>¿Qué es CSS?</h4>
                        </div>
                        <div className='d-flex '>
                            <div >
                                <div><p className='text-center'>CSS significa Cascade Style Sheets, es decir hojas de estilo en cascada, básicamente el archivo se lee de arriba hacia abajo, es decir que los estilos que están por debajo pisan a los archivos que entran por encima. Si nosotros declaramos un estilo, en la línea 20 y declaramos el mismo estilo pero con otro valor en la línea 24, se tomará este último.</p></div>
                                <div>
                                    <ul>
                                        <li>Es un lenguaje de diseño: es más es el único lenguaje de diseño que existe.</li>
                                        <li>Lo interpreta el navegador: es decir no hace falta instalar nada, todos los navegadores tienen un motor de render, que procesa este lenguaje. De ahí viene el término renderizar.</li>
                                    </ul>
                                </div>
                                <div><p  className='text-center'>CSS nació en 1996 y su versión 2.0 fue en 1998. Ya en el 2011 se modularizo CSS es decir que se va acumulando su contenido y se actualiza hasta el dia de hoy.</p></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Plugins'>Plugins</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>los plugins que vas a usar para visual estudio code son:</p></div>
                                <div>
                                    <ul>
                                        <li>Live Server</li>
                                        <li>Prettier - Code formatter</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='como-usar'>¿Cómo utilizar CSS y HTML?</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div>
                                    <ol>
                                        <li>
                                            <div>
                                                <div>
                                                    <p className='text-center'>Hacer una carpeta que se llame css y dentro de ella un archivo que se llame styles.css y en html utilizamos en el head una etiqueta :</p>
                                                </div>
                                                <div><p className='text-center'>link rel = "stylesheet" href = "css/styless.css" /</p>
                                                </div>
                                                <div><p className='text-center'>En nuestro archivo styless.css podemos codificar lo siguiente y el fondo de nuestra página cambiara de color.</p></div>
                                                <div className='text-center'><Image alt='Ejemplo1' src='/ejemplo1.png'  width={280} height={80} layout='intrinsic'/></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <div><p className='text-center'>La otra forma de incluir CSS es utilizar la etiqueta style de la siguiente manera, en el mismo head de nuestro archivo index.html</p></div>
                                                <div className='text-center'><Image alt='Ejemplo2' src='/ejemplo2.png'width={280}height={120}layout='intrinsic'/></div>
                                                <div><p className='text-center'>El problema de hacerlo así es que por lo general nosotros tenemos varias páginas, entonces de la otra manera solo declaramos 1 sola vez esos estilos y se utilizan globalmente en todas las páginas.</p></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <div><p className='text-center'>La tercera forma de añadir CSS es añadir un atributo style en la etiqueta de HTML, no lo recomiendo salvo que por alguna razón necesitemos utilizarlo y es bueno saber que se puede hacer, pero es muy mala práctica.</p></div>
                                                <div className='text-center'><Image alt='Ejemplo3' src='/ejemplo3.png'width={400}height={40}layout='intrinsic'/></div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Sintaxis'>Sintaxis CSS</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div>
                                    <ul>
                                        <li><p className='text-center'>Selector: Es el elemento al que vamos a aplicar estilos</p></li>
                                        <li><p className='text-center'>Propiedad: Lo que vamos a cambiar</p></li>
                                        <li><p className='text-center'>Valor: El nuevo valor que le vamos a dar a la propiedad.</p></li>
                                        <li><p className='text-center'>Propiedad:Valor flecha Se le denomina declaración</p></li>
                                        <li><p className='text-center'>Al conjunto de selector+declaración se le denomina regla</p></li>
                                    </ul>
                                </div>
                                <div className='text-center'><Image alt='Ejemplo4' src='/ejemplo4.png'width={300}height={110}layout='intrinsic'/></div>
                                <div><p className='text-center'>No hay un límite de propiedades que le podamos poner a un elemento. El ; se usa para separar una propiedad de la otra y es obligatorio ponerlo.</p></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Selectores'>Selectores</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>Los selectores se componen de la siguiente manera:</p></div>
                                <div>
                                    <ul>
                                        <li>
                                            <div>
                                                <div><p>Selectores Simples</p></div>
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <div><p>Selectores elementales</p></div>
                                                                <div>
                                                                    <ul>
                                                                        <li>Selector Universal flecha *</li>
                                                                        <li>Selector de tipo o etiqueta flecha Nombre de la etiqueta</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div><p>Selectores de atributos</p></div>
                                                                <div>
                                                                    <ul>
                                                                        <li>id flecha id del elemento</li>
                                                                        <li>clase flecha clase del elemento</li>
                                                                        <li>otros</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <div><p>Selectores Compuestos</p></div>
                                                <div>
                                                    <ul>
                                                        <li><p>Selectores Agrupados</p></li>
                                                        <li>
                                                            <div><p>Selectores  Combinados</p></div>
                                                            <div>
                                                                <ul>
                                                                    <li>Selectores descendientes</li>
                                                                    <li>Selector de hermano siguiente +</li>
                                                                    <li>Selector de hermanos siguientes ~</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li><p>Pseudoclases - Pseudoelementos</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div><p className='text-center'>El selector universal se utiliza para cosas muy concretas ya que engloba todo o selecciona todos los elementos. Un ejemplo de selector de tipo puede ser h1 color: green; . Si nuestro elemento tiene un id, podemos darle estilos de la siguiente forma:</p></div>
                                <div className='text-center'><Image alt='Ejemplo5' src='/ejemplo5.png'width={250}height={100}layout='intrinsic'/></div>
                                <div><p className='text-center'>Recuerden que los estilos con Id son sensibles a mayúsculas y minúsculas, pero también solo se le puede dar un Id único a cada elemento, por lo que va en contra del principio de CSS que es poder utilizar los estilos.</p></div>
                                <div><p className='text-center'>Por lo general para darle estilos a los elementos, establecemos clases y luego codificamos esas clases, por ejemplo:</p></div>
                                <div className='text-center'><Image alt='Ejemplo6' src='/ejemplo6.png'width={450}height={100}layout='intrinsic'/></div>
                                <div><p className='text-center'>No hay límite del número de clases que se pueden codificar, pero una buena práctica siempre usa 2 o 3 niveles de clases. La idea básica de usar clases es que con una clase le podemos dar estilos a varios elementos y así reutilizar el código.</p></div>
                                <div><p className='text-center'>Los otros atributos se escribe de la siguiente manera:</p></div>
                                <div className='text-center'><Image alt='Ejemplo7' src='/ejemplo7.png'width={400}height={400}layout='intrinsic'/></div>
                                <div><p className='text-center'>Para los Selectores Agrupados se codifican de la siguiente manera:</p></div>
                                <div className='text-center'><Image alt='Ejemplo8' src='/ejemplo8.png'width={450}height={150}layout='intrinsic'/></div>
                                <div><p className='text-center'>En los selectores descendientes podemos seleccionar un elemento dentro de otro, no hay límite de descendencia, las buenas prácticas dicen que no es buena idea bajar más de dos elementos. También bueno es saber que el elemento que se selecciona dentro del otro, se le llama hijo y al que está más arriba padre.</p></div>
                                <div className='text-center'><Image alt='Ejemplo9' src='/ejemplo9.png'width={350}height={150}layout='intrinsic'/></div>
                                <div><p className='text-center'>Nos permite seleccionar el hermano siguiente, y solo el siguiente. En el caso que quisiera elegir todos los hermanos siguientes se cambia el + por el ~.</p></div>
                                <div className='text-center'><Image alt='Ejemplo10' src='/ejemplo10.png'width={350}height={150}layout='intrinsic'/></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='principios-basicos'>Principios básicos de CSS</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><h6 className='text-center'>¿Cómo funciona CSS?</h6></div>
                                <div>
                                    <ul>
                                        <li><p className='text-center'>Especificidad = Establece cómo de específico es un selector para saber qué estilo aplicar.</p></li>
                                        <li><p className='text-center'>Cascada = Funciona siempre que la especificidad sobre el elemento sea la misma</p></li>
                                        <li><p className='text-center'>Herencia = Es la capacidad que tienen algunos elementos de heredar algunas propiedades de sus elementos contenedores  padres, abuelos, etc</p></li>
                                    </ul>
                                </div>
                                <div><p className='text-center'>En el siguiente ejemplo vamos a ver como se puede darle estilo a un título de todas las formas posibles, y para entender qué estilo va a aplicarse finalmente:</p></div>
                                <div className='text-center'><Image alt='Ejemplo11' src='/ejemplo11.png'width={350}height={450}layout='intrinsic'/></div>
                                <div><p className='text-center'>En el ejemplo anterior, vemos prácticamente como funciona la especificidad. Cada uno de los elementos tiene un valor, y lo que hace el navegador es sumar esos valores y el que tiene la suma más alta gana y es finalmente el estilo que renderiza. mientras más específico sean los selectores que usemos, más valor tendrá.</p></div>
                                <div>
                                    <ul>
                                        <li>Las etiquetas y elementos toma un valor 001</li>
                                        <li>Clases, atributos y pseudoclases 010</li>
                                        <li>Ids 100</li>
                                        <li>Estilo en línea 1000</li>
                                        <li>!important Gana a todo y no se “debe” usar nunca</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 id='Box-Model'>Box Model</h4>
                        </div>
                        <div className='d-flex '>
                            <div>
                                <div><p className='text-center'>La web se compone de cajas, tenemos un header, un menú, un body. Pero simplemente son cajas con contenidos en su interior.</p></div>
                                <div className='text-center'><Image alt='Ejemplo12' src='/ejemplo12.png'width={350}height={150}layout='intrinsic'/></div>
                                <div><h5 className='text-center'>Los elementos en línea no tienen medida, por lo tanto no van a crecer con las propiedades de ancho y alto.</h5></div>
                                <div><p className='text-center'>La propiedad Margin, nos permite generar espacio entre elementos. Es un shorthand propiedad abreviada que controla los 4 lados posibles a los que dar márgenes.</p></div>
                                <div>
                                    <ul>
                                        <li>margin-top: Margen superior</li>
                                        <li>margin-right: Margen derecho</li>
                                        <li>margin-top: Margen inferior</li>
                                        <li>margin-left: Margen izquierdo</li>
                                    </ul>
                                </div>
                                <div><p className='text-center'>Admite hasta 4 valores que van en el orden las agujas del reloj:</p></div>
                                <div>
                                    <ul>
                                        <li>1 valor = margin: top/right/bottom/left;</li>
                                        <li>2 valores = margin: top/bottom left/right;</li>
                                        <li>3 valores = margin: top left/right bottom;</li>
                                        <li>4 valores = margin: top right bottom left;</li>
                                    </ul>
                                </div>
                                <div><h5 className='text-center'>Los elementos de línea solo tienen márgenes horizontales y no verticales.</h5></div>
                                <div><p className='text-center'>Podemos decirle al navegador que nos calcule de forma automática los márgenes, pero para eso es muy importante que definamos el ancho en un elemento de bloque. Para centrar los textos, dentro de un bloque existe otra propiedad que permite hacerlo.</p></div>
                                <div><p className='text-center'>La propiedad Padding, es la que nos permite generar espacio interno entre el borde y la caja. Es un shorthand propiedad abreviada que controla los 4 lados posibles a los que dar padding.</p></div>
                                <div>
                                    <ul>
                                        <li>padding-top: padding superior</li>
                                        <li>padding-right: padding derecho</li>
                                        <li>padding-bottom: padding inferior</li>
                                        <li>padding-left: padding izquierdo</li>
                                    </ul>
                                </div>
                                <div><p className='text-center'>Admite hasta 4 valores que van en el orden las agujas del reloj:</p></div>
                                <div>
                                    <ul>
                                        <li>1 valor = padding: top/right/bottom/left;</li>
                                        <li>2 valores = padding : top/bottom left/right;</li>
                                        <li>3 valores = padding top left/right bottom;</li>
                                        <li>4 valores = padding: top right bottom left;</li>
                                    </ul>
                                </div>
                                <div><p className='text-center'>En el caso de padding no tenemos las mismas limitaciones que teníamos con margin en los elementos de línea. Es decir que si le doy padding en una dirección este va a crecer en esa dirección.</p></div>
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

