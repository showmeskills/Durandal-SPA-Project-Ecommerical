const gulp = require('gulp');
const path = require('path');
const del = require('del');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const tsConfig = require("./tsconfig.json");
const sourcemaps = require("gulp-sourcemaps");
const compileTypescript = () => {
    const {compilerOptions} = tsConfig
    return gulp.src(path.join(__dirname, 'src', "**", "*.ts"))
        .pipe(ts(compilerOptions))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(__dirname, 'dist')))
}

const deleteDist = () => {
    return del(['./dist'])
}

const watchHandler = ()=>{
    gulp.watch("./src/**/*.ts",compileTypescript)
};

const buildStart = gulp.series(deleteDist,compileTypescript,watchHandler)

module.exports.default = buildStart;