import React from "react";


function BookingForm({ submitForm }) {

    const [date, setDate] = React.useState("");
    const [times, setTimes] = React.useState("");
    const [guests, setGuests] = React.useState("");
    const [occasion, setOccasion] = React.useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        // props.submitForm(e);
        submitForm({
            date,
            times,
            guests,
            occasion
        });
    }

    // const handelChange = (e) => {
    //     setDate(e);
    //     // props.dispatch(e)
    // }

    return (
        <header>
            <h3>Book Now</h3>
            <section>
                <form onSubmit={handelSubmit} className="form">
                    <fieldset>

                        {/* date */}
                        <div>
                            <label htmlFor="date">Choose Date:</label>
                            <input type="date" id="date" value={date} required onChange={(e) => setDate(e.target.value)}></input>
                        </div>

                        {/* times */}
                        <div>
                            <label htmlFor="time" >Choose Time:</label>
                            <select id="time" value={times} required onChange={(e) => setTimes(e.target.value)}>
                                <option value="" disabled>Select a time</option>
                                {/* {props.availableTimes.availableTimes.map(
                                    availableTime => (
                                        <option key={availableTime} value={availableTime} >{availableTime}</option> */}
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </select>
                        </div>

                        {/* Guests */}
                        <div>
                            <label htmlFor="guests" >Number of Guests:</label>
                            <input id="guests" type="number" min="1" value={guests} required onChange={(e) => setGuests(e.target.value)}>
                            </input>
                        </div>

                        {/* occasions */}
                        <div>
                            <label htmlFor="occasion" >Occasion:</label>
                            <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="" disabled>Select an occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}></input>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
}



export default BookingForm;



