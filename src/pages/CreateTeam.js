import axios from "axios";
import styled from "styled-components";
import useLocalState from "../utils/localState";
import { useUserContext } from "../context/user_context";
import { PROD_ROOT } from "../url";
import { useState } from "react";
const CreateTeam = () => {
  const GROUP_URL = "/api/v1/group";
  const GROUP_ENDPOINT = `${PROD_ROOT}${GROUP_URL}`;
  const { group, saveGroup } = useUserContext();
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
  const [values, setValues] = useState({
    name: "",
    section: "",
    professor: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    try {
      const { data } = await axios.post(`${GROUP_ENDPOINT}`, values);
      setValues({ name: "", section: "", professor: "" });
      showAlert({
        text: `Sucessfully create a group`,
        type: "success",
      });
      setLoading(false);
      saveGroup(data.group);
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
        <h3 className="text-center">Login</h3>
        <div className="mb-3">
          <label>Group Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter group name"
          />
        </div>
        <div className="mb-3">
          <label>Class Section</label>
          <input
            type="text"
            name="section"
            value={values.section}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter section"
          />
        </div>
        <div className="mb-3">
          <label>Professor Name (optional)</label>
          <input
            type="text"
            name="professor"
            value={values.professor}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter professor name"
          />
        </div>
        <div className="d-grid">
          <Button>Submit</Button>
        </div>
      </form>
    </Wrapper>
    // <div>
    //   <Card
    //     style={{
    //       width: "90%",
    //       position: "absolute",
    //       left: "50%",
    //       top: "60%",
    //       transform: "translate(-50%, -50%)",
    //     }}
    //   >
    //     <Card.Header>Create Team</Card.Header>
    //     <Card.Body>
    //       <Form>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Group Name</Form.Label>
    //           <Form.Control placeholder="Hub Team 12" />
    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Number of Members</Form.Label>
    //           <Form.Select aria-label="Default select example">
    //             <option>1</option>
    //             <option value="2">2</option>
    //             <option value="3">3</option>
    //             <option value="4">4</option>
    //             <option value="5">5</option>
    //             <option value="6">6</option>
    //             <option value="7">7</option>
    //             <option value="8">8</option>
    //             <option value="9">9</option>
    //             <option value="10">10</option>
    //           </Form.Select>
    //         </Form.Group>

    //         <Form.Group className="mb-3">
    //           <Form.Label>Class Section</Form.Label>
    //           <Form.Control type="password" placeholder="001" />
    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Professor Name (optional)</Form.Label>
    //           <Form.Control type="password" placeholder="Anjum Chida" />
    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Supervisor Name (optional)</Form.Label>
    //           <Form.Control type="password" placeholder="John Doe" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Submit{" "}
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    // </div>
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
export default CreateTeam;
