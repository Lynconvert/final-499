
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div className="main-container">
            <div className="links-container">
                <Link to="/" className="links1">Home</Link>

                <Link to="/about" className="links2">About</Link>

                <Link to="/contact" className="links3">Contact</Link>
            </div>
        </div>
    );
};

export default Links;