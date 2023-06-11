import styled from "styled-components"

const Div = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    background: transparent;
    font-size: 16px;
    font-weight: 400;

    :root {
        --breakPoint490px: 16px
        --paddingVertical-breakPoint490px: 16px;
        --paddingHorizontal-view-maxWidth-490px: 8px;
        --paddingVertical-view-maxWidth-830px: 24px;
        --paddingHorizontal-view-maxWidth-830px: 24px;
        --p-fontSize-view-maxWidth-490px: 16px;
        --h2-fontSize-view-maxWidth-490px: 28px;
        --h2-margin-top: 0;
        --h2-margin-bottom: 45px;
        --p-fontSize-view-maxWidth-490px: 16px;
        --p-margin-top: 24px;
        --p-margin-bottom: 0;
    }

    span:nth-child(1) {
        width:  100%;
        text-align: center;
        margin: 12px 0 12px 0;
    }

    section, .section {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px 0 12px 0;
        padding: 24px;
    }

    h2, .h2 {
        font-family: 'Sen', sans-serif;
        font-family: 'Proza Libre', sans-serif;
        font-size: 32px;
        font-weight: 600;
        text-weidth: 700;
        margin:  0 0 24px 0;
        color: rgba(40,40,40,1);
        width:  100%;

        white-space: nowrap;
        letter-spacing: -1px;
    }

    p, .p {
        font-weight: 300;
        line-height: 25px;
    }

    a {

    }

    div:nth-child(1) {
        box-sizing: border-box;
        width: 100%;
        height: 68vh;
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin: 12px 0 12px 0;

        div:nth-child(1) {
            box-sizing: border-box;
            width: 70%;
            display: flex;
            align-items: center;
            text-align: center;
            flex-direction: column;
            background: red;
            font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
            position: relative;
            line-height: 1.1;

            div:nth-child(1){
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                box-sizing: border-box;
                height: 50px;
                width:  min-content;
                background: green;
                position: absolute;
                gap: 8px;
     
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    height: 34px;
                    width:  34px;
                    background: red;
                    border-radius: 500000px;
                }
   
                .item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    height: 8px;
                    width:  34px;
                    background: black;
                    border-radius: 500000px;

                    a {

                        .galery {
                            position: relative;
                            
                            img {
                                position: absolute;
                            }

                        }
                    }
                }
            }

            h1 {
                font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
                line-height: 1.1;
                margin: 35px 0 24px 0;
                font-weight: 800;
                letter-spacing: -.2rem;
                color: rgba(8,8,8,0.8);
            }

            h2 {
                font-size: 35px;
                line-height: 1.1;
                font-family: 'Proza Libre', sans-serif;
                letter-spacing: 1px;
            }

            button {
                box-sizing: border-box;
                padding: 0 24px;
                height: 50px;
                background: black;
                align-self: center;
                color: white;
                border-radius: 5px;
                font-size: 13px;
                margin: 50px 0 24px 0;
            }
        }
    }

    .options {
        margin: 12px 0 12px 0;
        flex-direction: column;
        width:  100%;
        background-image: url("https://img.freepik.com/premium-vector/blue-watercolor-background-design_1102-2773.jpg");
 
        h2 {
            width: min-content;
            white-space: nowrap;
            text-align: center;
            padding: 4px 24px;
            border-radius: 555px;
            background: orange;
            font-size: 30px;
            color: white;
            font-family: 'Proza Libre', sans-serif;
            letter-spacing: 1px;
        }

        > div {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            width:  100%;
            gap: 12px;

            div {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                height: 450px;
                flex-direction: column;
                height: 380px;
                width:  250px;
                gap:12px;

                div {
                    background: whitesmoke;
                    border-radius: 8px;
                }

                span {
                    text-align: center;
                }
            }
        }
    }

    section:nth-child(1) {

        div {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;

            div {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    section {
        background: white;
        position: relative;
        flex-direction: column;
        text-align: start;
        overflow: hidden;

        span:nth-child(1) {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            height: min-content;
            margin: 0;

            span:nth-child(1) {
                overflow:hidden;
                h2 {
                    text-align: start;
                    height: 100%;
                    white-space: wrap;
                    width: 80%;
    
                    span {
                        color: rgba(100,100,100,1);
                        white-space: wrap;
                    }
                }
            }

            a {
                height: 100%;
                color: blue;
                white-space: nowrap;
            }
        }
      
        .btns {
            box-sizing: border-box;
            display: none;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            width:  100%;
            position: absolute;
            z-index: 35;
            padding: 0 24px;

            button {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                height: 45px;
                width:  45px;
                background: red;
            }
        }

        :hover {

            .btns{
                box-sizing: border-box;
                display: none;
                justify-content: space-between;
                align-items: center;
                height: 45px;
                width:  100%;

                button:nth-child(1) {
                    width: 45px;
                    height: 45px;

                    box-sizing: border-box;
                    display: flex;
                    background: rgba(0,0,0,0.3);
                    align-items: center;
                    border-radius: 50000px;
                    border: 2px solid rgba(255,255,255,0.3);
                }
        
                button:nth-child(2) {
                    width: 45px;
                    height: 45px;
                    box-sizing: border-box;
                    display: flex;
                    background: rgba(0,0,0,0.3);
                    align-items: center;
                    border-radius: 50000px;
          
                    border: 2px solid rgba(255,255,255,0.3);
                }
            }
        }

    .grid {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0);
        overflow: scroll;
        overflow-y: hidden;
        overflow-x: scroll;
        gap: 12px;
        padding: 0;
        margin: 0;

        ::-webkit-scrollbar {
            background: transparent;
        }
        
        ::-webkit-scrollbar:horizontal {
            background: transparent;
            height: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: transparent;
        }

        :hover {

            ::-webkit-scrollbar {
                width: 20px;
            }
        
            ::-webkit-scrollbar:horizontal {
                background: transparent;
                height: 6px;
            }
    
            ::-webkit-scrollbar-thumb {
                background: rgba(0,0,0,0.7);
            }
        }
        
        .item {
            box-sizing: border-box;
            background: rgba(235,235,235,0.4);
            display: flex;
            align-items: center;
            min-width: 250px;
            max-width: 250px;
            height: 400px;
            min-height: 400px;
            flex-direction: column;
            border: 1px solid rgba(235,235,235,0.5);;
            overflow: hidden;
            border-radius: 8px;
            padding: 24px 0 24px 0;
   
            a {
                
                width: 100%;
                height: 100%;
                max-height: 400px;
                margin: 0 0 24px 0;

                :hover {
                    transform: scale(102%);
                }

                div {
                    display: flex;
                    justify-content: center;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    max-height: 400px;

                    img {
                        width: 100%;
                        height: min-content;
                    }
                }
            }

        }
    }
    }

    .banner {
        box-sizing: border-box;
        margin: 12px 0 12px 0;
        background: transparent;
        padding: 0 24px 0 24px;

        picture { 
            background-color: black;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 100%;
            height: calc( 0.20 * calc(100vw - 24px));
            border-radius: 12px;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }

    .category {
        padding: 24px 24px;
        margin: 12px 0 12px 0;
        background-color: white;
        width: 100%;
        flex-direction: column;

        h2 {
            
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

        }

        ul {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px 24px;
            flex-wrap: wrap;

            li {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                flex-direction: column;
                display: flex;
                gap: 12px;
                width: 160px;

                picture {
                    background-color: whitesmoke;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    width: 160px;
                    height: 160px;
                    border-radius: 5465465px;
                    overflow: hidden;
                }

                span {
                    width: min-content;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
            }
        }
        
    }

    .depoiment {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        overflow: hidden;
        padding: 24px 24px;
        margin: 12px 0 12px 0;

        h2 {
         
            text-align: center;
            white-space: nowrap;
        }
    }

    div:nth-child(6), .details {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        overflow: hidden;
        padding: 24px 24px;
        margin: 12px 0 12px 0;

        h2 {
        
            text-align: center;
            white-space: nowrap;
        }

        ul {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: center;
            background: transparent;
            overflow: hidden;
            padding: 8px;
            gap: 24px;
            flex-wrap: wrap;

            li {
                box-sizing: border-box;
                width: 40%;

                details {
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: transparent;
                    overflow: hidden;
                    padding: 8px;
                    height: min-content; 
       
                    font-family: 'Proza Libre', sans-serif;

                    summary {
                        text-align: center;
                        font-family: 'Proza Libre', sans-serif;
                        font-size: 20px;
                     
                        white-space: nowrap;
                        margin: 0 0 16px 0;
                        font-weight: 400;
                    }

                    p {
                        font-family: 'Proza Libre', sans-serif;
                        font-size: 16px;
                        font-weight: 300;
                        color: rgba(45,45,45,0.9);
                        line-height: 24px;
                    }

                    summary:focus {
               
        
                    }
               
                }
            
         
            }
        }
    }

    section:nth-child(10) {
        align-items: flex-start;
        gap: 24px;
        padding: 24px;


        .about {
            margin: 0;
            padding: 0;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            width: 45%;  
            height: min-content;


            h2 {
          
            }

            p {
                color: rgba(45,45,45,0.9);

            }
        }

    }

    @media screen and (max-width: 400) and (orientation: landscape) {
     
    }

    @media screen and (max-width: 835px) and (orientation: landscape) {
        div:nth-child(6), .details {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            overflow: hidden;
            padding: 24px;
            margin: 8px 0 8px 0;
    
            ul {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: center;
                background: transparent;
                overflow: hidden;
                padding: 8px;
                flex-direction: column;
                
                li {
                    box-sizing: border-box;
                    width: 100%;
    
                    details {
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        background: transparent;
                        overflow: hidden;
                        padding: 8px;
                        height: min-content; 
    
                        summary {
                            text-align: center;
                            font-family: 'Proza Libre', sans-serif;
                            font-size: 28px;
                            text-weidth: 700;
                            white-space: nowrap;
                            margin: 0 0 16px 0;
                        }
    
                        summary:focus {
                   
            
                        }
                   
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1000) and (orientation: landscape) {
     
    }

    @media screen and (max-width: 1200) and (orientation: landscape) {
    
    }
`

export default Div