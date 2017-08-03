module.exports = {
    CSSJSfiles: [{
        name: '404 page',
        quotefile: '404.html',
        prefix: 'fof-',
        type: 'js',
        list: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js'
        ]
    }, {
        name: 'index page',
        quotefile: '_includes/index_head.html',
        prefix: 'app-index-',
        type: 'js',
        list: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/chart.js/dist/Chart.js',
            'node_modules/wowjs/dist/wow.js',
            'static/js/scroll.js'
        ]
    }, {
        name: 'i18next page',
        quotefile: '_includes/index_head.html',
        prefix: 'i18-',
        type: 'js',
        list: [
            'static/js/i18next.min.js',
            'static/js/localization.js'
        ]
    }, {
        name: 'blog pages',
        quotefile: '_includes/head.html',
        prefix: 'app-',
        type: 'js',
        list: [
            'node_modules/jquery/dist/jquery.js',
            'search/js/bootstrap3-typeahead.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/jquery-slimscroll/jquery.slimscroll.js',
            'node_modules/wowjs/dist/wow.js',
            'static/js/scroll.js'
        ]
    }, {
        name: 'blog pages\' jPage',
        quotefile: '_includes/category.html',
        prefix: 'jPage-',
        type: 'js',
        list: [
            'static/js/jPages.js'
        ]
    }, {
        name: 'all pages',
        quotefile: '_includes/head.html',
        prefix: 'app-',
        type: 'css',
        list: [
            'node_modules/normalize.css/normalize.css',
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/animate.css/animate.css',
            'node_modules/components-font-awesome/css/font-awesome.css',
            'node_modules/font-mfizz/dist/font-mfizz.css',
            'search/css/cb-search.css',
            'static/css/style-purify.css'
        ]
    }]
}
