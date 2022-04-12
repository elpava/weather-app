export default function Image({
  fileName,
  altImage,
  classes,
  doubleSize,
  onClick,
}) {
  return (
    <img
      src={require(`../assets/weather-icons-png/${10000}_clear_large${
        doubleSize ? '@2x' : ''
      }.png`)}
      alt={altImage}
      className={classes}
      onClick={onClick}
    />
  );
}
