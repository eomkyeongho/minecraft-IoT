// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';

// function Header(props){
//   console.log('props', props, props.title)
//   return <header>
//     <h1><a href="/" onClick={(event) => { // function() == () =>
//       event.preventDefault()
//       props.onChangeMode()
//     }}>{props.title}</a></h1>
//   </header>
// }

// function Nav(props){
//   const lis =[]
//   for(let i=0;i<props.topics.length;i++){
//     let t = props.topics[i]
//     lis.push(<li key={t.id}>
//       <a id ={t.id} href={'/read/'+t.id} onClick={event => {
//         event.preventDefault()
//         props.onChangeMode(Number(event.target.id))
//       }}>{t.title}</a>
//       </li>)
//   }
//   return <nav>
//     <ol>
//       {lis}
//     </ol>
//   </nav>
// }

// function Article(props){
//   return <article>
//     <h2>{props.title}</h2>
//     {props.body}  
//   </article>
// }

// function Create(props){
//   return <article>
//     <h2>Create</h2>
//     <form onSubmit={event =>{
//       event.preventDefault()
//       const title = event.target.title.value
//       const body =event.target.body.value
//       props.onCreate(title, body)
//     }}>
//       <p><input type='text' name='title' placeholder='title'/></p>
//       <p><textarea name='body' placeholder='body'></textarea></p>
//       <p><input type='submit' value='Create'></input></p>
//     </form>
//   </article>
// }

// function Update(props){
//   const [title, setTitle] = useState(props.title)
//   const [body, setBody] = useState(props.body)
//   return <article>
//     <h2>Update</h2>
//     <form onSubmit={event =>{
//       event.preventDefault()
//       const title = event.target.title.value
//       const body =event.target.body.value
//       props.onUpdate(title, body)
//     }}>
//       <p><input type='text' name='title' placeholder='title' value={title} onChange={event=>{
//         setTitle(event.target.value)
//       }}/></p>
//       <p><textarea name='body' placeholder='body' value={body} onChange={event=>{
//         setBody(event.target.value)
//       }}></textarea></p>
//       <p><input type='submit' value='Updtae'></input></p>
//     </form>
//   </article>
// }

// function App() {
//   const [mode, setMode] =useState("WELCOME");
//   const [id, setId] = useState(null)
//   const [nextId, setNextId] = useState(4)
//   const [topics, setTopics] = useState([
//     {id: 1, title:'html', body: "html is ..."},
//     {id: 2, title:'css', body: "css is ..."},
//     {id: 3, title:'javascript', body: "javascript is ..."}
//   ])
//   let content = null
//   let contextControl = null
//   if(mode=="WELCOME"){
//     content = <Article title="Welcome" body="Hello, WEB"></Article>
//   }
//   else if(mode == "READ"){
//     let title, body = null;
//     for(let i = 0; i < topics.length; i++){
//       if(topics[i].id === id){
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = <Article title={title} body={body}></Article>
//     contextControl = <>
//       <li>
//         <a href={'/update' + id} onClick={event => {
//           event.preventDefault()
//           setMode('UPDATE')
//         }}>Update</a>
//       </li>
//       <li>
//         <input type='button' value='Delete' onClick={()=>{
//           const newTopics =[]
//           for(let i=0; i< topics.length; i++){
//             if(topics[i].id !== id){
//               newTopics.push(topics[i])
//             }
//           }
//           setTopics(newTopics)
//           setMode('WELCOME')
//         }}/>
//       </li>
//     </>
//   }
//   else if(mode == "CREATE"){
//     content = <Create onCreate={(_title, _body)=>{
//       const newTopic ={id:nextId, title:_title, body: _body}
//       const newTopics = [...topics]
//       newTopics.push(newTopic)
//       setTopics(newTopics)
//       setMode('READ')
//       setId(nextId)
//       setNextId(nextId + 1)
//     }}></Create>
//   }
//   else if(mode=='UPDATE'){
//     let title, body = null;
//     for(let i = 0; i < topics.length; i++){
//       if(topics[i].id === id){
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = <Update title={title} body={body} onUpdate={(title, body) => {
//       const newTopics =[...topics]
//       const updatedTopic = {id:id, title:title, body:body}
//       for(let i = 0; i < newTopics.length; i++){
//         if(newTopics[i].id === id){
//           newTopics[i] = updatedTopic
//           break;
//         }
//       }
//       setTopics(newTopics)
//       setMode('READ')
//     }}></Update>
//   }
//   return (
//     <div>
//       <Header title="WEB" onChangeMode = {() => {
//         setMode("WELCOME")
//       }}></Header>
//       <Nav topics={topics} onChangeMode={(_id)=> {
//         setMode('READ')
//         setId(_id)
//       }}></Nav>
//       {content}
//       <ul>
//         <li>
//           <a href='/create' onClick={event => {
//             event.preventDefault()
//             setMode('CREATE')
//           }}>Create</a>
//         </li>
//         {contextControl}
//       </ul>
//     </div>
//   );
// }
// import {Routes, Route, Link} from "react-router-dom"
// import Home from "./components/UI/Home"
// import About from "./components/UI/About"
/*eslint-disable*/
import React, {useState, Component} from "react";
import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { CDBFooter } from 'cdbreact';
// import Block from "./Block";
// import dummy from "./data.json";
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Intro from "./screens/Intro";
// function MydModalWithGrid(props) {
//   return (
//     <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Using Grid in Modal
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="show-grid">
//         <Container>
//           <Row>
//             <Col xs={12} md={8}>
//               .col-xs-12 .col-md-8
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//           </Row>

//           <Row>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//             <Col xs={6} md={4}>
//               .col-xs-6 .col-md-4
//             </Col>
//           </Row>
//         </Container>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
// import Card from 'react-bootstrap/Card';
// import axios from "axios"; 
// import Modal from 'react-modal';
// import data from './blocks.json';
// import { BlockEdition } from "./Blockedition";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// function BlockList({props}) {	
//   return (
//     <div className="Table">
//       <table className="table-css">
//         <tbody >
//           {props.map((Sensor) => (
//             <tr key={Sensor.id} className="table-css">
//               <Block Sensor={Sensor.day} List={Sensor}/>	
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
    
   

//   );
// }

function App() {
  // const [modalShow, setModalShow] = useState(false);
  // let sensorList = [...dummy.Sensor];
  // const [bList, setBList] = useState(sensorList)
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Intro" element = {<Intro />} />
      </Routes>
    </Router>
  );
}
export default App;