export default function Image({
  fileName = 10000,
  altImage,
  classes,
  doubleSize,
  onClick,
  svg,
  png,
}) {
  let path;
  if (svg) path = svg && `weather-icons-svg/${fileName}.svg`;
  if (png)
    path = png && `weather-icons-png/${fileName}${doubleSize ? '@2x' : ''}.png`;

  return (
    <img
      src={require(`../../assets/${path}`)}
      alt={altImage}
      className={classes}
      onClick={onClick}
    />
  );
}
