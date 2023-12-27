import { useState } from 'react'

function DateForm({ submitAge }) {
  function handleSubmit(e) {
    e.preventDefault();
    const error = !day || !month || !year || checkInvalidDay() || checkInvalidMonth() ||
                  checkInvalidDate() || checkFutureDate();
    if (!day) {
      dayErrorMessage = fieldRequiredMessage;
    }
    if (!month) {
      monthErrorMessage = fieldRequiredMessage;
    }
    if (!year) {
      yearErrorMessage = fieldRequiredMessage;
    }

    if (error) {
      submitAge({ days: "--", months: "--", years: "--" });
    } else {
      const dateInput = Date.parse([year, month, day].join(","));
      const age = new Date(Date.now() - dateInput);
      const origin = new Date(1970, 0, 1);
      submitAge({
        days: age.getDate() - origin.getDate(),
        months: age.getMonth() - origin.getMonth(),
        years: age.getFullYear() - origin.getFullYear()
      });
    }
  }

  function checkInvalidDay() {
    return day && (+day < 1 || +day > 31);
  }

  function checkInvalidMonth() {
    return month && (+month < 1 || +month > 12);
  }
  
  function checkInvalidDate() {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return isNaN(new Date([+year, +month, +day].join("/"))) || 
            +year % 4 === 0 ? +month === 2 && +day > 29 : +day > daysPerMonth[+month - 1];
  }

  function checkFutureDate() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    return (+year > currentYear) ||
            (+year == currentYear && +month > currentMonth) ||
            (+year == currentYear && +month == currentMonth && +day > currentDay);
  }

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const fieldRequiredMessage = "This field is required";
  const invalidDateMessage = "Must be a valid date";
  const invalidDayMessage = "Must be a valid day";
  const invalidMonthMessage = "Must be a valid month";
  const futureDateMessage = "Must be in the past";

  let dayErrorMessage = "";
  let monthErrorMessage = "";
  let yearErrorMessage = "";

  if (checkInvalidDay()) {
    dayErrorMessage = invalidDayMessage;
  }

  if (checkInvalidMonth()) {
    monthErrorMessage = invalidMonthMessage;
  }

  if (!checkInvalidDay() && !checkInvalidMonth()) {
    if (day && month && year) {
      if (checkInvalidDate()) {
        dayErrorMessage = invalidDateMessage;
      } else if (checkFutureDate()) {
        dayErrorMessage = futureDateMessage;
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="day">
          <label for="day">Day</label>
          <input type="text" name="day" placeholder="DD" value={day} onChange={e => setDay(e.target.value)} />
          <ErrorMessage message={dayErrorMessage} />
        </div>
        <div className="month">
          <label for="month">Month</label>
          <input type="text" placeholder="MM" value={month} onChange={e => setMonth(e.target.value)} />
          <ErrorMessage message={monthErrorMessage} />
        </div>
        <div className="year">
          <label for="year">Year</label>
          <input type="text" placeholder="YYYY" value={year} onChange={e => setYear(e.target.value)} />
          <ErrorMessage message={yearErrorMessage} />
        </div>
      </div>
      <button type="submit"></button>
    </form>
  )
}

function ErrorMessage({ message, hidden }) {
  return (
    <span className="error">{message}</span>
  )
}

export default DateForm
