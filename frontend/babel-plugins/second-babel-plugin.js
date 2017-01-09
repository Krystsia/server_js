module.exports = function({ types: t}) {
	const babylon = require('babylon');
	
	const updateVisitor = {
		Identifier(path) {
			if (path.node.name.search(/\w+Decorator\b/) >= 0) {
				const method = path.node.name;
				const custormDecorator = path.parent.params ? path.parent.params[0].name : null;
				const bodyPath = path.findParent((path) => path.isProgram());
				const redefinedMethod = `(Object.defineProperty(
					${this.className}.prototype,
					'${method}',
					decorate([${custormDecorator}],
						${this.className}.prototype,
						'${method}',
						Object.getOwnPropertyDescriptor(${this.className}.prototype, '${method}'))))`;
			
				const decorate = `var decorate =  function(decorators, target, propertyName, descriptor) {
									  if(arguments.length == 4) {
										return decorators.reduceRight(function(o, d){
											return (d && d(target, propertyName, o)) || o;
										}, descriptor);
									  }
									}`;
				if (custormDecorator) {
					bodyPath.node.body.unshift(babylon.parse(decorate).program.body[0])
					bodyPath.node.body.push(babylon.parse(redefinedMethod).program.body[0]);
				}
			}
		}
	}
	
	return {
		visitor: {
			ClassDeclaration(path) {
				const className = path.node.id.name;
				path.traverse(updateVisitor, { className });
			}
		}
	}
}