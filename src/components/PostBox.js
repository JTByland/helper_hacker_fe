import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapsible from "react-collapsible";
import useLocalState from "../utils/localState";
import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { useUserContext } from "../context/user_context";

const PostBox = ({ group_name, func }) => {
  // console.log(group_name);
  const POST_URL = "/api/v1/posts";
  const { user } = useUserContext();
  // Create a post method
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${POST_URL}`, {
        content,
        author: user.name,
        group_name,
      });
      setContent("");
      func(group_name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-3">
      {/* <div>{group_name}</div> */}
      <Collapsible trigger="+">
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <div className="ps-4 pe-4">
              <div className="post-field">
                <textarea
                  required
                  placeholder="Write forum post here..."
                  className="form-control"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
            <Row>
              <Col className="float-end ">
                <div className="cancel-button">
                  <button>Cancel</button>
                </div>
              </Col>
              <Col className="float-end ">
                <div className="post-button">
                  <button type="submit">Post</button>
                </div>
              </Col>
            </Row>
          </form>
        </Wrapper>
      </Collapsible>
    </div>
  );
};

const Wrapper = styled.section`
  margin-top: 1.5rem;
  max-width: 750px;
  margin: 1.5rem auto;
`;

const Button = styled.button`
  background: #f2831a;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f2831a;
  border-radius: 10px;
`;

export default PostBox;
