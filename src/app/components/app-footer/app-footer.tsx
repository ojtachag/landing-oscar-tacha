import {JSX} from "react";
import './app-footer.sass'
const AppFooter = (): JSX.Element => {
    return (<div className="app-footer--container">
        © {new Date().getFullYear()} Oscar Tacha With love built with React and NextJS Deployed with GitHub Actions
    </div>)
};
export default AppFooter;