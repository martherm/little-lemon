import { useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';

function BookingPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const initializeTimes = async () => {
    const today = new Date();
    const times = await fetchAPI(today);
    setAvailableTimes(times);
  };

  const updateTimes = async (selectedDate) => {
    const date = new Date(selectedDate);
    const times = await fetchAPI(date);
    setAvailableTimes(times);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const isSuccess = await submitAPI(formData);

    if (isSuccess) {
      alert('Booking submitted successfully!');
      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('Birthday');
    } else {
      setSubmitError('Failed to submit booking. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bookingpage">
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitError={submitError}
      />
    </div>
  );
}

export default BookingPage;
