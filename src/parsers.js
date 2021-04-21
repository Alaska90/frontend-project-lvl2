import yaml from 'js-yaml';

export default (type, data) => {
  let parse;
  if (type === 'json') {
    parse = JSON.parse;
  } else if (type === 'yml') {
    parse = yaml.safeLoad;
  }
  // else if (type === 'ini') {
  //     parse = ini.parse;
  //   }
  return parse(data);
};
