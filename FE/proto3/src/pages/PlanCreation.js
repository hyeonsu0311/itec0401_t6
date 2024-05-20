import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateComponent from '../components/Date';

function PlanCreation() {
    const [dates, setDates] = useState([new Date(), new Date()]);
    const [isEditing, setIsEditing] = useState(true);


    const handleSaveRange = () => {
        setIsEditing(false);
    };

    const createDateComponents = () => {
        const startDate = new Date(dates[0]);
        const endDate = new Date(dates[1]);

        const components = [];
        let dayCounter = 1;

        while (startDate <= endDate) {
            const month = startDate.getMonth() + 1;
            const day = startDate.getDate();
            components.push(
                <div key={startDate.toISOString()}>
                    <h2>{dayCounter}일차 - {month}월 {day}일</h2>
                    <DateComponent />
                </div>
            );
            startDate.setDate(startDate.getDate() + 1);
            dayCounter += 1;
        }

        return components;
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <Calendar
                        onChange={setDates}
                        selectRange={true}
                        value={dates}
                    />
                    <button onClick={handleSaveRange}>기간 설정</button>
                </>
            ) : (
                <div>
                    <p>기간: {dates[0].toLocaleDateString()} - {dates[1].toLocaleDateString()}</p>
                    <button onClick={() => setIsEditing(true)}>기간 수정</button>
                    {createDateComponents()}
                </div>
            )}
        </div>
    );
}

export default PlanCreation;
