import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [dates, setDates] = useState([new Date(), new Date()]); // 두 개의 날짜를 가지는 배열로 상태를 관리합니다.
  const [dateComponents, setDateComponents] = useState([]);
  const [schedules, setSchedules] = useState({}); // Format: { 'YYYY-MM-DD': { schedule: '', note: '' }}


  // 날짜 범위 변경 핸들러
  const onChange = (newDates) => {
    setDates(newDates);
  };

  const onSaveClick = () => {
    const startDate = new Date(dates[0].setHours(12, 0, 0, 0));
    const endDate = new Date(dates[1].setHours(12, 0, 0, 0));
    const newDateComponents = [];
    const tempSchedules = {...schedules};

    // 시작일부터 종료일까지의 각 날짜에 대한 컴포넌트를 생성하여 배열에 추가합니다.
    while (startDate <= endDate) {
      const dateString = startDate.toISOString().split('T')[0];
      if (!tempSchedules[dateString]) {
        tempSchedules[dateString] = {schedule: '', note:''};
      }
      newDateComponents.push(
        <DateComponent 
        key={dateString} 
        date={new Date(dateString)}
        schedule={tempSchedules[dateString].schedule}
        note={tempSchedules[dateString].note}
        onScheduleChange={(e) => handleScheduleChange(dateString, e.target.value, 'schedule')}
        onNoteChange={(e) => handleScheduleChange(dateString, e.target.value, 'note')}
        />
        );
      startDate.setDate(startDate.getDate() + 1); // 다음 날짜로 이동
    }

    // 생성된 날짜 컴포넌트 배열을 상태에 설정합니다.
    setDateComponents(newDateComponents);
    setSchedules(tempSchedules);
  };

  const handleScheduleChange = (dateString, value, type) => {
    setSchedules(prev => ({
      ...prev,
      [dateString]: {
        ...prev[dateString],
        [type]: value,
      },
    }));
  };

  // 각 날짜에 대한 컴포넌트
  const DateComponent = ({ date, schedule, note, onScheduleChange, onNoteChange }) => {
    return (
      <div>
        <div>{date.toLocaleDateString()}</div>
        <input type="text" placeholder="Schedule" value={schedule} onChange={onScheduleChange} />
        <textarea placeholder="Note" value={note} onChange={onNoteChange}></textarea>
      </div>
    );
  };


  return (
    <div>
      <Calendar
        onChange={onChange} // 날짜 범위 변경 핸들러 설정
        selectRange={true} // 범위 선택 모드 활성화
        value={dates} // 선택된 날짜 범위 설정
      />
      <p>시작일: {dates[0].toLocaleDateString()}</p>
      <p>종료일: {dates[1].toLocaleDateString()}</p>

      <button onClick={onSaveClick}>저장하기</button>
      {dateComponents}
    </div>
  );
}

export default MyCalendar;