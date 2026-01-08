import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// ============================================
// PERSONAL INFORMATION - EDIT HERE
// ============================================
const HERO_INFO = {
  name: "Arnas Petraitis",
  title: "Full Stack Developer",
  location: "Kaunas, Lithuania",
  subtitle: "I create beautiful and functional online stores",
  description: "Welcome to my portfolio. I specialize in building modern e-commerce solutions and web shops that provide seamless shopping experiences for customers and powerful management tools for businesses.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Get In Touch"
};

export const meta = () => [
  { title: "Portfolio - Home" },
  { name: "description", content: "Welcome to my portfolio. I'm a developer passionate about creating beautiful, functional, and user-friendly digital experiences." },
];

const features = [
  {
    icon: CodeIcon,
    title: "E-Commerce Solutions",
    description: "Building scalable online stores with modern technologies",
  },
  {
    icon: WorkIcon,
    title: "Projects",
    description: "Building innovative solutions",
  },
  {
    icon: ContactMailIcon,
    title: "Collaboration",
    description: "Ready to work together",
  },
];

export default function Home() {
  return (
    <Box 
      sx={{ 
        minHeight: "calc(100vh - 200px)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "radial-gradient(ellipse at top, rgba(114, 158, 161, 0.15) 0%, rgba(114, 158, 161, 0.08) 30%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(181, 189, 137, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      {/* Additional gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(114, 158, 161, 0.1) 0%, transparent 60%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(181, 189, 137, 0.05) 0%, transparent 50%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Hero Section */}
      <Container 
        maxWidth="lg" 
        className="pt-16 pb-24"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 8, md: 12 },
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(135deg, #729EA1 0%, #B5BD89 50%, #729EA1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {HERO_INFO.name}
          </Typography>
          
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 600,
              mb: 1,
              color: "primary.main",
            }}
          >
            {HERO_INFO.title}
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <LocationOnIcon sx={{ fontSize: 20, color: "text.secondary" }} />
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              {HERO_INFO.location}
            </Typography>
          </Box>
          
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: "text.secondary",
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            {HERO_INFO.subtitle}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem" },
              color: "text.secondary",
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            {HERO_INFO.description}
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
              mb: 8,
            }}
          >
            <Button
              component="a"
              href="/projects"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              {HERO_INFO.ctaPrimary}
            </Button>
            <Button
              component="a"
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  borderColor: "primary.dark",
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              {HERO_INFO.ctaSecondary}
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  textAlign: "center",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    elevation: 4,
                    transform: "translateY(-8px)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "primary.main",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <feature.icon sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
