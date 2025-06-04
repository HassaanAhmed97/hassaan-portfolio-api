const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: 'User input is required' });
  }

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://hassaanahmed97.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const prompt = `
You are an AI assistant evaluating how well a candidate fits a given role or query based on their background. Below is the candidate's information, followed by the user's query. Assess the fit and provide a detailed response explaining why the candidate is a good match (or not) for the role or query.

### Candidate Information
**Name**: Hassaan Ahmed  
**Location**: Karachi, Pakistan  
**Email**: hassaan.ria297@gmail.com  
**Phone**: +92 321 1811843  
**LinkedIn**: linkedin.com/in/hassaan-ahmed  
**Portfolio**: hassaanahmed.designfolio.me  

**Summary**:  
A Senior Product Manager with over 5 years of experience in AI product development, Agile methodologies, and data-driven enterprise solutions. Currently at Beam AI, I lead AI-driven digital transformation projects, reducing client turnaround time by 20% and securing $100K+ ARR for 5 clients. I specialize in optimizing user journeys, platform scalability, and technical collaboration (APIs, system architecture), with a proven track record in e-commerce, logistics, and aviation sectors.

**Skills**:  
- AI Product Development  
- Agile Methodologies  
- Roadmap Planning  
- Data Analytics (Power BI, SQL, Airtable)  
- Enterprise Solutions  
- Stakeholder Management  
- Technical Collaboration (APIs, System Architecture)  
- A/B Testing  
- Process Automation  
- Cohort Analysis  
- Program Management  
- Impact Analysis  

**Experience**:  
- **Senior Product Manager, Beam AI** (Dec 2022 – Present)  
  - Spearheaded AI-driven projects, reducing client turnaround time by 20% through predictive analytics and workflow automation.  
  - Enhanced platform scalability for 5 clients, securing $100K+ ARR and improving retention by 80%.  
  - Optimized user journeys for billing solutions, increasing subscription success rates by 12% and reducing churn by 5%.  
  - Improved product efficiency by 18% and reduced manual intervention by 27% using Agile methodologies.  
  - Partnered with engineering for API integrations, improving scalability by 15%.  

- **Consultant** (Nov 2022 – Present)  
  - Shaped product roadmaps for AI logistics and e-commerce startups, targeting $50M and $200M market opportunities.  
  - Led market entry strategies across e-commerce, tourism, logistics, and aviation sectors.  

- **Program Manager, Swvl** (Feb 2022 – Nov 2022)  
  - Developed AI-driven fleet optimization tools, improving efficiency by 30%.  
  - Scaled operations into Tier 2 cities by 15%, reducing vehicle downtime by 22%.  
  - Boosted Net Promoter Score (NPS) by 5 points through data-driven insights.  

- **Product Manager, Daraz, Alibaba Group** (Oct 2020 – Feb 2022)  
  - Enabled $200K transaction growth by optimizing digital payment adoption for 500+ merchants.  
  - Launched a multi-language platform, increasing adoption by 20% in Tier 2+ markets.  
  - Developed a chatbot, handling 50K+ monthly interactions with a 7% resolution rate increase.  

- **Management Trainee, Khaadi** (Jul 2019 – Oct 2020)  
  - Optimized in-store operations, increasing stock liquidation by 10% and saving $10K+ in costs.  
  - Launched a new product category, contributing 5% to sales.  
  - Redesigned store layouts, boosting conversion rates by 8%.  

**Education**:  
- **PMP, Project Management Professional**, Project Management Institute (Oct 2024)  
- **MBA**, Institute of Business Administration (IBA), Karachi (Dec 2023)  
- **BBA**, Institute of Business Administration (IBA), Karachi (May 2019)  

**Portfolio Projects**:  
- **AI-Driven Payment Solutions (Beam AI)**  
  - Led development of scalable payment acceptance solutions, securing $100K+ ARR. Link: https://hassaanahmed.designfolio.me/project/680fc49467219879a3b669c9  
- **AI Logistics Startup Roadmap**  
  - Shaped product roadmap for a seed-stage startup, targeting a $50M market opportunity. Link: https://hassaanahmed.designfolio.me/project/680fc96067219879a3b6730f  
- **Fleet Optimization Tool (Swvl)**  
  - Developed AI-driven tools to improve operational efficiency by 30%. Link: https://hassaanahmed.designfolio.me/project/6810d27467219879a3b77dab  

### User Query  
The user has provided the following query or role description to evaluate your fit:  
${userInput}

### Evaluation  
Based on the candidate's information and the user's query, evaluate how well Hassaan Ahmed fits the role or query. Provide a detailed response explaining:  
- Relevant skills and experiences that align with the query.  
- Any gaps or areas where the candidate might need improvement.  
- An overall fit assessment (e.g., "Strong Fit," "Moderate Fit," "Not a Fit") with justification.  
Respond in a professional tone, as this will be displayed on a portfolio website for potential recruiters.
`;

  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const evaluation = data.choices[0].text.trim();
    res.status(200).json({ evaluation });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error evaluating fit. Please try again.' });
  }
};
