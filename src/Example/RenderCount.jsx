import '../App.css';
import { useEffect, useState } from 'react';


const RenderCount = () => {
  const [timesRendered, setTimesRendered] = useState(0);

  useEffect(() => {
    setTimesRendered(timesRendered + 1);
  });

  return (
    <>
      <div>{ `I have rendered ${timesRendered} times` }</div>
    </>
  );
}

export default RenderCount;
