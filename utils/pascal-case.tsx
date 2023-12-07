import { words, toString, upperFirst } from "lodash";

const pascalCase = (string: string) => {
  return words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase();
    return result + upperFirst(word);
}, '');
};

export default pascalCase;
