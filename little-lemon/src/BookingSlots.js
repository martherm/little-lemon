const BookingSlots = ({ availableTimes }) => {
  if (!availableTimes) {
    return null; 
  }

  return availableTimes.map((time) => (
    <button key={time} className="booking-slot" value={time}>
      {time}
    </button>
  ));
};
export default BookingSlots;