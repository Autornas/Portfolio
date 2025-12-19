import { Container, Typography } from "@mui/material";

export function meta() {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Portfolio start page" },
  ];
}

export default function Home() {
  return (
    <Container className="pt-16 px-4" maxWidth="lg">
      <Typography variant="h2" component="h1">
        PORTFOLIO
      </Typography>
    </Container>
  );
}
