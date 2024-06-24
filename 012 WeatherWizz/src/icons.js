// src/icons.js

const dayIcons = require.context("./assets/day", false, /\.svg$/);
const nightIcons = require.context("./assets/night", false, /\.svg$/);

const icons = { day: {}, night: {} };

dayIcons.keys().forEach((key) => {
  const iconName = key.match(/\d+/)[0];
  icons.day[iconName] = dayIcons(key).default;
});

nightIcons.keys().forEach((key) => {
  const iconName = key.match(/\d+/)[0];
  icons.night[iconName] = nightIcons(key).default;
});

export default icons;
