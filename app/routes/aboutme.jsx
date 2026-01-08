import { Container, Typography, Box, Paper, Grid, Chip, Avatar } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

// ============================================
// PERSONAL INFORMATION - EDIT HERE
// ============================================
const ABOUT_INFO = {
  name: "Arnas Petraitis",
  title: "Full Stack Developer",
  bio: "I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences. With expertise in modern web technologies, I enjoy turning complex problems into simple, elegant solutions.",
  
  // Skills
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "C#",
    "HTML/CSS",

  ],
  
  // Education 
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "KTU - Kaunas University of Technology",
      year: "2024 - Present",
    },
  ],
  
  // Experience -
  experience: [
    {
      position: "Software Developer",
      company: "Company Name",
      period: "2023 - Present",
      description: "Developed and maintained web applications using modern frameworks.",
    },
  ],
};

export function meta() {
  return [
    { title: `About ${ABOUT_INFO.name} - Portfolio` },
    { name: "description", content: ABOUT_INFO.bio },
  ];
}

export default function AboutMe() {
  return (
    <Container className="pt-16 pb-24" maxWidth="lg" sx={{ pb: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Avatar
          sx={{
            width: { xs: 120, sm: 150 },
            height: { xs: 120, sm: 150 },
            mx: "auto",
            mb: 3,
            bgcolor: "primary.main",
            fontSize: { xs: "3rem", sm: "4rem" },
          }}
        >
          {ABOUT_INFO.name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 1, fontWeight: 700 }}
        >
          {ABOUT_INFO.name}
        </Typography>
        <Typography
          variant="h6"
          color="primary.main"
          sx={{ mb: 3 }}
        >
          {ABOUT_INFO.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.8,
            fontSize: "1.125rem",
          }}
        >
          {ABOUT_INFO.bio}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Skills Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              height: "100%",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <CodeIcon sx={{ fontSize: 32, color: "primary.main", mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Skills & Technologies
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              {ABOUT_INFO.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.primary",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                    },
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Education Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              height: "100%",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <SchoolIcon sx={{ fontSize: 32, color: "primary.main", mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Education
              </Typography>
            </Box>
            {ABOUT_INFO.education.map((edu, index) => (
              <Box key={index} sx={{ mb: index < ABOUT_INFO.education.length - 1 ? 3 : 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  {edu.school}
                </Typography>
                <Typography variant="body2" color="primary.main">
                  {edu.year}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Experience Section */}
        {ABOUT_INFO.experience.length > 0 && (
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <WorkIcon sx={{ fontSize: 32, color: "primary.main", mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Experience
                </Typography>
              </Box>
              {ABOUT_INFO.experience.map((exp, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: index < ABOUT_INFO.experience.length - 1 ? 4 : 0,
                    pb: index < ABOUT_INFO.experience.length - 1 ? 4 : 0,
                    borderBottom:
                      index < ABOUT_INFO.experience.length - 1
                        ? "1px solid"
                        : "none",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {exp.position}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.main"
                    sx={{ mb: 1.5 }}
                  >
                    {exp.period}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.description}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
