import React from "react";
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import Header from "./Header.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import BookingForm from "./BookingForm.js";

function Main() {



    const navigate = useNavigate();
    const submitForm = function (formData) {
        navigate("/confirmed");
        console.log(formData);
    }






    return (




        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<BookingForm submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />

            </Routes>

        </main>);
}

export default Main;