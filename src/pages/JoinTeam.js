import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styled from "styled-components";



const JoinTeam = () => {
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
    
    // <div>
    //   <Card
    //     style={{
    //       width: "90%",
    //       position: "absolute",
    //       left: "50%",
    //       top: "50%",
    //       transform: "translate(-50%, -50%)",
    //     }}
    //   >
    //     <Card.Header>Join Team</Card.Header>
    //     <Card.Body>
    //       <Form>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Group Name</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" />
    //         </Form.Group>
    //         <Form.Label><b>OR</b></Form.Label>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Group ID</Form.Label>
    //           <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Send Request
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    // </div>
    <Wrapper>
    {/* {alert.show && (
      <div className={`alert alert-${alert.type}`}>{alert.text}</div>
    )} */}
    <form className="container-lg " onSubmit={handleSubmit}>
      <h3 className="text-center">Join Team</h3>
      <div className="mb-3">
        <label>Group Name</label>
        <input
          type="text"
          name="group"
          // value={values.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Group Name"
        />
      </div>
      <div className="mb-3">
        <label>Group ID</label>
        <input
          type="text"
          name="ID"
          // value={values.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Group ID"
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
