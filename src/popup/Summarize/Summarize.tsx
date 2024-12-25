import { useEffect, useState } from "react";
import "./Summarize.css";
import { contentReader } from "~src/services/ContentReader";
import { browser } from "~src/utils/Browser";
import { promptEngineering } from "~src/services/PromptEngineering";
import { gptService } from "~src/services/GptService";
import { Spinner } from "../Spinner/Spinner";

export function Summarize(): JSX.Element {

    const [summary, setSummary] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                const url = await browser.getUrl();
                const content = await contentReader.readContent();
                const prompt = promptEngineering.getPrompt(url, content);
                let completion = await gptService.getCompletion(prompt.system, prompt.assistant, prompt.user);
                completion = completion.replace(/\.\s/g, ".<br><br>");
                setSummary(completion);
            }
            catch (err: any) {
                setSummary(err.message);
            }
        })();
    }, []);

    return (
        <div className="Summarize">
            {!summary && <Spinner />}
            <p dangerouslySetInnerHTML={{__html: summary}}></p>
        </div>
    );
}
