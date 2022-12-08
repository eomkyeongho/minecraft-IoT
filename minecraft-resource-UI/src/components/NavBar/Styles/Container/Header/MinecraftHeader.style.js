import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: relative;
    max-width: 100%;
    margin: 0 auto;
`

export const Content = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    color: white;
    background: rgb(0,0,0);
    background: rgb(0,0,0,0.5);
    width: 100%;
    height: 100%;
    padding: 20px;

`

export const HeaderImg = styled.img`
    vertical-align: middle;
    width: 100%;
`

export const ContentH2 = styled.h2`
    font-size: 7rem;
    font-family: 'Signika Negative', sans-serif;
`