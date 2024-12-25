class Browser {

    public async getUrl() {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];
        const currentUrl = new URL(currentTab.url).host;
        return currentUrl;
    }

    public async getTabId() {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];
        const currentTabId = currentTab.id;
        return currentTabId;
    }
}

export const browser = new Browser();
