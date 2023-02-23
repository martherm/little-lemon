import { useState } from 'react';

const BookingForm = ({ availableTimes, selectedDate, onDateChange, onSubmit, isSubmitting, submitError }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={selectedDate} onChange={onDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value={isSubmitting ? 'Submitting...' : 'Make Your reservation'} disabled={isSubmitting} />
      {submitError && <div className="error">{submitError}</div>}
    </form>
  );
};

export default BookingForm;








/*const BookingForm = ({ availableTimes, selectedDate, onDateChange }) => {
    return (
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={selectedDate} onChange={onDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    );
  };

  export default BookingForm;  */