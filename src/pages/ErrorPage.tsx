import { NavLink } from "react-router-dom";

function ErrorPage() {
    return (<>
        <h1>OOPS!!! an error has occured</h1>
        <NavLink to="/">
            <button>
                Go to home
            </button>
        </NavLink>
    </>);
}

export default ErrorPage