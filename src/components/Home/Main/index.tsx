import Div from "./styles"
import Image from 'next/image'



let count:Array<number> = [0,2,0,0,0,0,0];

export default function Main() {

    return (
        <main>

            <Div>

                <div>

                    <div>

                     
                        <div>
                            <span className="previus"></span>
                            <span className="item"></span>
                            <span className="item"></span>
                            <span className="next"></span>
                        </div>

                    </div>

                </div>
                {/*
                <picture>

                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOTXCxfl29gFPNIQ5vNCynPfFqEblTVV9dg&usqp=CAU"></img>

                </picture>
                
                */}

                <section>

                <h2>Mais vendidos</h2>

                <div about="grid" className="grid">

                    <button title="previus">previus</button>

                    <button title="next">next</button>

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

                        </div>)

                    
                        
                    }

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
                    

                </div>

                </section>

                <div>

                    <p>Dúvidas Frequentes</p>

                    <p>A compra é confiável?</p>

                </div>

            </Div>
            
        </main>
    )
}

