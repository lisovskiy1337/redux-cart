import styled from 'styled-components'



export const StyledHeader = styled.header `
    padding: 20px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: var(--bkg-color);
    z-index: 999;
    transition: var(--transition-delay);
`

export const StyledDarkModeBtn = styled.button `
    width: 72px;
    height: 32px;
    background: #202040;
    border-radius: 36px;
    border: none;
    position: relative;
    cursor: pointer;
`

export const StyledDarkModeCircle = styled.span`
    height: 32px;
    width: 32px;
    background: #602080;
    border-radius: 50%; 
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: ${props => props.isDarkMode ? "0" : "40px"}; 
    transition: right 250ms ease-in-out;

    & img {
        width: 26px;
        height: 26px;
        transition: opacity 250ms ease-in-out;
    }
`

export const StyledCart = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    position: relative;
    cursor: pointer;
`

export const StyledCartCircle = styled.span`
    position: absolute;
    height: 25px;
    width: 25px;
    background: #602080;
    border-radius: 50%;
    top: -10px;
    left: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #fff;
    font-weight: bold;
`

