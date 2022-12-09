import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLocalState from "../utils/localState";
import { PROD_ROOT } from "../url";
import axios from "axios";
const JoinTeam = () => {
  const [token, setToken] = useState("");
  const GROUP_URL = "/api/v1/groups";
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    try {
      const { data } = await axios.post(`${GROUP_URL}/joins`, {
        code: token,
      });
      setToken("");
      showAlert({
        text: `Successfully join a team...`,
        type: "success",
      });
      setLoading(false);
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <form className="container-lg " onSubmit={handleSubmit}>
        <h3 className="text-center">Join Team</h3>
        <div className="mb-3">
          <label>Group ID</label>
          <input
            type="text"
            name="ID"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="form-control"
            placeholder="Enter Group ID"
          />
        </div>

        <div className="d-grid">
          <Button>Submit</Button>
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
export default JoinTeam;
