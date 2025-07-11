import React from "react";
import "./style/404.css";

const NotFoundPage: React.FC = () => {
    return (
        <div className="notfound">
            <div className="notfound-container">
                <p className="notfound-code">404</p>
                <h1 className="notfound-title">
                    Page not found
                </h1>
                <p className="notfound-message">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="notfound-link-container">
                    <a href="/" className="notfound-link">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
