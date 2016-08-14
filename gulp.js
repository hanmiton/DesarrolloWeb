var gulp = requere('gulp') //requireindo libreria gulp
var postcss = require('gulp-postcss') //requiriedno modulo postcss
var browserSync = require('browserSync') // reuqireindo browserSync
//gulp.task comaondo para definra una nueva tarea
gulp.task('serve',function(){  //nomre de la tarea y fuoncion callback a ejecutarse
	browserSync.init({ //browserSync.init comaondo para incia run servido el proeycto 
		server: { //server parametor objeto  que necestia browser Sync
			baseDir: './dist' //direcotrio donde se encutnnran los documentos del proyecto
		}
	})
})

//rarea pra procesa el css
gulp.task('css', function(){
//.piepe son funcoines de tipo tuberia
	var processor = [
		autoprefixer({browser: ['> 5%', 'ie 8']}),//para poner prefijos para q entiendan la mayoria de navegadores
		cssnested //para poder codificar ocmo en un preprocesador
	]
	return gulp.src('./src/*.css')  //toamdno orign de lso datos de css
		.pipe(postcss(Processors)) // pasando codigo de postcss a css
		.pipe(gulp.dest('./dist/css'))// mandando documento al desitno
		.pipe(browserSync.stream()) //veindo cambios para recargar servidor
})


//watch=> trae par avigilar los camgios

gulp.task('watch', function(){
	gulp.watch('./src/*.css',['css']) //funcioens par aver is un docuemtno se modifcia
	gulp.watch('./dist/*.html').on('change', browserSync.reload) //si se modidfic ale codigo de html se recarga el servidor
})

gulp.task('default', ['watch','serve']) //tarea general que ejecuta todas las demas