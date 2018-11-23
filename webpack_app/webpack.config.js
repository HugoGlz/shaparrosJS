module.exports = {
    mode: 'production', //'development' , 'production',
    entry: {
        home: './index.js',
        contact: './contact.js'
    },
    output: {
        filename: '[name].js'
    }
}