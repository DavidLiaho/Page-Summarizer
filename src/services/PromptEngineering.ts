class PromptEngineering {

    public getPrompt(url: string, content: string) {
        const system = `A web page in ${url}.`;
        const assistant = `You are an expert in ${url} content summarization.`;
        const user = `Summarize in Hebrew the following content from ${url} up to one paragraph, containing up to 10 lines.
        Reply only with the summarization paragraph.
        Site content to summarize: ${content}`;
        return { system, assistant, user };
    }

}

export const promptEngineering = new PromptEngineering();
