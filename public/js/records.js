/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-csspointerevents-cssremunit-csstransforms-eventlistener-matchmedia-opacity-queryselector-requestanimationframe-touchevents !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var u in y)if(y.hasOwnProperty(u)){if(e=[],t=y[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,u,f,l,d="modernizr",c=s("div"),p=a();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return i=s("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),u=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):c.parentNode.removeChild(c),!!u}function f(e,t){return!!~(""+e).indexOf(t)}function l(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?l(o,n||t):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,a){function u(){d&&(delete A.style,delete A.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var d,c,m,v,h,y=["modernizr","tspan","samp"];!A.style&&y.length;)d=!0,A.modElem=s(y.shift()),A.style=A.modElem.style;for(m=e.length,c=0;m>c;c++)if(v=e[c],h=A.style[v],f(v,"-")&&(v=i(v)),A.style[v]!==n){if(a||r(o,"undefined"))return u(),"pfx"==t?v:!0;try{A.style[v]=o}catch(g){}if(A.style[v]!=h)return u(),"pfx"==t?v:!0}return u(),!1}function v(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+b.join(s+" ")+s).split(" "),d(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t);var C=[],x=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=x;var S=t.documentElement;Modernizr.addTest("classlist","classList"in S);var T="svg"===S.nodeName.toLowerCase();Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=x.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)});var w=g.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(r,function(e){n=9===e.offsetTop})}return n});var _="Moz O ms Webkit",z=g._config.usePrefixes?_.split(" "):[];g._cssomPrefixes=z;var E=function(t){var r,o=x.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var s=0;o>s;s++){var a=x[s],u=a.toUpperCase()+"_"+r;if(u in i)return"@-"+a.toLowerCase()+"-"+t}return!1};g.atRule=E;var b=g._config.usePrefixes?_.toLowerCase().split(" "):[];g._domPrefixes=b;var q={elem:s("modernizr")};Modernizr._q.push(function(){delete q.elem});var A={style:q.elem.style};Modernizr._q.unshift(function(){delete A.style}),g.testAllProps=v;var P=g.prefixed=function(e,t,n){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=i(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!P("requestAnimationFrame",e),{aliases:["raf"]}),Modernizr.addTest("matchmedia",!!P("matchMedia",e)),g.testAllProps=h,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),o(),delete g.addTest,delete g.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);

/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(w){
	"use strict";
	/* exported loadCSS */
	var loadCSS = function( href, before, media ){
		// Arguments explained:
		// `href` [REQUIRED] is the URL for your CSS file.
		// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
			// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
		// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
		var doc = w.document;
		var ss = doc.createElement( "link" );
		var ref;
		if( before ){
			ref = before;
		}
		else {
			var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
			ref = refs[ refs.length - 1];
		}

		var sheets = doc.styleSheets;
		ss.rel = "stylesheet";
		ss.href = href;
		// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
		ss.media = "only x";

		// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
		function ready( cb ){
			if( doc.body ){
				return cb();
			}
			setTimeout(function(){
				ready( cb );
			});
		}
		// Inject link
			// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
			// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		ready( function(){
			ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
		});
		// A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.
		var onloadcssdefined = function( cb ){
			var resolvedHref = ss.href;
			var i = sheets.length;
			while( i-- ){
				if( sheets[ i ].href === resolvedHref ){
					return cb();
				}
			}
			setTimeout(function() {
				onloadcssdefined( cb );
			});
		};

		function loadCB(){
			if( ss.addEventListener ){
				ss.removeEventListener( "load", loadCB );
			}
			ss.media = media || "all";
		}

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		if( ss.addEventListener ){
			ss.addEventListener( "load", loadCB);
		}
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined( loadCB );
		return ss;
	};
	// commonjs
	if( typeof exports !== "undefined" ){
		exports.loadCSS = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
}( typeof global !== "undefined" ? global : this ));

/*! CSS rel=preload polyfill. Depends on loadCSS function. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT  */
(function( w ){
  // rel=preload support test
  if( !w.loadCSS ){
    return;
  }
  var rp = loadCSS.relpreload = {};
  rp.support = function(){
    try {
      return w.document.createElement( "link" ).relList.supports( "preload" );
    } catch (e) {
      return false;
    }
  };

  // loop preload links and fetch using loadCSS
  rp.poly = function(){
    var links = w.document.getElementsByTagName( "link" );
    for( var i = 0; i < links.length; i++ ){
      var link = links[ i ];
      if( link.rel === "preload" && link.getAttribute( "as" ) === "style" ){
        w.loadCSS( link.href, link );
        link.rel = null;
      }
    }
  };

  // if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS
  if( !rp.support() ){
    rp.poly();
    var run = w.setInterval( rp.poly, 300 );
    if( w.addEventListener ){
      w.addEventListener( "load", function(){
        w.clearInterval( run );
      } );
    }
    if( w.attachEvent ){
      w.attachEvent( "onload", function(){
        w.clearInterval( run );
      } )
    }
  }
}( this ));

(function(window, document) {
  function hasFeatures(features) {
    var acc = true;
    for (var i = 0; i < features.length; i++) {
      var feature = features[i];
      var hasFeature = Modernizr[feature];
      // if (!hasFeature) console.warn('Feature "' + feature + '" missing!');
      acc = acc && hasFeature;
    }
    return acc;
  }


  // KaTeX support
  if (hasFeatures(['queryselector',
                   'classlist'])) {

    var mathBlocks = document.querySelectorAll('script[type^="math/tex"]');

    // only load if math blocks are present
    if (mathBlocks.length) {
      // enable math blocks using KaTeX
      loadCSS("https://unpkg.com/katex@0.6.0/dist/katex.min.css");
      loadJSDeferred("https://unpkg.com/katex@0.6.0/dist/katex.min.js", function () {
        // kramdown generates script tags with type "math/tex"
        Array.prototype.forEach.call(mathBlocks, function(el) {
          var tex = el.textContent
            .replace('% <![CDATA[', '')
            .replace('%]]>', '');

          // replace the script tag with KaTeX
          try {
            var preview = el.previousElementSibling;

            el.outerHTML = katex.renderToString(tex, {
              displayMode: el.type === 'math/tex; mode=display'
            });

            // hide the preview only when successful
            preview.style.display = 'none';
            preview.style.visibility = 'hidden';
          } catch (e) {
            console.error(e);
          }
        });
      });
    }
  }
}(window, document));

function OpenCloseNav() {
    "use strict";
    var x = document.getElementById("_sidebar");
    var y = document.getElementById("_main");
    var z = document.getElementById("_menu");
    if (window.matchMedia("(min-width: 50em)").matches) {
        if (x.style.marginLeft === "-16rem") {
            y.style.marginLeft = "22rem";
            y.style.marginRight = "4rem";
            x.style.marginLeft = "0rem";
            z.style.left = "15rem";
        } else {
            y.style.marginLeft = "10.5rem";
            y.style.marginRight = "9.5rem";
            x.style.marginLeft = "-16rem";
            z.style.left = "0.25rem";
       }
  } else {
      if (x.style.marginLeft === "-17rem") {
            x.style.width = "18rem";
            x.style.marginLeft = "0rem";
            z.style.left = "15rem";
        } else {
            x.style.marginLeft = "-17rem";
            z.style.left = "1rem";
       }
      }
};