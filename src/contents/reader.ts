class Reader {

    public readPage(): string {
        return document.body.innerText;
    }

}

export const reader = new Reader();
