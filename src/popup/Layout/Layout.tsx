import { Header } from "../Header/Header";
import { Summarize } from "../Summarize/Summarize";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header />
			<Summarize />
        </div>
    );
}
