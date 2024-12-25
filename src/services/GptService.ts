import axios from "axios";
import { appConfig } from "~src/utils/AppConfig";

class GptService {
	
    public async getCompletion(systemContent: string, assistantContent: string, userContent: string): Promise<string> {
        
        const body = {
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemContent },
                { role: "assistant", content: assistantContent },
                { role: "user", content: userContent },
            ]
        };

        const options = {
            headers: {
                authorization: "Bearer " + appConfig.apiKey
            }
        };

        const response = await axios.post(appConfig.gptUrl, body, options) as any;

        const completion = response.data.choices[0].message.content;

        return completion;
    }
}

export const gptService = new GptService();
