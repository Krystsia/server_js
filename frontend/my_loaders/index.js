var utils = require('loader-utils');

module.exports = function(source) {
	if(this.cacheable) this.cacheable();
    console.log('don\'t worry, be happy');

	let config = utils.getLoaderConfig(this, 'my-loader');
	let counter = 0;

	try {
		source = JSON.parse(source);
		return JSON.stringify(deleteNumberAttributes(source));
	} catch (error) {
		console.log(error);
	}

	function deleteNumberAttributes(obj) {
		if(obj && typeof obj === 'object') {
			for (let item in obj) {
				if (typeof obj[item] === "object") {
					deleteNumberAttributes(obj[item])
				}

				if (!isNaN(Number(item))) {
					counter++;
					delete obj[item];
				}
           	}
			obj[config.count] = counter;
           	return obj;
       }
   }
};
