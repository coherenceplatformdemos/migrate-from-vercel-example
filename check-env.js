// check-env.js
const checkRequiredEnvVars = () => {
    const requiredEnvVars = ['DATABASE_URL']; // Add other required env vars here
    const missingEnvVars = [];
  
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        missingEnvVars.push(envVar);
      }
    }
  
    if (missingEnvVars.length > 0) {
      console.error('Error: The following required environment variables are missing:');
      missingEnvVars.forEach(envVar => console.error(`- ${envVar}`));
      process.exit(1); // Exit with an error code
    } else {
      console.log('All required environment variables are set.');
    }
  };
  
  checkRequiredEnvVars();