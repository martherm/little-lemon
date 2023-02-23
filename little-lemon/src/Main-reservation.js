import { useReducer, useState } from "react";
import BookingForm from "./BookingForm";

const Main = () => {
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const initializeTimes = async () => {
    const today = new Date().toISOString().slice(0, 10);
    const data = await fetchData(`/times?date=${today}`);
    return data.times;
  };
  
  const updateTimes = async (state, action) => {
    const response = await fetchData(`/api/times?date=${action.payload}`);
    const availableTimes = response.data.times;
    return availableTimes;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
  };

  return (
    <div className="main">
      <h1>Book a table</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
        fetchData={fetchData}
      />
    </div>
  );
}

export default Main;