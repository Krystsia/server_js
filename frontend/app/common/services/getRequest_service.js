import { sources } from '../../constants/constants.js';

export default class RequestString {
   get mainPart() {
     return 'https://newsapi.org/v1/articles?source=';
   }

   getNextSource() {
     return generatorSource.next().value;
   }

   next() {
     return this.mainPart + this.getNextSource();
   }
}

let generatorSource = generateSource(sources);
function* generateSource(sources) {
  for (const source of sources) {
    yield source;
  }
}
