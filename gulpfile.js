import dartSass from "sass";
import gulpSass from "gulp-sass";
import { src, dest, watch, series } from "gulp";

const sass = gulpSass(dartSass);

export function js(done) {
  src("src/js/app.js").pipe(dest("dist/js"));
  done();
}

// Funcoin que convierte a CSS
// No puedo poner directamente el app.scss,
// ya que puede cambiar otro de los archivos scss
// y entonces esto no se compila
export function convertirSassCss(done) {
  src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist/css"));
  done();
}

// Recibe una ruta (puede mirar muchos archivos a la vez)
// y una funcion a ejecutar por si llega a cambiar alguno de los archivos
// que vigila el watch
// Esta funcion esta mirando todo el tiempo si hay cambios en los archivos .scss
// Si hay un cambio ejecuta la funcion convertirSassCSS
export function dev() {
  watch("src/scss/**/*.scss", convertirSassCss);
  watch("src/js/*.js",js);
}

// Se usa para llamar muchas tareas
// Tiene que ser export default
export default series(js, convertirSassCss, dev);
