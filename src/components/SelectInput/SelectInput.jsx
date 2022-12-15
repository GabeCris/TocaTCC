import React, { useState } from "react";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";

const SelectInput = ({ list, label, type, id }) => {
    const {
        setReservationListMaterial,
        reservationListMaterial,
        setReservationListCourt,
        reservationListCourt,
    } = useContext(Reservation);
    const [select, setSelect] = useState(list[0]);
    const [openOptions, setOpenOptions] = useState(false);

    const changeTime = (item) => {
        setSelect(item);
        if (type === "material") {
            id == 1 &&
                setReservationListMaterial({
                    ...reservationListMaterial,
                    initialHour: item,
                });
            id == 2 &&
                setReservationListMaterial({
                    ...reservationListMaterial,
                    initialMinute: item,
                });
            id == 3 &&
                setReservationListMaterial({
                    ...reservationListMaterial,
                    endHour: item,
                });
            id == 4 &&
                setReservationListMaterial({
                    ...reservationListMaterial,
                    endMinute: item,
                });
        } else if (type === "court") {
            id == 1 &&
                setReservationListCourt({
                    ...reservationListCourt,
                    initialHour: item,
                });
            id == 2 &&
                setReservationListCourt({
                    ...reservationListCourt,
                    initialMinute: item,
                });
            id == 3 &&
                setReservationListCourt({
                    ...reservationListCourt,
                    endHour: item,
                });
            id == 4 &&
                setReservationListCourt({
                    ...reservationListCourt,
                    endMinute: item,
                });
        }
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
                                changeTime(item), setOpenOptions(!openOptions)
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
