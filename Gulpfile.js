var gulp       = require('gulp'),

    browserify = require('gulp-browserify'),
    concat     = require('gulp-concat'),
    imagemin   = require('gulp-imagemin'),
    bower = require('gulp-bower');

gulp.task('styles', function () {
        gulp.src([
            'assets/css/typography.css', 
            'assets/css/styles.css',
            'assets/css/reset.css',
            'assets/css/group.css',
            
            'assets/css/button.css',
            'assets/css/bootstrap.modal.css',
          //  'build/font-awesome/css/font-awesome.css',
            'assets/css/main.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build/'));

});

gulp.task('scripts', function () {

    gulp.src(['assets/js/app.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('build/'));

});

gulp.task('images', function () {

    gulp.src(['assets/img/**/*.png', 'assets/img/**/*.gif'])
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));

});

gulp.task('bower', function() {
    bower()
        .pipe(gulp.dest('./build/'))

})

gulp.task('dev', function () {

    gulp.run('build');

    gulp.watch('assets/js/**/*.js', [ 'scripts' ]);
    gulp.watch('assets/css/**/*.css', [ 'styles' ]);
    gulp.watch('assets/img/**/*', [ 'images' ]);

});

gulp.task('build', ['styles', 'scripts', 'images','bower' ]);

