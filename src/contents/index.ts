import { reader } from "./reader";

window.addEventListener("load", () => {
    (window as any).readPage = reader.readPage;
});

