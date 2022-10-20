import React from "react";
import "./cardevent.scss";
import { Link } from "react-router-dom";

const CardEvent = ({event, title, date, start, end, amount, index, id}) => {
    return (
        <section className="card-container">
            <Link to={`/details/${id}`}>

            <div className="card-content">
                <div className="card-image_container">
                    <span className="card-number">{index}</span>
                    <img src={`../assets/events/${event}.svg`} />
                </div>
                <div className="card-info">
                    <div className="card-info_title">
                        {title}
                    </div>
                    <nav className="card-nav">
                        <div className="card-nav_item">
                            <img src="../assets/events/icons/calendar.svg" alt="" />
                            <p className="card-nav_text">
                                {date}
                            </p>
                        </div>
                        <div className="card-nav_item">
                            <img src="./assets/events/icons/time.svg" alt="" />
                            <p className="card-nav_text">
                                {start} - {end}
                            </p>
                        </div>
                        <div className="card-nav_item">
                            <img src="./assets/events/icons/people.svg" alt="" />
                            <p className="card-nav_text">
                                {amount}
                            </p>
                        </div>
                    </nav>
                </div>
            </div>
            <img src="./assets/icons/next.svg" />
            </Link>
        </section>
    );
};

export default CardEvent;
