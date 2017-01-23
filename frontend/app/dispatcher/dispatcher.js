let _callbacks = [];
let _promises = [];

//  implementation of observable

export default class Dispatcher {
  register(callback) {
      _callbacks.push(callback);
      return _callbacks.length - 1;
  }

  dispatch(payload) {
        const resolves = [];
        const rejects = [];

        _promises = _callbacks.map((item, index) => {
            return new Promise((resolve, reject) => {
                resolves[index] = resolve;
                rejects[index] = reject;
            });
        });

        _callbacks.forEach((callback, index) => {
            Promise.resolve(callback(payload)).then(() => {

                resolves[index](payload);
            }, () => {
                rejects[index](new Error('Unsuccessful callback'));
            });
        });
        _promises = [];
    }
}
