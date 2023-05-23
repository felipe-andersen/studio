import styled from "styled-components"

const Div = styled.div`
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    background: transparent;

    picture {
        box-sizing: border-box;
        width: 100%;
        max-height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    button {
        box-sizing: border-box;
        padding: 0 24px;
        height: 50px;

        background: black;
        align-self: center;
        color: white;
        border-radius: 5px;
        font-size: 14px;
    }

    h2 {
        font-size: 24px;
        text-weidth: 700;
    }

    .grid {
        box-sizing: border-box;
        width: 100%;
        display: flex;

        align-items: center;
        background: transparent;
      
        padding: 12px;

        .item {
            box-sizing: border-box;
            background: transparent;
            display: flex;
            align-items: center;
            width: 250px;
            flex-direction: column;
            padding: 12px;

            a {

            }

        
        }
      

    }

    


`

export default Div