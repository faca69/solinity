const SingleTokenCountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: any) => {
  if (completed) {
    return <p className="font-bold text-5xl">Released</p>;
  } else if (days > 1) {
    return <span className="font-bold text-5xl">{days} days</span>;
  } else if (days === 1) {
    return <span className="font-bold text-5xl">{days} day</span>;
  } else if (hours > 1) {
    return <span className="font-bold text-5xl">{hours} hours</span>;
  } else if (hours === 1) {
    return <span className="font-bold text-5xl">{hours} hour</span>;
  } else if (minutes > 1) {
    return <span className="font-bold text-5xl">{minutes} minutes</span>;
  } else if (minutes === 1) {
    return <span className="font-bold text-5xl">{minutes} minute</span>;
  } else {
    return <span className="font-bold text-5xl">{seconds} seconds</span>;
  }
};

export default SingleTokenCountdownRenderer;