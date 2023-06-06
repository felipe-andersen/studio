import Head from "next/head";
import Div from "./styles"
import Image from 'next/image'



let count:Array<number> = [0,2,0,0,0,0,0,2,2,2];

const categoryes = [ 
    {category: "lettering"},
    {category: "folhas e cacto"},
    {category: "black & white"},
    {category: "dinossauros"},
    {category: "dourados"},
    {category: "latters"},
    {category: "latters"},
    {category: "lettering"},
    {category: "lettering"},
]

export default function Main() {

    return (
        <main>

            <Div>

                <span>Artframe/Home</span>

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
                        <span>compre por kit e pague menos</span>
                        <span>compre por kit e pague menos</span>
                    </div>

                </div>
                {/*
                <picture>

                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOTXCxfl29gFPNIQ5vNCynPfFqEblTVV9dg&usqp=CAU"></img>

                </picture>
                
                */}

                <section className="options">
                    <h2>Quadros em diversos modelos a preços baixos</h2>
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

                <section>

                    <h2>Novidades. <span>Veja nosos lançamentos</span></h2>

                    <div className="btns">

                        <button title="previus"></button>

                        <button title="next"></button>

                    </div>


                    <div about="grid" className="grid">

                        {
                            
                            count.map( i =>                
                            
                                <div className="item" about="item">

                                    <a>

                                        <div about="galery">

                                            <img src="https://quadrosdecorativos.com/wp-content/uploads/2020/07/9641-Mindset-CAPA-VERTICAL-300x300.jpg">

                                        </img>

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

                </section>

                <section>

                    <h2>Estilo boho</h2>

                    <div className="btns">

                        <button title="previus"></button>

                        <button title="next"></button>

                    </div>

                    <div about="grid" className="grid">

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

                </section>

                <div className="banner"> 
                    <div>
                        
                    </div>

                </div>

                <div className="category">
                    <h2>Categorias</h2>
                    <ul>
                        {
                            categoryes.map(i => {
                                return (
                                    <li>
                                        <picture><img src={i.category}/></picture>
                                        <span about="Name of category">{i.category}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    Promoção
                </div>

                <div>
                    Depoimentos
                </div>

                <div>
                Pinterest

                <p>Dúvidas Frequentes</p>

                <p>A compra é confiável?</p>
                
                </div>

                <div>

                    Copyright © 2023 Apple Inc. All rights reserved. <br/>
                    Privacy Policy Terms of Use Site Map

                    language: Português (Brasil)

                    Contry: Brasil

                </div>



            </Div>
            
        </main>
    )
}

