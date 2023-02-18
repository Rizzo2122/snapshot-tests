import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/112102445?v=4" />
                <Card.Body>
                    <Card.Title>Rizzo2122</Card.Title>
                    <Card.Text>
                        I'm a 19 year old coding student
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard