import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function GroupSelectionPage() {
  return (
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
            <Card >
              <Card.Body>
                <a href="/create-team">
                  <Card.Title style={{ color: "#F2831A" }}>
                    Create A Team
                  </Card.Title>{" "}
                </a>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mb-4">
            <Card >
              <Card.Body>
              <a href="/join-team">
                <Card.Title style={{ color: "#F2831A" }}>
                  Join Your Team
                </Card.Title>
                </a>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupSelectionPage;
