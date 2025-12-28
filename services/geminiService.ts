
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are EcoMind, the Official AI Assistant for EcoMind Productivity Tool.
EcoMind is a revolutionary tool that blends AI-driven automation with real-time ecological efficiency in digital workflows.
Your tone is professional, friendly, and helpful.
Answer in the language used by the user (Portuguese, English, or Spanish).
Key aspects of EcoMind:
- Founded: 2020.
- Purpose: Streamlining complex digital tasks through visual automation and LLMs.
- Features: Universal search, AI summarization, workflow builder.
Always mention your name "EcoMind" if asked who you are.
Keep responses concise.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      });
      return response.text || "Estou com dificuldades para conectar agora. Como posso ajudar?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Encontrei um erro ao processar sua solicitação.";
    }
  }
}

export const geminiService = new GeminiService();
