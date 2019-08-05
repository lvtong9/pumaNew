let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let babel = require('gulp-babel');


gulp.task("watchall",async ()=>{
	gulp.watch('*.html',async ()=>{
		gulp.src('*.html')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma'));
	})

	gulp.watch('js/*.js', async ()=>{
		gulp.src('js/*.js')
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma\\js'));
	});

	gulp.watch('img/**/*', async ()=>{
		gulp.src('img/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma\\img'));
	});
	
	gulp.watch('font/**/*', async ()=>{
		gulp.src('font/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma\\font'));
	});
	
	gulp.watch('*.php', async ()=>{
		gulp.src('*.php')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma'));
	});
	
	gulp.watch('css/**/*', async ()=>{
		gulp.src('css/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma\\css'));
	});
	
	gulp.watch('sass/**/*', async ()=>{
		gulp.src('sass/**/*')
		.pipe(sass())//把sass里的东西经过编译放到css中
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\puma\\css'));
	});
});
