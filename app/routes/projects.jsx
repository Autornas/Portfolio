import { Container, Typography } from "@mui/material";

export function meta() {
  return [
    { title: "Projects - Portfolio" },
    { name: "description", content: "My projects portfolio" },
  ];
}

export default function Projects() {
  return (
    <Container className="pt-16 pb-24" maxWidth="lg" sx={{ minHeight: "calc(100vh - 200px)", pb: 8 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        className="text-center mb-12 font-bold"
        sx={{ mb: 6 }}
      >
        Projects
      </Typography>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-[60vh]">
        {/* Project 1 */}
        <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700">
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center">
            {/* COMING SOON Text */}
            <div className="relative z-20 text-center px-4">
              <Typography 
                variant="h4" 
                className="text-white font-bold tracking-wider drop-shadow-lg"
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  fontWeight: 700,
                  letterSpacing: '0.2em'
                }}
              >
                COMING SOON
              </Typography>
            </div>
          </div>
          
          {/* Project Content (behind overlay) */}
          <div className="p-8 h-full flex flex-col justify-center items-center">
            <Typography variant="h5" className="text-gray-800 dark:text-gray-200 font-semibold">
              Project 1
            </Typography>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700">
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center">
            {/* COMING SOON Text */}
            <div className="relative z-20 text-center px-4">
              <Typography 
                variant="h4" 
                className="text-white font-bold tracking-wider drop-shadow-lg"
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  fontWeight: 700,
                  letterSpacing: '0.2em'
                }}
              >
                COMING SOON
              </Typography>
            </div>
          </div>
          
          {/* Project Content (behind overlay) */}
          <div className="p-8 h-full flex flex-col justify-center items-center">
            <Typography variant="h5" className="text-gray-800 dark:text-gray-200 font-semibold">
              Project 2
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
