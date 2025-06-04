Hassaan Portfolio API
This repository contains a serverless API proxy for Hassaan Ahmed's portfolio website. It securely handles requests to the xAI API, ensuring the API key is not exposed in client-side code. The project is deployed on Vercel as a serverless function.
Overview
The API proxy receives user input (e.g., a job description) from the portfolio website, constructs a prompt with Hassaan's candidate information, and forwards the request to the xAI API. The response is then returned to the frontend for display.
Project Structure

/api/evaluate.js: The serverless function that proxies requests to the xAI API.
package.json: Defines dependencies and scripts.
vercel.json: Configures Vercel deployment settings.

Setup

Clone the Repository:
git clone https://github.com/hassaanAhmed97/hassaan-portfolio-api.git
cd hassaan-portfolio-api


Install Dependencies:
npm install


Set Environment Variables:

Create a .env file in the root directory (for local development):XAI_API_KEY=your-xai-api-key-here


For Vercel deployment, set the environment variable via the Vercel CLI or dashboard (see Deployment section).


Run Locally (optional):

Install Vercel CLI: npm install -g vercel
Run: vercel dev



Deployment

Install Vercel CLI (if not already installed):
npm install -g vercel


Deploy to Vercel:
vercel


Follow the prompts to link the project to your Vercel account.
Set the XAI_API_KEY environment variable:vercel env add XAI_API_KEY

Enter your xAI API key when prompted.


Access the Deployed API:

After deployment, Vercel will provide a URL (e.g., https://hassaan-portfolio-api.vercel.app/api/evaluate).



Usage

Endpoint: /api/evaluate
Method: POST
Request Body:{
  "userInput": "A job description or query to evaluate fit."
}


Response:{
  "evaluation": "The AI-generated fit evaluation response."
}



License
MIT License
