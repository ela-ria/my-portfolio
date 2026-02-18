import Card from "react-bootstrap/Card";

function SubmissionSuccess({ formData }) {
  return (
    <Card className="p-3">
      <Card.Body>
        <Card.Title as="h1">Message Sent</Card.Title>

        <Card.Text>
          Thank you, <strong>{formData.name}</strong>! Your message has been sent.
        </Card.Text>

        <Card.Text className="mt-3">
          <strong>Name:</strong> {formData.name}
          <br />
          <strong>Email:</strong> {formData.email}
          <br />
          <strong>Message:</strong> {formData.message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SubmissionSuccess;
