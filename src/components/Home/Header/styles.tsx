import styled from "styled-components"

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap');
    <style>
    @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

    width: 100%;
    box-sizing: border-box;
    display: flex;
    border-bottom: none; //1px solid whitesmoke;
    font-size: 16px;
    background: white;
    color: black;
    font-family: 'RocknRoll One', sans-serif;
    flex-direction: column;

    div:nth-child(1) {
        background: rgba(235, 235, 235, 1);
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        padding: 0 24px;
    }

    div:nth-child(2) {
        box-sizing: border-box;
        padding: 0 24px;
        display: flex;
        height: 108px;
        justify-content: space-between;
    
        align-items: center;
        background: transparent;
            width: 100%;
        border-bottom: 1px solid rgba(235, 235, 235, 1);    


        .size {
            box-sizing: border-box;
            padding: 0 24px;
            height: 50px;
            background: rgba(255, 210, 156);
            align-self: center;
            color: white;
            border-radius: 5px;
            font-size: 13px;
            margin: 0px 24px 0px 24px;
            white-space: nowrap;

        }

        div:nth-child(1) {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: transparent;

                i {
                    width: 250px;
                }
        }

        form {
        box-sizing: border-box;
        padding: 4px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        border: 1px solid rgba(235, 235, 235, 1);
        height: 40px;
        background: white;

             i {
                border: 1px solid rgba(235, 235, 235, 1);
            background: white;
            border-radius: 5px;
            height: 100%;

                svg {
                     transform: scale(70%);
                }
             }

            input {
            height: 100%;
            width: 400px;
            outline: transparent;
            margin: 0 0 0 4px;
           
            }
        }

        div:nth-child(2) {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: transparent;
        white-space: nowrap;

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
    }

    div:nth-child(3) {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        padding: 0 24px;

        a {
            justify-content: center;
            align-items: center;
            dispĺay: flex;
            height: 100%;
            background: blue;
            border-bottom: 2px solid red;

            :hover {

                span {
                    display: flex;
                    width:  150px;
                    height: 150px;
                    background: white;
                    position: absolute;
                    border-radius: 12px;
                }
            }

            span {
                display: none;
            }
        }
    }
`

export default Div