import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid whitesmoke;
    font-size: 14px;


    div:nth-child(1) {
  
        box-sizing: border-box;
        display: flex;
        
        align-items: center;
        background: transparent;


    }
    div:nth-child(2) {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: transparent;

        a {
            margin: 0 12px;
        }
    }

    div:nth-child(3) {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;
    }

    i {
        
    }



`

export default Div