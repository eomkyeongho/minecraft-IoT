import React from 'react'
// import { Container } from '../components/NavBar/Styles/Container/Container.style'
// import { Header, MainHeader } from '../components/NavBar/Styles/Container/Header/Header.style'
import { Content, ContentH2, HeaderContainer, HeaderImg } from '../components/NavBar/Styles/Container/Header/MinecraftHeader.style'
import header from '../assets/images/background_1.png'
import dummy from "./data.json";
import './Block.css';
import NavBars from '../components/NavBar/NavBar'
import { Footer } from '../components/NavBar/Footers/Footer'
import { CardContainer } from '../components/NavBar/Styles/Cards/Card.style'
import MainNavBar from '../components/NavBar/LinkNavBar'
import Container from 'react-bootstrap/Container';
import developer from './Img/developer.png'
import student from './Img/student.jpg'
import money from './Img/money.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlockList() {	
  return (
    <div className="Table">
        <div><p> </p></div>
        <MainNavBar />
        <table className="table-css">
        <tbody className='Board' >
            <h1 className='KoreanFont' >저희 서비스를 소개합니다!</h1>
            <Container >
                <Row className='interval'>
                    <Col>
                        <div>
                            <img className='bigSize' src={student} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div >
                            <p className='KoreanFont1'>학생들에게 더 흥미롭고 , 새로운 교육자료로 사용될 수 있습니다.</p>
                            <p className='KoreanFont2'> 기존의 마인크래프트 교육에디션은 코딩을 사용자에게 작성할 수 있도록 하는 서비스를 제공 하였더라면, 이 서비스에서는 IoT와 접목시켜 새롭고 더 직관적으로 이해할 수 있는 교육을 제공할 수 있습니다.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='interval'>
                    <Col>
                        <div>
                        <p className='KoreanFont1'>개발자에게 기존에 없는 게임 개발 기반의 IoT를 응용시킨 자료로써 사용될 수 있습니다.</p>
                        <p className='KoreanFont2'> 현재, IoT와 게임을 접목시킨 사례는 VR기기 외에 상당히 한정적입니다. 이 서비스는 IoT와 게임을 다른 시점에서 접목시켜 새로운 응용 사례가 될 수 있습니다.</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img className='smallSize' src={developer} alt="" />
                        </div>
                    </Col>
                
                    
                </Row>
                <Row className='interval'>
                    <Col>
                        <div>
                            <img className='smallSize' src={money} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                        <p className='KoreanFont1'>경제적으로 더 나은 서비스를 제공할 수 있습니다.</p>
                        <p className='KoreanFont2'> IoT와 게임을 접목시킨 사례 중 하나인 VR기기는 10만원에서 200만원까지 가격대가 다양합니다. 현재 사용자들이 많이 사용하는 기기들은 대게 4-50만원에 판매되고 있으며, 그 중 VR기기는 다소 부담이 되는 가격일 수 있다는 단점이 있습니다. 저희 서비스는 타 서비스에 비해 경제적으로 훨씬 더 저렴하게 제작하고 제공할 수 있습니다. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </tbody>
      </table>
    </div>
    
  );
}

const Intro = () => {
  let sensorList = [...dummy.Sensor];

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
      <BlockList />
      <Footer />
    </>
  

  )
}

export default Intro