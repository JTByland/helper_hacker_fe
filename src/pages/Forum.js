import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../components/Post";
import GroupCard from "../components/GroupCard";
import PostBox from "../components/PostBox";
import styled from "styled-components";
import { useState } from "react";
import { PROD_ROOT } from "../url";
import userIcon from "../images/user.png";
import "./styles.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useEffect } from "react";
var groups = [
  { groupname: "All Groups" },
  { groupname: "CS 2222" },
  { groupname: "Senior Project" },
  { groupname: "SE 4444.01" },
  { groupname: "group 6" },
  { groupname: "group 7" },
  { groupname: "group 8" },
];

var posts = [
  {
    name: "Jeffrey Byland",
    username: "@jland",
    message: "What day is the exam for section 501?",
    date: "05-01-22",
    image: userIcon,
    numHearts: 5,
    numQuestions: 3,
    numComments: 2,
    comments: [
      {
        name: "Nguyen Tran",
        username: "@nguyen",
        message: "October 25th in the Testing Center.",
        image: userIcon,
      },
      {
        name: "Jon Doe",
        username: "@jondoe",
        message: "Theres a test?",
        image: userIcon,
      },
    ],
  },
  {
    name: "Jessica Truong",
    username: "@j3s",
    message: "How is the UI implmentation coming?",
    date: "10-25-22",
    image: userIcon,
    numHearts: 1,
    numQuestions: 3,
    numComments: 1,
    comments: [
      {
        name: "Lea Vuong",
        username: "@lleaa",
        message: "Its going well!",
        image: userIcon,
      },
    ],
  },
  {
    name: "Luxin Wang",
    username: "@lucy",
    message: "Message3",
    date: "01-01-01",
    image: userIcon,
    numHearts: 1,
    numQuestions: 0,
    numComments: 0,
    comments: [],
  },
  {
    name: "Display Name 3",
    username: "@username3",
    message: "Message3",
    date: "01-01-01",
    image: userIcon,
    numHearts: 5,
    numQuestions: 3,
    numComments: 0,
    comments: [],
  },
  {
    name: "Display Name 3",
    username: "@username3",
    message: "Message3",
    date: "01-01-01",
    image: userIcon,
    numHearts: 5,
    numQuestions: 3,
    numComments: 0,
    comments: [],
  },
];

const Forum = () => {
  // Use groups for all the groups
  const { groups, getAllGroups, getPostByGroupName, getAllPosts, posts } =
    useUserContext();

  // useEffect(() => {
  //   getAllGroups();
  //   getAllPosts();
  // }, []);
  const func = (groupName) => {
    setSelected(groupName);
  };
  console.log(groups);
  console.log(posts);
  const [selected, setSelected] = useState("All Groups");
  return (
    <div>
      <PostBox group_name={"group1"} />
      {/* <div className="d-flex justify-content-center">
        <Container>
          <Row>
            <Col sm={5}>
              <div
                className="group p-4"
                style={{ maxHeight: "45rem", overflow: "auto" }}
              >
                {groups.map((group, index) => (
                  <GroupCard
                    key={index}
                    groupname={group.groupname}
                    selected={group.groupname == selected}
                    func={func}
                  />
                ))}
              </div>
              <Row>
                <Col>
                  <div className="shadow-sm card p-2 mt-4 ms-5">
                    <a
                      href="/create-team"
                      style={{ color: "orange", textDecoration: "none" }}
                    >
                      Create
                    </a>
                  </div>
                </Col>
                <Col>
                  <div
                    className="shadow-sm card p-2 mt-4 me-5"
                    style={{ background: "orange", color: "white" }}
                  >
                    <a
                      href="/join-team"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Join
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={7}>
              <div
                className="pt-1 posts"
                style={{
                  maxHeight: "50rem",
                  overflow: "auto",
                  boxShadow:
                    "12px 0 10px -8px #d5d5d5, -12px 0 10px -8px #d5d5d5",
                }}
              >
                {selected != "All Groups" && <PostBox />}
                {posts.map((post, index) => (
                  <Post
                    key={index}
                    name={post.name}
                    username={post.username}
                    message={post.message}
                    date={post.date}
                    image={post.image}
                    numHearts={post.numHearts}
                    numQuestions={post.numQuestions}
                    numComments={post.numComments}
                    comments={post.comments}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        {selected != "All Groups" && (
          <div>
            <div className="d-flex align-items-start">
              <Button Primary>
                <Link
                  to="/flash-cards"
                  state={{ groupName: selected }}
                  style={{ color: "orange", textDecoration: "none" }}
                >
                  View Flash Cards
                </Link>
              </Button>
            </div>
            <div className="d-flex align-items-start">
              <Button style={{ marginTop: 150, opacity: "50%" }}>
                Join Meeting
              </Button>
            </div>
            <div className="d-flex align-items-start">
              <Button style={{ marginTop: 135, opacity: "50%" }}>
                View Notes
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Forum;

const Button = styled.button`
  background: ${(props) => (props.primary ? "orange" : "white")};
  color: ${(props) => (props.primary ? "white" : "orange")};
  margin-left: 0;
  font-size: 1.5em;
  margin-top: 300px;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid orange;
  border-radius: 10px;
  transform: rotate(-90deg);
  transform-origin: left top;
  white-space: nowrap;
  box-shadow: 0 15px 41px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 15px 41px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 15px 41px rgba(0, 0, 0, 0.1);
`;
