import styled from 'styled-components'



export const StyledMain = styled.main`
    max-width: 1270px;
    margin: 0 auto;
    min-height: 100%;
    padding: 0 15px;

    & h1 {
        margin-top: 15px;
        text-align: center;
    }
`
export const StyledProducts = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;
`
export const StyledProduct = styled.div`
    width: 250px;
    height: 360px;
    background: #BDBDD7;
    text-align: center;
    display: flex;
    flex-direction:column;
    border-radius: 18px;
    transition: transform 250ms ease-in-out;

    &:hover {
        transform: scale(1.02) ;
    }
    & div {
        height: 220px;
        position: relative;
    }
    & img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        border-radius: 18px 18px 0 0;
    }

    p {
        font-size: 24px;
        margin-top: 10px;
    }

    span{
        margin-top: 10px;
        font-size: 18px;
    }

    button {
        width: 80%;
        padding: 7px 5px;
        border: none;
        margin: 0 auto ;
        background: #7045AF;
        margin-top: auto;
        margin-bottom: 10px;
        border-radius: 18px;
        font-size: 18px;
        cursor: pointer;
        transition: var(--transition-delay);

        &:hover{
            background: #5927a3;
        }
    }

    @media screen and (max-width: 578px){
        width: 80%;
        height: 450px;

        & div {
        height: 280px;
    }
    }
`