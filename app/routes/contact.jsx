import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container className="pt-16" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1">Provide contact information or a form here.</Typography>
    </Container>
  );
}
