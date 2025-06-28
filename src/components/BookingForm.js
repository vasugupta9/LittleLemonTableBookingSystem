import './styles.css';
import { useState, useEffect } from 'react';

function BookingForm({availableTimes, availableTimesDispatcher, submitForm}) {
  const [date, setDate] = useState((new Date()).toISOString().split('T')[0]);
  const [time, setTime] = useState(availableTimes[0]); // eg: '17:00'
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validDate = date !== '';
    const validTime = time !== '';
    const validGuests = Number(guests) >= 1 && Number(guests) <= 10;
    const validOccasion = occasion !== '';
    setIsFormValid(validDate && validTime && validGuests && validOccasion);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid){
        submitForm({date, time, guests, occasion});
    }
  };

  return (
    <section>
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Select reservation date"
        value={date}
        onChange={(e) => {
            const selectedDateString = e.target.value;
            setDate(selectedDateString);
            availableTimesDispatcher(new Date(selectedDateString));
        }}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-label="Select reservation time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
            <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        aria-label="Enter number of guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Select occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="Submit reservation form"/>
    </form>
    </section>
  );
}

export default BookingForm;
