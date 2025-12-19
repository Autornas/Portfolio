import { Box, IconButton, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        py: 2,
        mt: 4,
        backgroundColor: "transparent",
      }}
    >
      <Box className="container" sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <MuiLink href="https://www.facebook.com/profile.php?id=100010926393853" target="_blank" rel="noreferrer">
          <IconButton aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
        </MuiLink>

        <MuiLink href="https://github.com/Autornas" target="_blank" rel="noreferrer">
          <IconButton aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </MuiLink>

        <MuiLink href="https://www.instagram.com/autornas1/" target="_blank" rel="noreferrer">
          <IconButton aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </MuiLink>
      </Box>
    </Box>
  );
}
