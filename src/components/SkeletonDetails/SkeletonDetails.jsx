import React from 'react'
import './skeleton.scss'

const SkeletonDetails = () => {
  return (
    <div className="skeleton-details-container">
        <div className="skeleton-first-row">
            <div className="skeleton-icon"></div>
            <div className="skeleton-title"></div>
        </div>
        <div className="skeleton-second-row">
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
        </div>
    </div>
  )
}

export default SkeletonDetails