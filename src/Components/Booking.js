import React from "react";
import Bookingform from "./BookingForm";

const Booking = (props) => {
    return (
        <Bookingform availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.SubmitForm} ></Bookingform>
    )
}

export default Booking;