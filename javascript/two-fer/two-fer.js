export const twoFer = (name) => {
  if (typeof(name) !== "string") {
    return 'Error: Name must be a string';
  }
  else if (name === '') {  
  return 'One for you, one for me.';
  }
  else {
  return `One for ${name}, one for me.`;
  }
};


