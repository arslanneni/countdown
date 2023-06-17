import React, { useState, useEffect } from 'react';


const AddDate = () => {
  const initialState = {
    DAY: '',
    MONTH: '',
    YEAR: ''
  };
  const countDownTime = {
    DAYS: '',
    HOURS: '',
    MINUTES: '',
    SECONDS: ''
  };
  const [feild, setFeild] = useState(initialState);
  const [countDown, setCountDown] = useState(countDownTime);

  const handelInput = (e) => {
    setFeild({ ...feild, [e.target.name]: e.target.value });
  };

  function getTimeRemaining(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date(`${feild.YEAR}-${feild.MONTH}-${feild.DAY}`);
      const remainingTime = getTimeRemaining(targetDate);
      setCountDown(remainingTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [feild]);

  return (
    <div className="countdown-container">
      <h1>Countdown Timer</h1>
      <div className="countdown">
        <p>{countDown.days} Days</p>
        <p>{countDown.hours} Hours</p>
        <p>{countDown.minutes} Minutes</p>
        <p>{countDown.seconds} Seconds</p>
      </div>
      <div className="input-container">
        <input type="text" placeholder='Enter Day' name="DAY" onChange={handelInput} className="form-control" />
        <input type="text" placeholder='Enter Month' name="MONTH" onChange={handelInput} className="form-control" />
        <input type="text" placeholder='Enter Year' name="YEAR" onChange={handelInput} className="form-control" />
      </div>
    </div>
  );
};

export default AddDate;
