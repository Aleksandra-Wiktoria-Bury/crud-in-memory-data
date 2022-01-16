const capitalize = (string) => {
  return string.replace(/(^|[\s-])\S/g, (match) => match.toUpperCase());
};

module.exports = capitalize;


