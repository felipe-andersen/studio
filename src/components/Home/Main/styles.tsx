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

        background: rgba(45,100,110,0);
        overflow: hidden;

        background-image: url("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg");

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
                }

            }

       

            h1 {
                font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
                line-height: 1.1;
                margin: 35px 0 24px 0;
                font-weight: 800;
                letter-spacing: -.2rem;
                font-family: 'RocknRoll One', sans-serif;
                color: rgba(8,8,8,0.8);
            }

            h2 {
                font-size: 35px;
                line-height: 1.1;
                font-family: 'RocknRoll One', sans-serif;
            
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

    section {
        background: white;
        padding: 24px 24px;

    h2 {
        font-size: 24px;
        text-weidth: 700;
        margin: 0 0 24px 0;

    }

    .grid {
        box-sizing: border-box;
        width: 100%;
        display: flex;
    
        align-items: center;
        background: rgba(0,0,0,0);
        overflow: scroll;
       

        gap: 12px;

        ::-webkit-scrollbar { 
            display: none;
          }

        button:nth-child(1) {
            width: 45px;
            height: 45px;
            position: absolute;
            box-sizing: border-box;
            display: flex;
            background: rgba(220,220,220,1);
            align-items: center;
            border-radius: 50000px;
            border: 2px solid white;

        }

        button:nth-child(2) {
            width: 45px;
            height: 45px;
            position: absolute;
            box-sizing: border-box;
            display: flex;
            background: rgba(220,220,220,1);
            align-items: center;
            border-radius: 50000px;
            margin-left: calc(100% - 93px); 
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

                div {
                    width: 100%;
                    height: 100%;
                    max-height: 400px;

                    img {
                        width: 100%;
                     
        
                    }

                }

            }

        }
    }
    }

    


`

export default Div