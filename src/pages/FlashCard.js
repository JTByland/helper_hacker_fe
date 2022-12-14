import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupCard from "../components/GroupCard";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import CardListItem from "../components/CardListItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./styles.css";
import axios from "axios";

var cards = [
  {
    question: "Big O Notation",
    answer:
      "Big O Notation is a tool used to describe the time complexity of algorithms. It calculates the time taken to run an algorithm as the input grows",
  },
  {
    question: "OOP",
    answer:
      "Object-oriented programming (OOP) is a style of programming characterized by the identification of classes of objects closely linked with the methods",
  },
  {
    question: "Compiler",
    answer:
      "A compiler is a special program that translates a programming language's source code into machine code, bytecode or another programming language.",
  },
  {
    number: 3,
    question: "JVM",
    answer:
      "The Java virtual machine manages application memory and provides a portable execution environment for Java-based applications.",
  },
  {
    question: "Big O Notation",
    answer:
      "Big O Notation is a tool used to describe the time complexity of algorithms. It calculates the time taken to run an algorithm as the input grows",
  },
  {
    question: "OOP",
    answer:
      "Object-oriented programming (OOP) is a style of programming characterized by the identification of classes of objects closely linked with the methods",
  },
  {
    question: "Compiler",
    answer:
      "A compiler is a special program that translates a programming language's source code into machine code, bytecode or another programming language.",
  },
  {
    question: "JVM",
    answer:
      "The Java virtual machine manages application memory and provides a portable execution environment for Java-based applications.",
  },
];

// const allCardsURL = "https://hub-project.onrender.com/api/v1/cards";

// var temp = {
//   title: "",
//   question: "",
//   answer: "",
//   group_name: "a group",
// }

const FlashCard = () => {
  const location = useLocation();
  const { groupName } = location.state; // use for axios get
  const CARD_URL = "/api/v1/cards";
  const [cardsQuery, setCards] = React.useState(null);
  const getAllCards = async () => {
    try {
      const { data } = await axios.post(`${CARD_URL}/getAllCards`, {
        group_name: groupName,
      });
      setCards(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllCards();
  }, []);
  // React.useEffect(() => {
  //   axios.get(allCardsURL, ).then((response) => {
  //     setCards(response.data);
  //   });
  // }, []);
  // const groupName = location.state

  const func = (i) => {
    setI(i);
    setFlip(i < end - 1 && flip ? !flip : flip);
  };

  const question = {
    paddingTop: "170px",
    fontSize: "40px",
  };
  const answer = {
    paddingTop: "170px",
    fontSize: "20px",
  };
  const end = cards.length;
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);

  if (cardsQuery == null) 
    return <div>loading...</div>

  // if ()

  return (
    <div className="d-flex justify-content-center">
      {!cardsQuery.nb ? (
        <div >
          <div className="page d-flex justify-content-center m-5" style={{ fontSize: '40px'}} >There are no cards</div>
          <div className="page d-flex justify-content-center m-5">
            <Button primary className="page d-flex justify-content-center m-5">
              <Link
                to="/add-card"
                state={{ groupName: groupName }}
                style={{ color: "#FFFFFF", textDecoration: "none" }}
              >
                Add Card
              </Link>
            </Button>
          </div>
          
        </div>
       
      ) : (
        <Container>
          {/* <div>{cardsQuery.cards}</div> */}
          <Row>
            <Col sm={7}>
              <Card style={{ height: "75%" }}>
                <Card.Body>
                  <Card.Title>{groupName} Flashcards</Card.Title>
                  <div className="d-flex align-items-center flex-column">
                    <div className="cards">
                      <div className="content">
                        <div className="front">{cardsQuery.cards[i].question}</div>
                        <div className="back">
                          <div className="back-content">{cardsQuery.cards[i].answer}</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <div className="sml">
                        <Button
                          style={{ color: "#F2831A", background: "white" }}
                          onClick={() => {
                            setI(i - (i == 0 ? 0 : 1));
                            setFlip(i < end - 1 && flip ? !flip : flip);
                          }}
                          primary
                        >
                          Prev
                        </Button>
                      </div>
                      <div className="sml">
                        <Button
                          onClick={() => {
                            setI(i + (i < end - 1 ? 1 : 0));
                            setFlip(i < end - 1 && flip ? !flip : flip);
                          }}
                          primary
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* <Card.Title>
                    MAIN FLASHCARD
                  </Card.Title>{" "} */}

                  {/* <div style={ flip ? answer : question }>{flip ? cards[i].answer: cards[i].question}</div> */}
                </Card.Body>
              </Card>
            </Col>

            <Col sm={5}>
              <div
                className="m-1 overflow-auto card-list"
                style={{ minHeight: "35rem", maxHeight: "35rem", overflow: "auto" }}
              >
                {cardsQuery.cards.map((card, index) => (
                  <CardListItem
                    key={index}
                    groupname={card.question}
                    number={index}
                    func={func}
                  />
                ))}
              </div>
              <Button primary>
                <Link
                  to="/add-card"
                  state={{ groupName: groupName }}
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                >
                  Add Card
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      )}

    </div>
  );
};

export default FlashCard;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#F2831A" : "white")};
  color: ${(props) => (props.primary ? "white" : "#F2831A")};

  font-size: 1.5em;
  margin: 2em;
  padding: 0.25em 2em;
  border: 2px solid #F2831A;
  border-radius: 10px;
  position: right:200px; top:400px;
`;

const ButtonStyle = styled.div`
  // position: absolute;
  // left: 140px;
  // top: 400px;
`;
