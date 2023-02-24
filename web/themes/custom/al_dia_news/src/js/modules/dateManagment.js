const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;

function dateToTimestamp(date) {
  return date.getTime();
}

function getHoursBetweenDates(date1, date2, useTimestamps = false) {
  let timeDiffInMs;
  if (useTimestamps) {
    timeDiffInMs = Math.abs(date1 - date2);
  } else {
    timeDiffInMs = Math.abs(date1.getTime() - date2.getTime());
  }

  const hoursDiff = Math.floor(timeDiffInMs / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR));

  return hoursDiff;
}


export { dateToTimestamp, getHoursBetweenDates }