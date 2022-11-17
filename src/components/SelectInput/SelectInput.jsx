import React, { useState } from "react";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";

const SelectInput = ({list, label, type}) => {
    const { setReservationListCourt, reservationListCourt } = useContext(Reservation);
    const [select, setSelect] = useState(list[0]);
    const [openOptions, setOpenOptions] = useState(false);


    const changeTime = (item) => {
        setSelect(item)
        type == 1 && setReservationListCourt({ ...reservationListCourt, initialHour: item});
        type == 2 && setReservationListCourt({ ...reservationListCourt, initialMinute: item });
        type == 3 && setReservationListCourt({ ...reservationListCourt, endHour: item });
        type == 4 && setReservationListCourt({ ...reservationListCourt, endMinute: item });
    };

    return (
        <div className="select-container">
            <div
                className="select-input"
                onMouseLeave={() => setOpenOptions(false)}
                onClick={() => setOpenOptions(!openOptions)}
            >
                <span className="span-input">{label}</span>
                {select < 10 ? "0" + select : select}
            </div>
            {openOptions && (
                <div className="select-wrapper">
                    {list.map((item) => (
                        <span
                            className={select == item && "select-active"}
                            onClick={() => (
                                changeTime(item),
                                setOpenOptions(!openOptions)
                            )}
                        >
                            {item < 10 ? "0" + item : item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectInput;
