import Card from "react-bootstrap/Card";

function Home() {
  return (
    <Card className="p-3">
      <Card.Body>
        <Card.Title as="h1">Welcome to My Profile!</Card.Title>
        <Card.Text>
        Hello! I am Maria Manuela L. Gonzales and my Goal is to Graduate and to be a front-end and back-end Developer
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
