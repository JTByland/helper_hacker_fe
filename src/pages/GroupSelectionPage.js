import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

function GroupSelectionPage() {
  // const handleChange = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
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
  // };
// 
  return (
    // <Wrapper>
    //   {/* {alert.show && (
    //     <div className={`alert alert-${alert.type}`}>{alert.text}</div>
    //   )} */}
    //   <form className="container-lg " onSubmit={handleSubmit}>
    //     <h3 className="text-center">Login</h3>
    //     <div className="mb-3">
    //       <label>Group Name</label>
    //       <input
    //         type="text"
    //         name="group"
    //         // value={values.email}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Enter group name"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Number of Members</label>
    //       <input
    //         type="text"
    //         name="number_of_members"
    //         // value={values.password}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Enter number of members"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Class Section</label>
    //       <input
    //         type="text"
    //         name="section"
    //         // value={values.password}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Enter section"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Professor Name (optional)</label>
    //       <input
    //         type="text"
    //         name="professor"
    //         // value={values.password}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Enter professor name"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Supervisor Name (optional)</label>
    //       <input
    //         type="text"
    //         name="supervisor"
    //         // value={values.password}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Enter supervisor"
    //       />
    //     </div>
    //     <div className="d-grid">
    //       <Button>Submit</Button>
    //     </div>
    //     <p className="forgot-password text-right">
    //       Don't have an account ?{" "}
    //       <span>
    //         <Link to="/register">Register</Link>
    //       </span>
    //     </p>
    //   </form>
    // </Wrapper>
    <div className="GroupSelectionPage">
      <div
        className="container"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="row">
          <div className="col-lg-6 mb-4">
            <Card>
              <Card.Body>
                <Link to="/create-team">
                  <Card.Title style={{ color: "#F2831A" }}>
                    Create A Team
                  </Card.Title>{" "}
                </Link>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mb-4">
            <Card>
              <Card.Body>
                <Link to="/join-team">
                  <Card.Title style={{ color: "#F2831A" }}>
                    Join Your Team
                  </Card.Title>
                </Link>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
// const Wrapper = styled.section`
//   margin-top: 1.5rem;
//   max-width: 750px;
//   margin: 1.5rem auto;
// `;

// const Button = styled.button`
//   background: #f2831a;
//   color: white;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #f2831a;
//   border-radius: 10px;
// `;
export default GroupSelectionPage;
