const mix = require('laravel-mix');

mix.js('resources/js/admin.js', 'public/js')
    .js('resources/js/front.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');