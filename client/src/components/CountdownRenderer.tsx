type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};
const countdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: Props) => {
  if (completed) {
    return <p>Released</p>;
  } else if (days > 1) {
    return <span>{days} days</span>;
  } else if (days === 1) {
    return <span>{days} day</span>;
  } else if (hours > 1) {
    return <span>{hours} hours</span>;
  } else if (hours === 1) {
    return <span>{hours} hour</span>;
  } else if (minutes > 1) {
    return <span>{minutes} minutes</span>;
  } else if (minutes === 1) {
    return <span>{minutes} minute</span>;
  } else {
    return <span>{seconds} seconds</span>;
  }
};

export default countdownRenderer;
