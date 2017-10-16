/*! Built with http://stenciljs.com */
(function (window, document, appNamespace, hydrateCssClass, publicPath, appCore, appCorePolyfilled, components, x, i) {
    'use strict';
    // create global namespace if it doesn't already exist

    (window[appNamespace] = window[appNamespace] || {}).components = components = components || [];
    // auto hide components until they been fully hydrated
    // reusing the "x" variable from the args for funzies
    x = document.createElement('style');
    x.setAttribute('data-styles', '');
    x.innerHTML = (components.map(function (c) {
        return c[0];
    }).join(',') + '{visibility:hidden}.' + hydrateCssClass + '{visibility:inherit}').toLowerCase();
    document.head.insertBefore(x, document.head.firstChild);
    // get this current script
    appNamespace = appNamespace.toLowerCase();
    x = document.scripts;
    for (i = x.length - 1; i >= 0; i--) {
        if (x[i].src && x[i].src.split('/').pop() === appNamespace + '.js') {
            publicPath = x[i].src.replace(appNamespace + '.js', appNamespace + '/');
            break;
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    x = document.createElement('script');
    x.src = publicPath + (window.customElements && window.fetch ? appCore : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-core', appCore);
    document.head.appendChild(x);
})(window, document, "agc","hydrated","/build/agc/","agc.core.js","agc.core.pf.js",[["AG-APP","ag-app",{"$":"ag-app"}],["AG-DEBUG","ag-debug",{"$":"ag-debug"},[["value",1]]],["AG-SEARCH","ag-search",{"$":"ag-search"}]]);