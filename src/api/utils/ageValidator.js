function isAdult(birthDate) {
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);

  return birthDate <= date18YrsAgo;
}
module.exports = isAdult;
