import './styles.css';
import PromoBanner from './PromoBanner';
import BookingForm from './BookingForm';
import { useReducer } from 'react';
import { submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

import { initializeTimes, updateTimes } from './bookingUtils';

function BookingPage() {
  const navigate = useNavigate();
  const submitForm  = (formData) => {
    const success = submitAPI(formData);
    if (success){
      navigate('/confirmation');
    }
  };

  const [availableTimes, availableTimesDispatcher] = useReducer(updateTimes, new Date(), initializeTimes);

  return (
    <main>
      <PromoBanner
        heading="Special Weekend Offer"
        subheading="Book now and get complimentary desserts"
        imageURL={require("../assets/images/banner_dessert_img.jpg")}
      />
      <BookingForm availableTimes={availableTimes} availableTimesDispatcher={availableTimesDispatcher} submitForm={submitForm}/>
    </main>
  );
}

export default BookingPage;