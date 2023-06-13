import Div from "./styles"
import Image from 'next/image'
import { useEffect } from "react";


interface ComponentProtocol {
    lang?: string;
    data?: object;
}

let count:Array<number> = [0,2,0,0,0,0,0,2,2,2];

const categoryes = [ 
    {category: "lettering"},
    {category: "folhas e cacto"},
    {category: "black & white"},
    {category: "dinossauros"},
    {category: "dourados"},
    {category: "dourados"},
]

const isMobile = false

function MainComponent(props:ComponentProtocol) {

    const { data, lang } = props;

    const translates = [
       { lang: "pt-BR", title: "DecoQuadros" },
       { lang: "en", title: "DecoQuadros" }
    ];

    const translate = translates.findIndex((currency)  => currency.lang === lang ? currency.lang === lang : currency.lang === "en");

    const content = translates[translate];

    useEffect(() => {
    
        const element = document.getElementById('#flexbox')
    
    }, []);

    return (
        <main>

            <Div>

                <span>

                    <span>

                        <a href="">{content.title}</a>

                        <span>&nbsp; &#8250; &nbsp;</span>

                        <a href="">Home</a>

                    </span>

                </span>

                <div>

                    <div>
                     
                        <div>

                            <span className="previus"></span>

                            <span className="item"></span>

                            <span className="item"></span>

                            <span className="next"></span>

                        </div>

                    </div>

                    <div>
                    </div>

                </div>
                {/*
                <picture>

                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOTXCxfl29gFPNIQ5vNCynPfFqEblTVV9dg&usqp=CAU"></img>

                </picture>
                
                */}

                <section className="options section">
                    <h2 >Quadros em diversos modelos a preços baixos</h2>
                    <div>
                        <div>
                            <div></div>
                            <span>Monte seu kit e ganhe desconto </span>
                        </div>
                        <div>
                            <div></div>
                            <span>Monte seu kit e ganhe desconto </span>
                        </div>
                        <div>
                            <div></div>
                            <span>Monte seu kit e ganhe desconto </span>
                        </div>
                    </div>
                </section>

                <section className="section">

                    <span>

                        <span>

                            <h2 className="h2">Novidades. <span>&nbsp; Veja nossos lançamentos</span></h2>
                        </span>
                        
                        <a href="wwww.google.com">Ver mais</a>

                    </span>

                    {
                        isMobile ? (<></>) : (

                            <div className="btns">

                                <button title="previus"></button>

                                <button title="next"></button>

                            </div>
                        )
                    }

                    <div about="flexbox" className="flexbox dragscroll" id="flexbox" >

                        {
                            
                            count.map( i =>                
                            
                                <div className="item" about="item">

                                    <a>

                                        <div about="galery">

                                            <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>

                                        </div>

                                    </a>

                                    <p>Quadro floral trigo do campo</p>

                                    <p>A partir de R$ 49,90</p>

                                </div>

                            )

                        }

                        <div className="item" about="item">

                            <a>

                                <div about="galery">

                                    <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>

                                    <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>
                                    
                                    <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>


                                </div>

                            </a>

                            <p>Quadro floral trigo do campo</p>

                            <p>A partir de R$ 49,90</p>

                        </div>
                        
                    </div>

                    {
                        isMobile? ( 
                        
                        <div className="BtsMobileSlider">

                            <button title="previus">bvbf</button>
        
                            <button title="next">gfgfg</button>

                        </div>

                        ) : (<></>)

                    }

                </section>

                <section className="section">

                    <span>

                        <span>

                            <h2 className="h2">Novidades. <span>&nbsp; Veja nossos lançamentos</span></h2>
                        </span>
                        
                        <a href="wwww.google.com">Ver mais</a>

                    </span>

                    {
                        isMobile ? (<></>) : (

                            <div className="btns">

                                <button title="previus"></button>

                                <button title="next"></button>

                            </div>
                        )
                    }

                    <div about="flexbox" className="flexbox dragscroll">

                        {
                            
                            count.map( i =>                
                            
                                <div className="item" about="item">

                                    <a>

                                        <div about="galery">

                                            <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>

                                        </div>

                                    </a>

                                    <p>Quadro floral trigo do campo</p>

                                    <p>A partir de R$ 49,90</p>

                                </div>

                            )

                        }

                        <div className="item" about="item">

                            <a>

                                <div about="galery">

                                    <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>

                                    <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>
                                    
                                    <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg"/>


                                </div>

                            </a>

                            <p>Quadro floral trigo do campo</p>

                            <p>A partir de R$ 49,90</p>

                        </div>
                        
                    </div>

                    {
                        isMobile? ( 
                        
                        <div className="BtsMobileSlider">

                            <button title="previus">bvbf</button>
        
                            <button title="next">gfgfg</button>

                        </div>

                        ) : (<></>)

                    }

                </section>

                <section className="banner section" > 

                    <picture>

                        <img/>
                        
                    </picture>

                </section>

                <section className="category section">

                    <h2 className="h2">Categorias</h2>

                    <ul>

                        {

                            categoryes.map(i => {

                                return (

                                    <li>

                                        <picture>

                                            <img src={"https://cdn4.oqueeoquee.com/wp-content/uploads/2012/05/imagem-em-movimento-1.jpg"}/>

                                        </picture>

                                        <span about="Name of category">{i.category}</span>
                                        
                                    </li>

                                )

                            })

                        }

                    </ul>

                </section>

                <section className="depoiment section">

                    <h2 className="h2">Depoimentos</h2>

                </section>

                <section className="details section">

                    <h2 className="h2">Dúvidas Frequentes</h2>

                    <ul className="details-container">
                    
                        <li>

                            <details>

                                <summary>A compra é confiável?</summary>

                                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>

                            </details>

                        </li>

                        <li>

                            <details>

                                <summary>A compra é confiável?</summary>

                                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>

                            </details>

                        </li>

                         <li>

                            <details className="datails">

                                <summary>A compra é confiável?</summary>

                                <p className="p">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>

                            </details>

                        </li>

                    </ul>
 
                </section>

                <section className="section">

                    <div className="about">
                        
                        <h2>Sobre a Quadrosframe</h2>

                        <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                    </div>

                    <div className="about">
                        
                        <h2>Sobre a Quadrosframe</h2>

                        <p className="p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                    </div>

                </section>

            </Div>
            
        </main>
    )
}

export default MainComponent