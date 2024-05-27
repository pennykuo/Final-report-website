import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import scheduleData from './scheduleData';
import './Schedule.css'; // Import the CSS file

function Schedule() {
    const [currentDay, setCurrentDay] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDay((prevDay) => (prevDay + 1) % scheduleData.length);
            setSelectedDate(new Date(scheduleData[currentDay].date));
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentDay]);

    return (
    <div className="schedule" style={{ }}>
        <div className="calendar">
            <Calendar
                className="small-calendar"
                locale="en-US"
                value={selectedDate}
                tileClassName={({ date, view }) => {
                    if (scheduleData.find(d => new Date(d.date).toDateString() === date.toDateString())) {
                        return 'highlight';
                    }
                }}
            />
        </div>
        <div className="event" style={{ marginLeft: '20px' }}>
            <div className="bubble">
                <h2>{scheduleData[currentDay].date}</h2>
                <p>{scheduleData[currentDay].event}</p>
            </div>
        </div>
    </div>
);
}

export default Schedule;