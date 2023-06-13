import styled from "styled-components"

export const Div = styled.div`
    width: 100%;
    max-width: 1500px;
    box-sizing: border-box;
    display: flex;

    font-size: 16px;

    color: black;
    padding: 0 0;
    flex-direction: column;

    @media screen and (max-width: 835px) {
        padding: 0 0px;


        h2, .h2 {
            font-size: calc(1.5 * 16px);  
        }
    }
   
`