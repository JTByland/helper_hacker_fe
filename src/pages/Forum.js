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
import axios from "axios";


var groups1 = [
  { groupname: "All Groups" },
  { groupname: "CS 2222" },
  { groupname: "Senior Project" },
  { groupname: "SE 4444.01" },
  { groupname: "group 6" },
  { groupname: "group 7" },
  { groupname: "group 8" },
];

var posts1 = [
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
  const POST_URL = "/api/v1/posts";

  // Use groups for all the groups
  const [selected, setSelected] = useState("All Groups");
  const { groups, getAllGroups } =
    useUserContext();
  const [posts, setPosts] = useState(null);

  const getPostByGroupName = async (group_name) => {
    try {
      const { data } = await axios.post(
        `${POST_URL}/getPostName`,
        {
          group_name,
        }
      );
      // console.log(data);
      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/posts`);
      setPosts(data.posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllGroups();
    getAllPosts();
  }, []);

  // useEffect(() => {
  //   getPostByGroupName(selected);
  // }, [selected]);

  const func = (groupName) => {
    setSelected(groupName);
    getPostByGroupName(groupName);
  };

  const boxFunc = (groupName) => {
    getPostByGroupName(groupName);
  };

  // console.log(groups);
  // console.log(posts);
  // const [selected, setSelected] = useState("All Groups");


  if (groups == null) 
    return <div>loading...</div>
  if (posts == null) 
    return <div>loading...</div>
  
  return (
    <div>
      {/* You need to pass the group name down to the PostBox */}
      {/* <PostBox group_name={"Team1"} /> */}
      <div className="d-flex justify-content-center">
        
        {/* <div>
          {groups[0].name}
        </div> */}
        <Container>
          <Row>
            <Col sm={5}>
              <div
                className="group p-4"
                style={{ minHeight: "45rem", maxHeight: "45rem", overflow: "auto" }}
              >
                {groups.slice(0).reverse().map((group, index) => (
                  <GroupCard
                    key={index}
                    groupname={group.name}
                    selected={group.name == selected}
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
              {/* <PostBox group_name={"Team1"} /> */}
              <div
                className="pt-1 posts"
                style={{
                  maxHeight: "50rem",
                  overflow: "auto",
                  boxShadow:
                    "12px 0 10px -8px #d5d5d5, -12px 0 10px -8px #d5d5d5",
                }}
              >
                {selected != "All Groups" && <PostBox group_name={selected} func={boxFunc}/>}
                {posts.slice(0).reverse().map((post, index) => (
                  <Post
                    key={index}
                    name={post.author}
                    username={"@" + post.author}
                    message={post.content}
                    date={post.createdAt}
                    image={userIcon}
                    numHearts={0}
                    numQuestions={0}
                    numComments={0}
                    comments={[]}
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
      </div>
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
