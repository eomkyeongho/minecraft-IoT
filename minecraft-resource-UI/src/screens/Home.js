import React from 'react'
// import { Container } from '../components/NavBar/Styles/Container/Container.style'
// import { Header, MainHeader } from '../components/NavBar/Styles/Container/Header/Header.style'
import { Content, ContentH2, HeaderContainer, HeaderImg } from '../components/NavBar/Styles/Container/Header/MinecraftHeader.style'
import header from '../assets/images/background_1.png'
import dummy from "./data.json";
import Block from "./Block";
import './Block.css';
import NavBars from '../components/NavBar/NavBar'
// import { CDBFooter } from 'cdbreact';
import { Footer } from '../components/NavBar/Footers/Footer'
import { CardContainer } from '../components/NavBar/Styles/Cards/Card.style'
import MainNavBar from '../components/NavBar/LinkNavBar'
import { useTable, useGlobalFilter } from "react-table";
import { useState } from 'react';
// import Search from '../components/NavBar/SearchBar';



function BlockList({props}) {	
  return (
    <div className="Table">
      <div><p> </p></div>
      <MainNavBar />
      <CardContainer>
      <table className="table-css">
        <tbody >
          {props.map((Sensor) => (
            <tr key={Sensor.num} className="table-css">
              <Block Sensor={Sensor.num} List={Sensor}/>	
            </tr>
          ))}
        </tbody>
      </table>
      </CardContainer>
    </div>
    
  );
}

const Home = () => {
  const blockList = [
    {
      "id": "block1",
      "num": "1",
      "sensor": "Sensor",
      "type": "Stone",
      "isDone": false
    },
    {
      "id": "block2",
      "num": "2",
      "sensor": "Sensor",
      "type": "Grass",
      "isDone": false
    },
    {
      "id": "block3",
      "num": "2",
      "sensor": "Sensor",
      "type": "Grass",
      "isDone": false
    },
    {
      "id": "block4",
      "num": "4",
      "sensor": "Sensor",
      "type": "Grass",
      "isDone": false
    }
    
  ]
  const sensorList = [...blockList];
  const [list, setList] = useState(sensorList);
  return (
    <>
      <NavBars className="nav_css"/>
      <HeaderContainer>
        <HeaderImg src={header} alt="header" />
        <Content>
          <ContentH2>
            Minecraft for IoT
          </ContentH2>
        </Content>
      </HeaderContainer>
      <BlockList props={list} />
      <Footer />
    </>
  

  )
}

export default Home