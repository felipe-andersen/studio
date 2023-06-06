import styled from "styled-components"

const Div = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    background: transparent;

    div:nth-child(1) {
        box-sizing: border-box;
        width: 100%;
        height: 68vh;
        display: flex;
        justify-content: center;

        background: transparent;
        overflow: hidden;

        

        div:nth-child(1) {
            box-sizing: border-box;
            width: 70%;
         
            display: flex;
            align-items: center;
            text-align: center;
            flex-direction: column;
            background: rgba(45,100,110,0);
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
        box-sizing: border-box;
        display: flex;

        flex-direction: column;
        align-items: center;
        width:  100%;
        background-image: url("https://img.freepik.com/premium-vector/blue-watercolor-background-design_1102-2773.jpg");
        padding: 24px;

        h2 {
            width: min-content;
            white-space: nowrap;
            text-align: center;
            padding: 4px 24px;
            border-radius: 555px;
            background: orange;
            font-size: 30px;
            color: white;
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
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

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
        box-sizing: border-box;
        background: white;
        padding: 24px 24px;
        margin: 8px 0 8px 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        

        h2 {
            font-family: 'Sen', sans-serif;
            font-family: 'Proza Libre', sans-serif;
            font-size: 40px;
            font-weight: 600;
            text-weidth: 700;
            margin: 0 0 24px 0;
            color: rgba(40,40,40,1);
            width:  100%;
            /*text-align: center;*/

            span {
                color: rgba(100,100,100,1);
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
                display: flex;
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
        padding: 24px 0;
  
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
            background: rgba(0,0,0,0);
            display: flex;
            align-items: center;
            min-width: 250px;
            max-width: 250px;
            height: 350px;
            max-height: 400px;
            flex-direction: column;
   
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
        padding: 24px; 
        
        div { 
            background-color: black;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 100%;
            height: 250px;
            border-radius: 12px;
        }
    }

    .category {
        padding: 24px;
        margin: 8px 0;
        background-color: white;

        h2 {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0 0 24px 0;
        }

        ul {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;

            li {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                flex-direction: column;
                display: flex;
                gap: 12px;
                width: 120px;

                picture {
                    background-color: whitesmoke;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    width: 120px;
                    height: 120px;
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

`

export default Div