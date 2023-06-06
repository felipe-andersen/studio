import Image from 'next/image'

import Header from './Header/Header'
import Main from './Main'
import { url } from 'inspector'
import { Head } from 'next/document'



export default function HomePage() {
    return (

        <div>

            <Header/>
            
            <Main/>
     
        </div>
    )
}