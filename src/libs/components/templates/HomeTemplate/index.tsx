import Image from 'next/image'

import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import { url } from 'inspector'
import { Head } from 'next/document'
import FooterComponent from './FooterComponent'
import { Div } from './styles'
import SchemeComponent from '@/types/SchemaComponent';
import { Fragment } from 'react';
import HeadComponent from './HeadComponent';


interface ComponentProtocol<SchemeComponent> {
    content: Object;
};

export default function HomeTemplate(props:SchemeComponent) {
    return (

        <Div>

            <HeadComponent/>

            <HeaderComponent/>
            
            <MainComponent lang='pt-BR'/>

            <FooterComponent/>
     
        </Div>
    )
}