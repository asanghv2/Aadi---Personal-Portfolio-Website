
import { GoogleGenAI } from "@google/genai";
import { PortfolioData } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userPrompt: string, resumeData: PortfolioData) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are the AI assistant for ${resumeData.name}. 
    Your goal is to answer questions about their professional background, projects, skills, and experience in a friendly, professional, and concise manner.
    
    Context Data:
    ${JSON.stringify(resumeData)}
    
    Guidelines:
    1. Only answer based on the context provided. If asked something outside this scope, politely redirect to talking about ${resumeData.name.split(' ')[0]}'s career.
    2. Be enthusiastic but professional.
    3. Use bullet points for lists.
    4. Keep answers relatively short (under 150 words).
    5. If a user asks for contact info, provide the email: ${resumeData.email}.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently offline. Please check back later!";
  }
};
