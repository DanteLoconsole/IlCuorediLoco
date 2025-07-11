import React from "react";
import "./style/204.css";

const NoContentPage: React.FC = () => {
    return (
        <div className="nocontent">
            <div className="nocontent-container">
                <p className="nocontent-code">204</p>
                <h1 className="nocontent-title">
                    Page has no content
                </h1>
                <p className="nocontent-message">
                    This will be fixed in the future.
                </p>
                <div className="nocontent-link-container">
                    <a href="/" className="nocontent-link">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NoContentPage;
