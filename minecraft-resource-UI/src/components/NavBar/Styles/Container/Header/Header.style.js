import React from 'react'
import styled from 'styled-components'

export const Header = styled.section`
    width: 100%;
    height: 55vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        max-width: 100%;
        min-height: 40px;
        overflow: hidden;
        display: inline-block;
        transform: scaleX(1.5);
        background-position: right top;
        background-size: 100vw 200px;
        background-color: #282c34;
    }
`
export const MainNav = styled.div`
    /* padding-right: 50%;
    padding-left: 50%; */
    align-items: center;
    display: flex;
    justify-content:center; 
`


export const MainHeader = styled.div`
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 500px;
    background-color: transparent;
`
