import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useUserContext } from "../context/user_context";
import { useEffect } from "react";

const CreateTeam = () => {
  const { user, createGroup } = useUserContext();
  console.log(user);
  useEffect(() => {
    console.log(user);
  });
  const handleChange = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // hideAlert();
    // setLoading(true);
    // const { email, password } = values;
    // const loginUser = { email, password };
    // try {
    //   const { data } = await axios.post(`${DEV_URL}`, loginUser);
    //   setValues({ name: "", email: "", password: "" });
    //   showAlert({
    //     text: `Welcome, ${data.user.name}. Redirecting to dashboard...`,
    //     type: "success",
    //   });
    //   setLoading(false);
    //   saveUser(data.user);
    //   //redirect here when login
    //   if (numberOfGroups == 0) {
    //     navigate("/group");
    //   } else {
    //     navigate("/forum");
    //   }
    // } catch (error) {
    //   showAlert({ text: error.response.data.msg });
    //   setLoading(false);
    // }
  };
  return (
    <Wrapper>
    {/* {alert.show && (
      <div className={`alert alert-${alert.type}`}>{alert.text}</div>
    )} */}
    <form className="container-lg " onSubmit={handleSubmit}>
      <h3 className="text-center">Login</h3>
      <div className="mb-3">
        <label>Group Name</label>
        <input
          type="text"
          name="group"
          // value={values.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter group name"
        />
      </div>
      <div className="mb-3">
        <label>Number of Members</label>
        <input
          type="text"
          name="number_of_members"
          // value={values.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter number of members"
        />
      </div>
      <div className="mb-3">
        <label>Class Section</label>
        <input
          type="text"
          name="section"
          // value={values.password}
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
          // value={values.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter professor name"
        />
      </div>
      <div className="mb-3">
        <label>Supervisor Name (optional)</label>
        <input
          type="text"
          name="supervisor"
          // value={values.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter supervisor"
        />
      </div>
      <div className="d-grid">
        <Button>Submit</Button>
      </div>
      <p className="forgot-password text-right">
        Don't have an account ?{" "}
        <span>
          <Link to="/register">Register</Link>
        </span>
      </p>
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
