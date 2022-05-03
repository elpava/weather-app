import {memo} from 'react';
import moment from 'moment';
import Image from '../UI-Element/Image';

export default memo(function Hours({
  startTime,
  isToday,
  temperature,
  fileName,
}) {
  // console.log('Hours');
  return (
    <div className="each-hour">
      <span className="hour">
        {`${moment(startTime).hour()}:00`.padStart(5, '0')}
      </span>
      {isToday && <span className="underline"></span>}
      <span className="temperature">{Math.trunc(temperature)}°</span>
      <Image fileName={fileName} svg altImage={fileName} />
    </div>
  );
});
