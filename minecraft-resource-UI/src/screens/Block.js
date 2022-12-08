import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import BlockImg from './blockImg';
import './Block.css';
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dummy from "./blocks.json";

function Block({Sensor, List}) {
  const block=[...dummy.block]
  
  const title = List.id
  const indx = Number(Sensor) - 1;
  let [id, setId] =useState(Sensor);
  const [imgId, setImgId] = useState(List);
  const [index, newIndex] = useState(indx);
  return (
    
    <Card>
      <Card.Body>
        <Container >
          <Row xs={1} md={2}>
            <Col className="block1">
              <Card.Title>
                <p className="MyFont">{title}</p>
                <BlockImg props={id}/>
              </Card.Title>
            </Col>
            <Col className="block2">
              <Card.Text>
                <p className="MyFont">block: { imgId.type}</p> 
                <p className="MyFont">Sensor: { imgId.sensor}</p>
                <p className="MySmallFont">{block[index].role}</p>
              </Card.Text>
            </Col>
            <Col className="block3">  
              <ButtonGroup>
                  <DropdownButton as={ButtonGroup} title={imgId.type} id="bg-nested-dropdown">
                    <div className="scroll">
                      <Container >
                        <Row >
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="1" onClick={()=>{
                              setId("1");
                              setImgId({
                                "id": {title},
                                "num": "1",
                                "sensor": "Sensor",
                                "type": "Stone",
                                "isDone": false
                              });
                              newIndex(0);

                            }}><BlockImg props={"1"}/> Stone</Dropdown.Item>
                          </Col>
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="2" onClick={()=>{
                              setId("2");
                              setImgId({
                                "id": {title},
                                "num": "2",
                                "sensor": "Sensor",
                                "type": "Grass",
                                "isDone": false
                              });
                              newIndex(1);
                            }}><BlockImg props={"2"}/> Grass</Dropdown.Item>
                          </Col>
                          <Col> 
                            <Dropdown.Item className="small_block" eventKey="3" onClick={()=>{
                              setId("3");
                              setImgId({
                                "id": {title},
                                "num": "3",
                                "sensor": "Sensor",
                                "type": "Dirt",
                                "isDone": false
                              });
                              newIndex(2);
                            }}><BlockImg props={"3"}/> Dirt</Dropdown.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="4" onClick={()=>{
                              setId("4");
                              setImgId({
                                "id": {title},
                                "num": "4",
                                "sensor": "Sensor",
                                "type": "Cobblestone",
                                "isDone": false
                              });
                              newIndex(3);
                            }}><BlockImg props={"4"}/> Cobblestone</Dropdown.Item>
                          </Col>
                          <Col> 
                            <Dropdown.Item className="small_block" eventKey="5" onClick={()=>{
                              setId("5");
                              setImgId({
                                "id": {title},
                                "num": "5",
                                "sensor": "Sensor",
                                "type": "Wooden Plank",
                                "isDone": false
                              });
                              newIndex(4);
                            }}><BlockImg props={"5"}/> Wooden Plank</Dropdown.Item>
                          </Col>
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="7" onClick={()=>{
                              setId("7");
                              setImgId({
                                "id": {title},
                                "num": "7",
                                "sensor": "Sensor",
                                "type": "Bedrock",
                                "isDone": false
                              });
                              newIndex(5);
                            }}><BlockImg props={"7"}/> Bedrock</Dropdown.Item>  
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="12" onClick={()=>{
                              setId("12");
                              setImgId({
                                "id": {title},
                                "num": "12",
                                "sensor": "Sensor",
                                "type": "Sand",
                                "isDone": false
                              });
                              newIndex(6);
                            }}><BlockImg props={"12"}/> Sand</Dropdown.Item>
                          </Col> 
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="13" onClick={()=>{
                              setId("13");
                              setImgId({
                                "id": {title},
                                "num": "13",
                                "sensor": "Sensor",
                                "type": "Gravel",
                                "isDone": false
                              });
                              newIndex(7);
                            }}><BlockImg props={"13"}/> Gravel</Dropdown.Item>
                          </Col>
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="14" onClick={()=>{
                              setId("14");
                              setImgId({
                                "id": {title},
                                "num": "14",
                                "sensor": "Sensor",
                                "type": "Gold Ore",
                                "isDone": false
                              });
                              newIndex(8);
                            }}><BlockImg props={"14"}/> Gold Ore</Dropdown.Item>
                          </Col>
                        </Row> 
                          <Col>
                            <Dropdown.Item className="small_block" eventKey="17" onClick={()=>{
                              setId("17");
                              setImgId({
                                "id": {title},
                                "num": "17",
                                "sensor": "Sensor",
                                "type": "Wood",
                                "isDone": false
                              });
                              newIndex(9);
                            }}><BlockImg props={"17"}/> Wood</Dropdown.Item>
                          </Col>
                      </Container>
                    </div>
                  </DropdownButton>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>

  );
}

  export default Block;