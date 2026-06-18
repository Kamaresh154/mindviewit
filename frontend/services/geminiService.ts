import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Mindview Bot," the AI Solutions Architect for Mindview IT Services Pvt Ltd. 
Mindview is a boutique agency specializing in UKG (Kronos) Workforce Management (WFM) and Human Capital Management (HCM).

Your Goal: Assist visitors by answering high-level questions about UKG Dimensions, UKG Pro, and WFM strategy, while subtly qualifying them as leads for Mindview services.

Key Services to reference:
1. Implementation: Rapid deployment of UKG Dimensions & Pro, data migration, and change management.
2. Optimization: Fixing broken implementations, custom BI reports (Looker/Cognos), and workflow automation.
3. Managed Support: SLA-driven support acting as an extension of their HRIS team.

Tone: Professional, authoritative, modern, and helpful. Avoid salesy fluff. Use industry terms like WFM, HCM, Attestation, Scheduling, and Forecasting correctly.
If asked about pricing, state that Mindview creates bespoke engagement models and suggest booking a consultation.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): void => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return;

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "I'm currently unable to connect to the knowledge base. Please try again later.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a technical issue. Please reach out to our team directly via the contact form.";
  }
};

export const generateImage = async (prompt: string, aspectRatio: '16:9' | '4:3' | '1:1' = '1:1'): Promise<string | null> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    // Using gemini-2.5-flash-image as per guidelines for general image generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
            aspectRatio: aspectRatio,
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};