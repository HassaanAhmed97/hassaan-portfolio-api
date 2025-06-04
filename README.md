Hassaan Portfolio API
This repository contains a serverless API proxy for Hassaan Ahmed's portfolio website. It securely handles requests to the OpenAI API, ensuring the API key is not exposed in client-side code. The project is deployed on Vercel as a serverless function using web-based deployment.
Overview
The API proxy receives user input (e.g., a job description) from the portfolio website, constructs a prompt with Hassaan's candidate information, and forwards the request to the OpenAI API. The response is then returned to the frontend for display.
Project Structure

/api/evaluate.js: The serverless function that proxies requests to the OpenAI API.
package.json: Defines dependencies and scripts.
vercel.json: Configures Vercel deployment settings.

Setup and Deployment

Import to Vercel:

Go to Vercel and sign in.
Select "Import Git Repository" and choose this repository (hassaan-portfolio-api).
Configure the project settings and deploy.


Set Environment Variable:

In the Vercel dashboard, go to your project settings.
Add an environment variable:
Name: OPENAI_API_KEY
Value: Your OpenAI API key (generate at https://platform.openai.com/account/api-keys).




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
