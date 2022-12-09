import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddCard = () => {
  const CARD_URL = "/api/v1/cards";
  const location = useLocation();
  const { groupName } = location.state; // use for axios post
  const [values, setValues] = useState({
    question: "",
    answer: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${CARD_URL}`, {
        ...values,
        group_name: groupName,
      });
      // navigate back to the cards
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Add Flash Card to {groupName}</h3>
        <div className="ps-4 pe-4 pb-4">
          <div className="post-field">
            <label>Question</label>
            <input
              name="question"
              required
              value={values.question}
              placeholder="Write question here..."
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ps-4 pe-4">
          <div className="post-field">
            <label>Answer</label>
            <textarea
              required
              name="answer"
              value={values.name}
              placeholder="Write answer here..."
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="cancel-button">
            <button>Cancel</button>
          </div>
          <div className="post-button">
            <button type="submit">Post</button>
          </div>
        </div>
      </form>
    </Wrapper>
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

export default AddCard;
