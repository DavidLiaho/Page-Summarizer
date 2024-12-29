import { useEffect, useState, type ChangeEvent } from "react";
import "./Summarize.css";
import { contentReader } from "~src/services/ContentReader";
import { browser } from "~src/utils/Browser";
import { promptEngineering } from "~src/services/PromptEngineering";
import { gptService } from "~src/services/GptService";
import { Spinner } from "../Spinner/Spinner";
import languages from "assets/json/languages.json"


export function Summarize(): JSX.Element {

    const [summary, setSummary] = useState<string>("");
    const [language, setLanguage] = useState<string>("English");

    useEffect(() => {
        (async () => {
            try {
                setSummary("");
                const url = await browser.getUrl();
                const content = await contentReader.readContent();
                const prompt = promptEngineering.getPrompt(url, content, language);
                let completion = await gptService.getCompletion(prompt.system, prompt.assistant, prompt.user);
                completion = completion.replace(/\.\s/g, ".<br><br>");
                setSummary(completion);
            }
            catch (err: any) {
                setSummary(err.message);
            }
        })();
    }, [language]);


    function handleSelectChange(e: ChangeEvent<HTMLSelectElement>): void {
        const value = e.target.value;
        setLanguage(value);
    }

    return (
        <div className="Summarize">

            <select onChange={handleSelectChange} value={language}>
                {languages.map(l => <option key={l}>{l}</option>)}
            </select>

            {!summary && <Spinner />}

            <p dangerouslySetInnerHTML={{__html: summary}}></p>

        </div>
    );
}
