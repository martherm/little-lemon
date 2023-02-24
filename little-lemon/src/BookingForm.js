import { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, selectedDate, onDateChange, onSubmit, isSubmitting, submitError }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isDateValid, setIsDateValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isGuestsValid, setIsGuestsValid] = useState(true);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setIsTimeValid(event.target.checkValidity());
  };

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value));
    setIsGuestsValid(event.target.checkValidity());
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      onSubmit(selectedDate, selectedTime, guests, occasion);
    }
  };

  const isFormValid = () => {
    return isDateValid && isTimeValid && isGuestsValid;
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Reservation Form</legend>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={selectedDate} onChange={onDateChange} aria-label="Choose reservation date" aria-required="true" />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={selectedTime} onChange={handleTimeChange} required>
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value={isSubmitting ? 'Submitting...' : 'Make Your reservation'} disabled={isSubmitting || !isFormValid()} />
      </fieldset>
      {submitError && <p className="error">{submitError}</p>}
    </form>
  );
};

export default BookingForm;