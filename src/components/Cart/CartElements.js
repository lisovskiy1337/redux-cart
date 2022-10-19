import styled from 'styled-components'


export const StyledCartContainer = styled.div`
    position: fixed;
    top: 80px;
    right: 10%;
    width: 30%;
    min-height: 150px;
    max-height: 500px;
    background: #916BBF;
    border-radius: 16px;
    padding: 15px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1210px){
        width: 45%;
    }

    @media screen and (max-width: 992px){
        width: 55%;
    }

    @media screen and (max-width: 768px){
        width: 70%;
    }

    @media screen and (max-width: 580px){
        width: 100%;
        right:0;
    }

    & h3 {
        color: var(--text-color);
        line-height: 140%;
        letter-spacing: 0.5px;
        font-size: 18px;
        margin-bottom: 15px;
        text-align: center;
    }
`


export const StyledCartList = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow:hidden; 
    overflow-y:scroll;

    
`

export const StyledCartItem = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 15px;


    & img {
        max-width: 100px;
        border-radius: 8px;
        margin-right: 15px;
    }

    & div {
        flex: 1;

        & h4 {
            font-size: 16px;
            font-weight: 500;
        }

        & p {
            font-size: 14px;
            margin: 5px 0;
        }

        & div {
            display: flex;
            margin-top: 5px;

            & span {
                margin-right: 5px;
            }
            
            & button.quantity--change {
                font-size: 14px;
                padding: 0 10px;
                background: transparent;
                border: none;
                cursor: pointer;
            }

            & p {
                margin: 0;
            }

            & button.remove--btn{
                font-size: 14px;
                text-decoration: underline;
                background: transparent;
                border: none;
                margin-left: auto;
                cursor: pointer;
                margin-right: 7px;
            }
        }
    } 



`

export const StyledCartSubtotal = styled.div`
    margin-top: auto;
    border-top: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
        margin-top: 15px;
        font-weight: 500;
        font-size: 18px;
    }


`

export const StyledEmptyCart = styled.p`
    font-size: 20px;
    text-align: center;

`