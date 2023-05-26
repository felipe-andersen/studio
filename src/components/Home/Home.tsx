import Image from 'next/image'

import Header from './Header/Header'
import Main from './Main'
import { url } from 'inspector'



export default function HomePage() {
    return (
<div style={{backgroundImage: 'url("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg")'}}>
            
            <Header/>
            <Main/>
     
        </div>
    )
}