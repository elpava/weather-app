import {WiDaySunny} from 'react-icons/wi';

const $24 = Array.from(
  {
    length: 24,
  },
  x => (x = Math.floor(Math.random() * (30 - 20 + 1) + 20))
);

export default function Hours() {
  return (
    <>
      {$24.map((item, i) => (
        <div key={i} className="each-hour">
          <span className="hour">{i + 1}:00</span>
          <span>{item}</span>
          <WiDaySunny size="1.5rem" />
        </div>
      ))}
    </>
  );
}
