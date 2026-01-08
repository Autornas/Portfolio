import { Box, IconButton, Link as MuiLink, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        position: "relative",
        mt: "auto",
        pt: 6,
        pb: 4,
        backgroundColor: (theme) => 
          theme.palette.mode === "dark" 
            ? "rgba(0, 0, 0, 0.3)" 
            : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      className="footer"
    >
      <Box 
        className="container mx-auto px-4" 
        sx={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          gap: 2,
          maxWidth: "1200px"
        }}
      >
        {/* Social Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <MuiLink 
            href="https://www.facebook.com/profile.php?id=100010926393853" 
            target="_blank" 
            rel="noreferrer"
            sx={{ 
              color: "inherit",
              "&:hover": { 
                transform: "translateY(-2px)",
                transition: "transform 0.2s"
              }
            }}
          >
            <IconButton 
              aria-label="Facebook"
              sx={{
                color: (theme) => theme.palette.mode === "dark" ? "#fff" : "#6B7280",
                "&:hover": {
                  color: "#729EA1",
                  backgroundColor: (theme) => 
                    theme.palette.mode === "dark" 
                      ? "rgba(114, 158, 161, 0.1)" 
                      : "rgba(114, 158, 161, 0.1)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease-in-out"
              }}
            >
              <FacebookIcon />
            </IconButton>
          </MuiLink>

          <MuiLink 
            href="https://github.com/Autornas" 
            target="_blank" 
            rel="noreferrer"
            sx={{ 
              color: "inherit",
              "&:hover": { 
                transform: "translateY(-2px)",
                transition: "transform 0.2s"
              }
            }}
          >
            <IconButton 
              aria-label="GitHub"
              sx={{
                color: (theme) => theme.palette.mode === "dark" ? "#fff" : "#6B7280",
                "&:hover": {
                  color: "#729EA1",
                  backgroundColor: (theme) => 
                    theme.palette.mode === "dark" 
                      ? "rgba(114, 158, 161, 0.1)" 
                      : "rgba(114, 158, 161, 0.1)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease-in-out"
              }}
            >
              <GitHubIcon />
            </IconButton>
          </MuiLink>

          <MuiLink 
            href="https://www.instagram.com/autornas1/" 
            target="_blank" 
            rel="noreferrer"
            sx={{ 
              color: "inherit",
              "&:hover": { 
                transform: "translateY(-2px)",
                transition: "transform 0.2s"
              }
            }}
          >
            <IconButton 
              aria-label="Instagram"
              sx={{
                color: (theme) => theme.palette.mode === "dark" ? "#fff" : "#6B7280",
                "&:hover": {
                  color: "#729EA1",
                  backgroundColor: (theme) => 
                    theme.palette.mode === "dark" 
                      ? "rgba(114, 158, 161, 0.1)" 
                      : "rgba(114, 158, 161, 0.1)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease-in-out"
              }}
            >
              <InstagramIcon />
            </IconButton>
          </MuiLink>
        </Box>

        {/* Copyright Text */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: "text.secondary",
            textAlign: "center",
            mt: 1,
            fontSize: "0.875rem"
          }}
        >
          © {currentYear} Portfolio. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
