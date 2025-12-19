import { Container, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Container className="pt-16" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">This is the About Me page — replace this with your bio.</Typography>
    </Container>
  );
}
