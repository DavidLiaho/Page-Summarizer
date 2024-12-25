import { browser } from "~src/utils/Browser";

class ContentReader {

    public async readContent(): Promise<string> {

        // Get current tab id: 
        const tabId = await browser.getTabId();

        // Execute a function inside the content area: 
        const executions = await chrome.scripting.executeScript({
            target: { tabId },
            func: () => {
                return (window as any).readPage();
            }
        });

        // Take the return value from the executed function: 
        const content = executions[0].result;

        return content;
    }

}

export const contentReader = new ContentReader();
