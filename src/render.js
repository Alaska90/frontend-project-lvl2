const stringify = (plainFormat) => plainFormat.join('\n');

const render = (difference) => {
  const plainFormat = difference.map((item) => {
    const {key, type, removedValue, currentValue} = item;
    switch (type) {
      case 'added':
        return `${' '.repeat(2)}+ ${key}: ${currentValue}`;
      case 'removed':
        return `${' '.repeat(2)}- ${key}: ${removedValue}`;
      case 'equal':
        return `${' '.repeat(2)}  ${key}: ${currentValue}`;
      case 'changed':
        return `${' '.repeat(2)}- ${key}: ${removedValue} \n${' '.repeat(2)}+ ${key}: ${currentValue}`; 
    };
  });
  return `{\n${stringify(plainFormat)}\n}`;
};

export default render;