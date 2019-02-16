const buildTag = t => text => `<${t}>${text}</${t}>`


const attrsToString =  ( attributes = {} ) => {
	
	console.log('attributes',attributes)
	
	const keys = Object.keys(attributes);

	console.log('keys',keys)
	
	const attrs = []
	
	keys.forEach( key => {
		attrs.push(
			`${key}="${attributes[key]}"`
		)
	})
	
	const stringValues = attrs.join(' ');
	
	return stringValues;
}