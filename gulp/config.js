var dest = './build';
var src = './src';
var port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
    browserify: {
        bundleConfigs: [{
            entries: `${src}/js/App.jsx`,
            dest: `${dest}/js`,
            outputName: 'build.js',
            extensions: ['.js', '.jsx']
        }]
    },
    sass: {
        src: [`${src}/sass/**/*.{sass,css}`],
        dest: `${dest}/css`,
        settings: {
            sourceComments: 'map',
            imagePath: '/assets/images'
        }
    }

};
