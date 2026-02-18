import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card className="p-3">
      <Card.Body>
        <Card.Title as="h1">About Me</Card.Title>
        <Card.Text>
         Im an IT student at Pamantasan ng Cabuyao, I know how to program in Java and React.js and i love coding. My hobbies are
          listening to music and watching movies. 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
