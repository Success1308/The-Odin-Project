const getIconUrl = (icon) => {
  const iconFolder = icon.match(/day|night/g)[0];
  const iconNumber = icon.match(/\d+/g)[2];
  return `assets/${iconFolder}/${iconNumber}.svg`;
};

export const updateCurrentWeatherIcon = (weather) => {
  const { condition } = weather.current;
  const iconUrl = getIconUrl(condition.icon);
  return iconUrl;
};
