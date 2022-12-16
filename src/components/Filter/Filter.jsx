import React, { useState } from "react";
import "./filter.scss";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";
import { list } from "./List";

const Filter = () => {
    const { setFilterSelect, filterSelect } = useContext(Reservation);

    const [openOptions, setOpenOptions] = useState(false);
    return (
        <div className="filter-container">
            <p className="filter-month">Dez 2022</p>
            <div className="filter-content">
                {filterSelect && (
                    <div
                        className="filter-icon"
                        onClick={() => setFilterSelect("")}
                    >
                        <img src="../assets/icons/close.svg" />
                        <img
                            src={`../assets/options/step2/${filterSelect}.svg`}
                            alt=""
                        />
                    </div>
                )}
                <div
                    className="filter-button"
                    onMouseLeave={() => setOpenOptions(false)}
                    onClick={() => setOpenOptions(!openOptions)}
                >
                    <img src="../assets/icons/filter.svg" />
                    Filtrar
                </div>
                <div className="filter-wrapper">
                    {openOptions &&
                        list.map((item) => (
                            <span
                                className={
                                    filterSelect === item.value &&
                                    "filter-active"
                                }
                                onClick={() => (
                                    filterSelect === item.value
                                        ? setFilterSelect("")
                                        : setFilterSelect(item.value),
                                    setOpenOptions(!openOptions)
                                )}
                            >
                                {item.pt}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
