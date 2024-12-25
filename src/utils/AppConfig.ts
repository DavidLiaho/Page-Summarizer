import { API_KEY } from "~env";

class AppConfig {
    public readonly apiKey = API_KEY;
    public readonly gptUrl = "https://api.openai.com/v1/chat/completions";
}

export const appConfig = new AppConfig();
