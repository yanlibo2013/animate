var minify = require('gulp-minifier');
var gulp = require('gulp');
gulp.task('cssmin', function() {
    return gulp.src(['./style/index.css','./style/run.css']).pipe(minify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    })).pipe(gulp.dest('./dist/style'));
});

gulp.task('minifyJS', function() {
    return gulp.src(['./javascript/jquery.mousewheel.js','./javascript/slidepages.js']).pipe(minify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    })).pipe(gulp.dest('./dist/javascript'));
});


gulp.task('minifyHtml', function() {
    return gulp.src(['./index.html']).pipe(minify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        getKeptComment: function (content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    })).pipe(gulp.dest('./dist/'));
});

gulp.task("default",["cssmin","minifyJS"]);