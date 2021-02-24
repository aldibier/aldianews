/* webpack.mix.js */

let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Laravel provides a fluent utility to compile all your frontend assets 
 | like stylesheets and scripts
 |
 */

/*
 |--------------------------------------------------------------------------
 | Configuration
 |--------------------------------------------------------------------------
 */
mix
    .setPublicPath('assets')
    .options({
        processCssUrls: false,
    })

/*
 |--------------------------------------------------------------------------
 | JS
 |--------------------------------------------------------------------------
 */
mix.js('src/js/app.js', 'assets/js/index.js');

/*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
 */
mix.sass('src/sass/index.scss', 'assets/css/index.css', {
    sassOptions: {
        outputStyle: "compressed",
    }
})
