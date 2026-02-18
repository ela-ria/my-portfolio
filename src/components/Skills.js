import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Skills() {
  const skills = ["JavaScript", "React", "HTML", "CSS", "Bootstrap"];

  return (
    <Card className="p-3">
      <Card.Body>
        <Card.Title as="h1">My Skills</Card.Title>

        {/* bulleted/numbered list requirement */}
        <ListGroup as="ol" numbered className="mt-3">
          {skills.map((skill) => (
            <ListGroup.Item as="li" key={skill}>
              {skill}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Skills;
