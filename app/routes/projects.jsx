import { Container, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Container className="pt-16" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1">List your projects here.</Typography>
    </Container>
  );
}
