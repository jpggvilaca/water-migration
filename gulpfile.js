// Var declarations

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	webserver = require('gulp-webserver'),
	minifyHTML = require('gulp-minify-html')

var paths = {
  scripts: ['client/scripts/*.js',
      'client/*.js',
      'client/app/controllers/*.js',
      'client/app/services/*.js',
      'node_modules/foundation-sites/js/foundation/foundation.tooltip.js'
    ]
}

//// Gulp tasks ////

// Uglifies (minifies js)

gulp.task('scripts', function() {
	gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(plumber())
		.pipe(gulp.dest('build/js'));
});

// Styles (minifies sass)

gulp.task('styles', function() {
	gulp.src('client/sass/*.scss')
    		.pipe(sass({
    			outputStyle: 'compressed',
    			errLogToConsole: true,
          includePaths: [ 'node_modules' ]
    		}))
    		.pipe(gulp.dest('build/styles/'))
});

// HTML minifier

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('index.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('build/'));
});

// Watch Task (watch changes on all files)

gulp.task('watch', function(){
	gulp.watch('client/scripts/*.js', ['scripts']);
	gulp.watch('client/sass/*.scss', ['styles']);
});

// Starts the server

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: false,
      port: 3500
    }));
});

// Main tasks

gulp.task('default', ['scripts', 'styles', 'webserver', 'watch']);
gulp.task('dist', ['scripts', 'styles', 'minify-html']);