import { useState } from "react";
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Paper,
  Grid,
  IconButton,
  Link as MuiLink
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

// ============================================
// PERSONAL INFORMATION - EDIT HERE
// ============================================
const CONTACT_INFO = {
  name: "Arnas Petraitis",
  email: "arnas.petraitis@gmail.com",
  phone: "+370 640 27 155",
  location: "Kaunas, Lithuania",
  linkedin: "https://www.linkedin.com/in/arnas-petraitis-04110026a/",
  github: "https://github.com/Autornas",
  instagram: "https://www.instagram.com/autornas1/",
  message: "Feel free to reach out if you have any questions or would like to collaborate! I'm always looking for new opportunities to work on interesting projects."
};

export function meta() {
  return [
    { title: "Contact - Portfolio" },
    { name: "description", content: "Get in touch with me" },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const ContactCard = ({ icon, title, content, href, isLink = false }) => (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.3s ease",
        "&:hover": {
          elevation: 4,
          transform: "translateY(-4px)",
          borderColor: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          color: "primary.main",
          mb: 2,
          "& svg": { fontSize: 40 },
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
        {title}
      </Typography>
      {isLink && href ? (
        <MuiLink
          href={href}
          target="_blank"
          rel="noreferrer"
          sx={{
            color: "text.primary",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
          }}
        >
          {content}
        </MuiLink>
      ) : (
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      )}
    </Paper>
  );

  return (
    <Container className="pt-16 pb-24" maxWidth="lg" sx={{ pb: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        className="text-center mb-4 font-bold"
        sx={{ mb: 2 }}
      >
        Get In Touch
      </Typography>
      <Typography
        variant="body1"
        className="text-center mb-12"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}
      >
        {CONTACT_INFO.message}
      </Typography>

      {/* Contact Information Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <ContactCard
            icon={<EmailIcon />}
            title="Email"
            content={CONTACT_INFO.email}
            href={`mailto:${CONTACT_INFO.email}`}
            isLink={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContactCard
            icon={<PhoneIcon />}
            title="Phone"
            content={CONTACT_INFO.phone}
            href={`tel:${CONTACT_INFO.phone}`}
            isLink={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContactCard
            icon={<LocationOnIcon />}
            title="Location"
            content={CONTACT_INFO.location}
          />
        </Grid>
      </Grid>

      {/* Contact Form and Social Links */}
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={6}
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Social Links */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              height: "100%",
              border: "1px solid",
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Connect With Me
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Follow me on social media or check out my work:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {CONTACT_INFO.linkedin && (
                <MuiLink
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "text.primary",
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <LinkedInIcon />
                  <Typography>LinkedIn</Typography>
                </MuiLink>
              )}
              {CONTACT_INFO.github && (
                <MuiLink
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "text.primary",
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <GitHubIcon />
                  <Typography>GitHub</Typography>
                </MuiLink>
              )}
              {CONTACT_INFO.instagram && (
                <MuiLink
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "text.primary",
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <InstagramIcon />
                  <Typography>Instagram</Typography>
                </MuiLink>
              )}
              {CONTACT_INFO.facebook && (
                <MuiLink
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "text.primary",
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <FacebookIcon />
                  <Typography>Facebook</Typography>
                </MuiLink>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
