import React from "react";
import "./skeleton.scss";

const SkeletonCard = () => {
    return (
        <div className="skeleton-card-container">
            <div className="skeleton-icon" />
            <div className="skeleton-content">
                <div />
                <div />
            </div>
        </div>
    );
};

export default SkeletonCard;
