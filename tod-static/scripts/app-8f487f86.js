/**
 * Created by pierre on 23/11/16 to update current slide on afterchange custom function
 */
"use strict";
angular.module("slick", []).directive("slick", ["$timeout", function(e) {
        return {
            restrict: "AEC",
            scope: {
                initOnload: "@",
                data: "=",
                currentIndex: "=",
                accessibility: "@",
                adaptiveHeight: "@",
                arrows: "@",
                asNavFor: "@",
                appendArrows: "@",
                appendDots: "@",
                autoplay: "@",
                autoplaySpeed: "@",
                centerMode: "@",
                centerPadding: "@",
                cssEase: "@",
                customPaging: "&",
                dots: "@",
                draggable: "@",
                easing: "@",
                fade: "@",
                focusOnSelect: "@",
                infinite: "@",
                initialSlide: "@",
                lazyLoad: "@",
                onBeforeChange: "&",
                onAfterChange: "&",
                onInit: "&",
                onReInit: "&",
                onSetPosition: "&",
                pauseOnHover: "@",
                pauseOnDotsHover: "@",
                responsive: "=",
                rtl: "@",
                slide: "@",
                slidesToShow: "@",
                slidesToScroll: "@",
                speed: "@",
                swipe: "@",
                swipeToSlide: "@",
                touchMove: "@",
                touchThreshold: "@",
                useCSS: "@",
                variableWidth: "@",
                vertical: "@",
                prevArrow: "@",
                nextArrow: "@"
            },
            link: function(i, s, a) {
                var t, n, l;
                return t = function() {
                    return e(function() {
                        var e;
                        return e = $(s), e.unslick(), e.find(".slick-list").remove(), e
                    })
                }, n = function() {
                    return e(function() {
                        var e, t, n;
                        return n = $(s), null != i.currentIndex && (e = i.currentIndex), t = function(e, s) {
                            return i.customPaging({
                                slick: e,
                                index: s
                            })
                        }, n.slick({
                            accessibility: "false" !== i.accessibility,
                            adaptiveHeight: "true" === i.adaptiveHeight,
                            arrows: "false" !== i.arrows,
                            asNavFor: i.asNavFor ? i.asNavFor : void 0,
                            appendArrows: $(i.appendArrows ? i.appendArrows : s),
                            appendDots: $(i.appendDots ? i.appendDots : s),
                            autoplay: "true" === i.autoplay,
                            autoplaySpeed: null != i.autoplaySpeed ? parseInt(i.autoplaySpeed, 10) : 3e3,
                            centerMode: "true" === i.centerMode,
                            centerPadding: i.centerPadding || "50px",
                            cssEase: i.cssEase || "ease",
                            customPaging: a.customPaging ? t : void 0,
                            dots: "true" === i.dots,
                            draggable: "false" !== i.draggable,
                            easing: i.easing || "linear",
                            fade: "true" === i.fade,
                            focusOnSelect: "true" === i.focusOnSelect,
                            infinite: "false" !== i.infinite,
                            initialSlide: i.initialSlide || 0,
                            lazyLoad: i.lazyLoad || "ondemand",
                            onReInit: a.onReInit ? i.onReInit : void 0,
                            onSetPosition: a.onSetPosition ? i.onSetPosition : void 0,
                            pauseOnHover: "false" !== i.pauseOnHover,
                            responsive: i.responsive || void 0,
                            rtl: "true" === i.rtl,
                            slide: i.slide || "div",
                            slidesToShow: null != i.slidesToShow ? parseInt(i.slidesToShow, 10) : 1,
                            slidesToScroll: null != i.slidesToScroll ? parseInt(i.slidesToScroll, 10) : 1,
                            speed: null != i.speed ? parseInt(i.speed, 10) : 300,
                            swipe: "false" !== i.swipe,
                            swipeToSlide: "true" === i.swipeToSlide,
                            touchMove: "false" !== i.touchMove,
                            touchThreshold: i.touchThreshold ? parseInt(i.touchThreshold, 10) : 5,
                            useCSS: "false" !== i.useCSS,
                            variableWidth: "true" === i.variableWidth,
                            vertical: "true" === i.vertical,
                            prevArrow: i.prevArrow ? $(i.prevArrow) : void 0,
                            nextArrow: i.nextArrow ? $(i.nextArrow) : void 0
                        }), n.on("init", function(s) {
                            return a.onInit && i.onInit(), null != e ? s.slideHandler(e) : void 0
                        }), n.on("beforeChange", function() {
                            i.onBeforeChange && i.onBeforeChange()
                        }), n.on("afterChange", function(s, a, t) {
                            return i.onAfterChange && (i.$apply(function() {
                                return e = t, i.currentIndex = t
                            }), i.onAfterChange()), null != e ? i.$apply(function() {
                                return e = t, i.currentIndex = t
                            }) : void 0
                        }), i.$watch("currentIndex", function(i) {
                            return null != e && null != i && i !== e ? n.slick("slickGoTo", i) : void 0
                        })
                    }, 500)
                }, i.initOnload ? (l = !1, i.$watch("data", function(e) {
                    return null != e ? (l && t(), n(), l = !0) : void 0
                })) : n()
            }
        }
    }]),
    function() {
        angular.module("aesop", ["ngAnimate", "ngTouch", "ngSanitize", "angular-images-loaded", "infinite-scroll", "restangular", "ui.router", "duScroll", "slick", "ngDialog", "socialLinks", "tinacious.fluidVid", "angulartics", "angulartics.google.analytics"]).config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "RestangularProvider", "$provide", "$analyticsProvider", function(e, i, s, a, t, n) {
            var l, o, r, c, d, p;
            return t.decorator("$browser", ["$delegate", "$window", function(e, i) {
                var s, a;
                return n.firstPageview(!0), n.withAutoBase(!0), a = function(e) {
                    return /(iPhone|iPad|iPod).* OS 9_\d/.test(e) && !/Version\/9\./.test(e)
                }, s = function(e) {
                    var i, s, a;
                    return a = null, s = e.url, i = function() {
                        a = null
                    }, e.url = function() {
                        return arguments.length ? (a = arguments[0], s.apply(e, arguments)) : a || s.apply(e, arguments)
                    }, window.addEventListener("popstate", i, !1), window.addEventListener("hashchange", i, !1), e
                }, a(i.navigator.userAgent) ? s(e) : e
            }]), window.mediaServer = "http://d1rqq2np2rwv49.cloudfront.net", i.hashPrefix("!"), d = window.localStorage.language, l = window.serverName = "http://127.0.0.1:8080", d ? l += "/" + d : (p = function() {
                try {
                    return !!localStorage.getItem("oldVisitor")
                } catch (e) {
                    return r = e, console.log(r)
                }
            }(), p || (l += "/en-us")), a.setDefaultHttpFields({
                cache: !0
            }), a.setBaseUrl(l + "/api/"), c = {
                "content@home": {
                    templateUrl: "app/components/grid/grid.html"
                }
            }, o = function(e) {
                var i, s, a, t, n, l;
                for (n = ["intro", "header", "content", "footer"], i = {
                        main: {
                            templateUrl: "app/main/main.html"
                        }
                    }, s = 0, a = n.length; a > s; s++) t = n[s], l = t, "content" === t && (l = "store" === e ? "store" : "grid"), i[t + "@" + e] = {
                    templateUrl: "app/components/" + l + "/" + l + ".html"
                };
                return i
            }, e.state("home", {
                url: "/",
                "abstract": !0,
                views: o("home")
            }).state("home.all", {
                url: "^/",
                views: c
            }).state("home.stores", {
                url: "^/stores",
                views: c
            }).state("home.designers", {
                url: "^/designers",
                views: c
            }).state("home.features", {
                url: "^/features",
                views: c
            }).state("home.materials", {
                url: "^/materials",
                views: c
            }).state("home.quotes", {
                url: "^/quotes",
                views: c
            }).state("home.films", {
                url: "^/films",
                views: c
            }).state("store", {
                url: "^/store?store&section",
                views: o("store")
            }).state("designer", {
                url: "^/designer?designer",
                views: o("designer")
            }).state("search", {
                url: "^/search?q",
                views: o("search")
            }), s.otherwise("/")
        }])
    }.call(this),
    function() {
        angular.module("aesop").controller("StoreCtrl", ["$scope", "$rootScope", "Restangular", "$stateParams", "$uiViewScroll", "$document", "$timeout", "$window", "ngDialog", "layout", "$state", function(e, i, s, a, t, n, l, o, r, c, d) {
            var p, u, v, g, h, m, f;
            v = [
                [1, 1, 3, 1],
                [3, 3, 0, 0],
                [3, 1, 1, 0, 0],
                [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 3, 1],
                [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
                [3, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 1, 0, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 1, 1, 3, 1, 1, 0, 0],
                [0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [1, 0, 0, 0, 1, 0, 1],
                [1, 1, 1, 1, 0, 0],
                [1, 1, 1, 1, 1],
                [1, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
                [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
                [3, 1, 1, 1, 4, 2, 3, 3],
                [4, 1, 1, 3, 1, 1, 1, 4, 2, 3, 1],
                [4, 1, 1, 2, 2, 1, 1, 4, 3, 3],
                [3, 1, 1, 1, 4, 2, 2, 2, 1, 3, 3],
                [1, 1, 2, 3, 3, 4, 2, 2, 1, 1, 1, 1],
                [1, 1, 3, 1, 3, 1, 1, 1],
                [2, 1, 1, 2, 3, 1, 1],
                [4, 2, 3, 1, 1],
                [2, 4, 3, 3],
                [1, 1, 1, 1, 4, 3],
                [1, 2, 1, 3, 3, 1],
                [1, 1, 2, 1, 1, 2, 1, 1],
                [4, 1, 1, 2, 2],
                [2, 3, 3, 2, 2]
            ], e.mainWrapper = [], e.section = a.section, e.store = a.store, e.count = 0, i.page = "page-store", e.centerMode = i.isDesktop ? "true" : "false", p = [], e.openGallery = function(i) {
                var s, a;
                for (i--, s = p.length, a = []; s;) a.push(p[i]), i++, i >= p.length && (i = 0), s--;
                e.gallery = a, r.open({
                    template: "gallery",
                    scope: e,
                    className: "dialog"
                })
            }, m = function(s) {
                var a, t, n, l, o, r, c, d, u, v, g;
                for (d = s.layout.items, v = [], l = [], t = 1, r = 1, a = 0, n = d.length; n > a; a++) c = d[a], c.hidden || ("inspire" === c.type ? (c.index = t, o = s["inspire_photo" + r], o && (o = window.mediaServer + "/media/" + o, c.photo = o, g = s["inspire_photo" + r + "_uncropped"], g && (o = window.mediaServer + "/media/" + g), "None" !== s.video && "" !== s.video && 1 === t ? (c.type = "video", r--) : p.push({
                    src: o,
                    share: window.serverName + "/share/store/" + s.id + "/?image=" + window.mediaServer + "/media/" + g
                }), v.push(c)), t++, r++) : (u = c.type, "intro" === u && (u = "introduction"), l.push({
                    title: u,
                    url: c.type
                }), v.push(c)));
                e.gallery = p, i.nav = l, e.sectionToDisplay = v
            }, e.mail = function(e) {
                return o.open("mailto:?subject=Aesop " + i.storeName + "&body=" + e, "Aesop " + i.storeName, "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"), !1
            }, g = function(i, s, a) {
                var t, n, l, o;
                for (t = 0, n = s.length; n > t; t++) o = s[t], l = i[o], "None" !== l && (a && (l = window.mediaServer + "/media/" + l), e[o] = l)
            }, f = function() {
                var e;
                e = function() {
                    switch (a.section) {
                        case "material":
                        case "feature":
                            return "features_materials";
                        case "quote":
                            return "quote";
                        default:
                            return ""
                    }
                }(), e = angular.element("#" + e), e.length > 0 ? n.duScrollTo(e, 118, 0) : n.duScrollTo(0, 0, 0)
            }, u = function() {
                return e.mainWrapper = [], s.all("store").get(a.store).then(function(s) {
                    var a, t, n, o, r;
                    for (m(s), i.storeName = s.title, i.storeLocation = s.subtitle, g(s, ["intro_description", "text_copy1", "text_copy2", "designer_title", "latitude", "longitude", "street_address", "az_link", "az_title", "az_description", "video", "quotes", "aesop_com_store_detail_link"]), null === e.az_title && (e.az_title = e.storeLocation), g(s, ["location_photo1", "location_photo2", "intro_photo"], !0), s.further_information.length > 0 && (e.further_informations = s.further_information), e.quotes && (e.quote = s.quotes[0].title, e.author = s.quotes[0].subtitle), s.designer_image && (e.designer_title = s.designer_image.title, s.designer_image.image_duotone && (e.designer_image = window.mediaServer + "/media/" + s.designer_image.image_duotone)), e.designer_url = d.href("designer", {
                            designer: s.designer.id
                        }), r = s.images.combinations, t = 0, o = r.length; o > t; t++) a = r[t], null != a && (n = 100 === a.combination_id ? null : v[a.combination_id - 24], e.mainWrapper = c.createLayout({
                        items: a.items,
                        layout: n,
                        page: "store",
                        mainWrapper: e.mainWrapper
                    }));
                    l(function() {
                        i.$broadcast("dataReady")
                    }, 2e3, !1)
                }), s.one("site").get().then(function(e) {
                    return i.translations = e
                })
            }, h = i.$on("refreshTranslation", u), u(), l(f, i.transitionDelay, !1), e.$on("$destroy", function() {
                return h()
            })
        }])
    }.call(this),
    function() {
        angular.module("aesop").directive("sticky", ["$window", "$rootScope", function(e, i) {
            var s;
            return s = function(s, a, t) {
                var n, l;
                n = function() {
                    var n, o, r, c, d, p, u, v, g, h, m, f, y, b, w, k, _, x, T, $, S, C;
                    return f = void 0, d = void 0, e = void 0, n = void 0, c = void 0, g = void 0, h = void 0, m = !1, S = void 0, $ = void 0, b = void 0, x = void 0, _ = void 0, k = function() {
                        v(), g.offsetWidth = d.offsetWidth, C("top"), u(), m && a.css
                    }, w = function() {
                        e.off("scroll", r), e.off("resize", k), l()
                    }, r = function() {
                        var e, i, s, a, t, n;
                        a = void 0, n = void 0, t = void 0, t = window.pageYOffset || c.scrollTop, a = t - (c.clientTop || 0), n = a >= S && $ >= a, n && !m ? T() : !n && m && (s = void 0, i = void 0, e = void 0, i = [S, $], e = p(i, a), e === S ? s = "top" : e === $ && (s = "bottom"), C(s, a))
                    }, p = function(e, i) {
                        var s, a, t, n;
                        a = 0, n = 1e3, s = void 0;
                        for (a in e) t = Math.abs(i - e[a]), n > t && (n = t, s = e[a]);
                        return s
                    }, T = function() {
                        var e, i;
                        i = void 0, e = void 0, i = a[0].getBoundingClientRect(), e = i.left, g.offsetWidth = d.offsetWidth, m = !0, a.parent().hide().show(0), a.css({
                            width: d.offsetWidth + "px",
                            position: "fixed",
                            left: e,
                            "margin-top": 0
                        }), a.css("top", b + "px")
                    }, C = function(e) {
                        m = !1, "top" === e ? a.css({
                            width: "",
                            top: g.top,
                            position: g.position,
                            left: g.cssLeft,
                            "margin-top": g.marginTop
                        }) : "bottom" === e && a.css({
                            width: "",
                            top: "",
                            bottom: 0,
                            position: "absolute",
                            left: g.cssLeft,
                            "margin-top": g.marginTop,
                            "margin-bottom": g.marginBottom
                        })
                    }, o = function(e) {
                        var i;
                        if (i = 0, e.offsetParent)
                            for (;;)
                                if (i += e.offsetTop, e = e.offsetParent, !e) break;
                        return i
                    }, u = function() {
                        x = o(d), a.parent().css({
                            position: "relative"
                        }), S = x - b, $ = _ - a.height() + S, r()
                    }, v = function() {
                        var e;
                        return e = angular.element(a).parent(), _ = e.parent().height(), e.height(_)
                    }, v(), e = angular.element(window), i.isTouch ? void 0 : (h = !1, m = !1, n = angular.element(document.body), d = a[0], c = document.documentElement, f = t.mediaQuery || !1, b = 118, g = {
                        top: a.css("top"),
                        width: a.css("width"),
                        position: a.css("position"),
                        marginTop: a.css("margin-top"),
                        cssLeft: a.css("left")
                    }, s.$on("scroll::scroll", r), y = e.on("resize", function() {
                        return k()
                    }), s.$on("$destroy", function() {
                        return w()
                    }), u())
                }, l = i.$on("dataReady", n)
            }, {
                restrict: "A",
                link: s
            }
        }])
    }.call(this),
    function() {
        angular.module("aesop").controller("MapCtrl", ["$scope", "$rootScope", function(e, i) {
            i.$on("dataReady", function() {
                var i, s;
                s = {
                    zoom: 16,
                    center: new google.maps.LatLng(e.$parent.latitude, e.$parent.longitude),
                    disableDefaultUI: !0,
                    panControl: !1,
                    zoomControl: !1,
                    scaleControl: !1,
                    styles: [{
                        featureType: "all",
                        elementType: "geometry",
                        stylers: [{
                            color: "#fffef3"
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                            gamma: .01
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            saturation: -31
                        }, {
                            lightness: -33
                        }, {
                            weight: 2
                        }, {
                            gamma: .8
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                            weight: "0.39"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            color: "#ff0000"
                        }, {
                            visibility: "off"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            lightness: 30
                        }, {
                            saturation: 30
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "labels.text.fill",
                        stylers: [{
                            weight: "0.73"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            saturation: 20
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            lightness: 20
                        }, {
                            saturation: -20
                        }]
                    }, {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{
                            lightness: 10
                        }, {
                            saturation: -30
                        }, {
                            color: "#e4e2d9"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{
                            saturation: 25
                        }, {
                            lightness: 25
                        }]
                    }, {
                        featureType: "road",
                        elementType: "labels.text",
                        stylers: [{
                            color: "#2e2e2e"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "off"
                        }, {
                            weight: "0.39"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }, {
                            color: "#ff0000"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road.highway.controlled_access",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry.stroke",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "labels",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#737270"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "off"
                        }, {
                            color: "#b3b1ac"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit.station",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{
                            lightness: -20
                        }, {
                            color: "#edece7"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry.stroke",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#c3c2be"
                        }, {
                            weight: "0.32"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            color: "#ff0000"
                        }, {
                            visibility: "off"
                        }]
                    }]
                }, i = {
                    path: "M878.2,-313.4 681.6,-510 480,-313.4 681.6,-111.8 878.2,-313.4",
                    fillColor: "#FFFEF3",
                    fillOpacity: 1,
                    strokeColor: "#20201E",
                    strokeWeight: 4,
                    strokeOpacity: 1,
                    anchor: new google.maps.Point(480, 280),
                    scale: .05
                }, e.map = new google.maps.Map(document.getElementById("map"), s), new google.maps.Marker({
                    position: new google.maps.LatLng(e.$parent.latitude, e.$parent.longitude),
                    map: e.map,
                    icon: i,
                    title: "Aesop"
                })
            })
        }])
    }.call(this),
    function() {
        angular.module("aesop").filter("splitTranslation", function() {
            return function(e) {
                var i;
                return e ? (e = function() {
                    var s, a, t, n;
                    for (t = e.split(/(?:\n\r)/g), n = [], s = 0, a = t.length; a > s; s++) i = t[s], n.push('<span class="line">' + i.replace(/(?:\r\n|\r|\n)/g, "") + "</span>");
                    return n
                }(), e.join("")) : void 0
            }
        }).controller("IntroCtrl", ["$scope", "$rootScope", function(e, i) {
            e.button = i.translations.philosophy_close || "close"
        }])
    }.call(this),
    function() {}.call(this),
    function() {
        angular.module("aesop").controller("HeaderCtrl", ["$scope", "$rootScope", "$state", "$stateParams", "$document", "$timeout", "$window", function(e, i, s, a, t, n, l) {
            var o, r, c, d, p, u, v, g, h, m, f, y, b;
            if (g = ["all", "stores", "designers", "features", "materials", "quotes", "films"], e.lang = [{
                    abbr: "日本語",
                    code: "ja"
                }, {
                    abbr: "한국어",
                    code: "ko"
                }, {
                    abbr: "简体中文",
                    code: "zh-cn"
                }, {
                    abbr: "繁體中文",
                    code: "zh-tw"
                }, {
                    abbr: "English",
                    code: "en-us"
                }], o = !1, p = 60, y = 88, b = 110, f = 0, i.nav = [], e.searchInput = null, e.showPhilosophy = !0, e.mainHeader = !1, e.offset = i.isDesktop ? 120 : 78, e.isMobile = !i.isDesktop, angular.equals({}, a)) e.mainHeader = !0, b = y, i.nav = g;
            else switch (i.isDesktop || (i.nav = g), s.current.name) {
                case "designer":
                    n(function() {
                        return t.duScrollTo()
                    }, i.transitionDelay, !1);
                    break;
                case "search":
                    e.isSearch = !0, e.searchInput = a.q, e.storeName = a.q, i.state += " search", e.showPhilosophy = !1;
                    break;
                case "store":
                    e.showPhilosophy = !1
            }
            e.toggleNav = function() {
                o = !o, e.navState = o ? "nav-open" : ""
            }, e.philosophy = function() {
                s.transitionTo("home.all"), i.$broadcast("showIntro")
            }, e.switchLang = function(e) {
                window.localStorage.language = e, i.$broadcast("refreshTranslation")
            }, e.mail = function() {
                l.open("mailto:?subject=" + i.translations.title + "&body=" + i.translations.sharing_message, i.translations.title, "left=20,top=20,width=500,height=500,toolbar=1,resizable=0")
            }, u = e.fixMe, e.activeFixHeader = "", d = !1, m = 0, v = function(e) {
                var s;
                return s = e > f && !i.isTouch ? e - f : 0, {
                    transform: "translate3d(0," + s + "px,0)"
                }
            }, r = function() {
                e.activeFixHeader = f > 0 ? "active" : "", e.transformLogo = v(p), e.transformSubLogo = v(y), d = f > b + 18, e.$digest()
            }, c = function() {
                var i, s;
                f = t.scrollTop(), s = s > 5 ? 5 : f - m, m = f, u = f > b - s ? "active" : "", i = !1, e.fixMe !== u && (e.fixMe = u, i = !0), b + 50 > f || !d ? r() : i && e.$digest()
            }, h = e.$on("scroll::scroll", c), n(function() {
                return r()
            }, i.transitionDelay, !1), e.$on("$destroy", function() {
                return h()
            })
        }])
    }.call(this),
    function() {
        angular.module("aesop").directive("tile", ["$rootScope", "Restangular", "$window", function(e, i, s) {
            return {
                link: function(a, t, n) {
                    var l, o, r, c, d, p;
                    return p = window.mediaServer + "/media/", c = e.webP ? ".jpg" : ".webp", c = ".jpg", l = JSON.parse(n.ngBrick), l.image_duotone ? (d = p + l.image_duotone, o = p + l.image_colour) : (d = p + l.image_colour, o = null), r = {
                        "background-image": "url(" + o + ")",
                        opacity: 0
                    }, a.overlay = "", a.overlayDuotone = {
                        "background-image": "url(" + d + ")"
                    }, a.link = d, a.brickid = l.id, a.title = l.title, a.subtitle = l.subtitle, a.isFilm = a.$parent.isMovieSection || "film" === l.element_type, a.element_type = l.element_type, a.socialShare = "store" === a.element_type || "designer" === a.element_type, a.stop = function(e) {
                        return e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1
                    }, a.ref = a.isFilm ? null : l.ref, a.id = n.ngId, a.video = 0, a.open = function() {
                        var s;
                        return a.isFilm && (a.$parent.isDesktop ? e.$emit("openVideoGallery", a.brickid) : (s = a.$parent.findVideosFromId(a.brickid), i.all(s.video.element_type).get(s.video.element_id).then(function(e) {
                            return a.video = e.video
                        }))), !0
                    }, a.loadSharingData = function() {
                        var e, s;
                        return a.isFilm ? (s = a.$parent.findVideosFromId(a.brickid), e = s.video) : e = l, i.all(e.element_type).get(e.element_id).then(function(e) {
                            return a.share = window.serverName + "/share/store/" + e.id + "/?image=" + window.mediaServer + "/media/inspire_uncropped/" + e.inspire_photo1, a.photo = window.mediaServer + "/media/inspire_uncropped/" + e.inspire_photo1, e.video_id = e.video, a.currentVideo = e
                        })
                    }, a.mail = function(e) {
                        var t, n;
                        return a.stop(e), a.isFilm ? (t = a.$parent.findVideosFromId(a.brickid), n = t.video, n && i.all(n.element_type).get(n.related_store).then(function(e) {
                            return s.open("mailto:?subject=Aesop " + a.title + "&body=https://vimeo.com/" + e.video, "Aesop " + a.title, "left=20,top=20,width=500,height=500,toolbar=1,resizable=0")
                        })) : s.open("mailto:?subject=Aesop " + a.title + "&body=" + window.serverName + "/" + a.ref, "Aesop " + a.title, "left=20,top=20,width=500,height=500,toolbar=1,resizable=0"), !1
                    }, l.image_duotone && !e.isTouch ? (t.on("mouseleave", function() {
                        r.opacity = 0, a.overlay = r, a.$digest()
                    }), t.on("mouseenter", function() {
                        r.opacity = 1, a.overlay = r, a.$digest()
                    })) : void 0
                },
                templateUrl: "app/components/grid/tile.html",
                restrict: "EA",
                transclude: !0,
                replace: !0,
                scope: {
                    ngBrick: "@"
                }
            }
        }])
    }.call(this),
    function() {
        var e;
        e = angular.module("aesop"), e.factory("layout", ["$state", function(e) {
            return {
                addBrick: function(i) {
                    return "store" === this.page ? i.image_duotone = null : i.ref = "designer" === i.element_type && "designer" !== this.page ? e.href("designer", {
                        designer: i.element_id
                    }) : e.href("store", {
                        store: i.related_store,
                        section: i.element_type
                    }), i.size = "s" + i.size, i.isImage = null != i.image_duotone && "" !== i.image_duotone, i
                },
                createLayout: function(e) {
                    var i, s, a, t, n, l, o, r, c, d, p, u, v, g, h, m, f, y, b, w, k, _, x, T, $, S, C, I, D, z, P, q, A, N, V, L, W, F;
                    if (this.page = e.page, h = e.layout, p = e.items, $ = e.mainWrapper, z = [], i = [], s = {
                            size: "",
                            bricks: []
                        }, null != h) {
                        if ("store" === this.page) {
                            for (u = 0, m = h.length; m > u; u++)
                                for (D = h[u], C = v = 0, f = p.length; f > v; C = ++v)
                                    if (d = p[C], d.size === D && !d.used) {
                                        z.push(d), d.used = !0;
                                        break
                                    }
                        } else
                            for (L = h.filter(function(e) {
                                    return "r" !== e && "c" !== e
                                }), L = (N = []).concat.apply(N, (A = []).concat.apply(A, L)), r = g = 0, y = L.length; y > g; r = ++g)
                                for (D = L[r], C = T = 0, b = p.length; b > T; C = ++T)
                                    if (d = p[C], d.size === D && !d.used) {
                                        z.push(d), d.used = !0;
                                        break
                                    } for (V = !1, c = S = 0, w = h.length; w > S; c = ++S)
                            if (n = h[c], t = "r" === h[0] && 1 === c || 0 === c || "c" === h[c - 1] ? " clearLeft" : "", "r" === n || "c" === n) "r" === n && (V = !0);
                            else {
                                if (F = 0, n.constructor === Array)
                                    for (I = 0, k = n.length; k > I; I++)
                                        if (l = n[I], "r" === l) V = !0;
                                        else {
                                            if (W = 0, l.constructor === Array)
                                                for (P = 0, _ = l.length; _ > P; P++) o = l[P], o > F && (F = o), o > W && (W = o), z.length > 0 && i.push(this.addBrick(z.shift()));
                                            else l > F && (F = l), W = l, z.length > 0 && i.push(this.addBrick(z.shift()));
                                            a = "s" + W, V && (a = "reverse " + a, V = !1), s.bricks.push({
                                                bricks: i,
                                                size: a
                                            }), i = []
                                        }
                                else z.length > 0 && (i.push(this.addBrick(z.shift())), F = n, s.bricks.push({
                                    bricks: i,
                                    size: "s" + n
                                }), i = []);
                                V ? (s.size = "reverse s" + F, V = !1) : s.size = "s" + F, s.size = s.size + t, $.push(s), s = {
                                    size: "",
                                    bricks: []
                                }
                            }
                    } else
                        for (q = 0, x = p.length; x > q; q++) n = p[q], i.push(this.addBrick(n)), s.bricks.push({
                            bricks: i,
                            size: "s" + n.size
                        }), i = [], s.size = "rest " + n.size, $.push(s), s = {
                            size: "",
                            bricks: []
                        };
                    return $
                }
            }
        }])
    }.call(this),
    function() {
        angular.module("aesop").controller("GridCtrl", ["$scope", "$rootScope", "Restangular", "$stateParams", "$state", "$window", "$document", "$timeout", "layout", "ngDialog", "$filter", function(e, i, s, a, t, n, l, o, r, c, d) {
            var p, u, v, g, h, m, f, y, b, w, k, _, x, T, $, S;
            p = null, y = [], b = [], u = [
                [6, [0, 0], 1, 3, "c", [1, [0, 0], 3], 4, 2],
                ["r", [
                        [1, 1], 5
                    ],
                    [
                        [0, 0], 4
                    ],
                    [2, 0],
                    [0, 1],
                    [3, [0, 0]]
                ],
                [
                    [3, [0, 0],
                        [0, 1],
                        [1, 0]
                    ], 6, 3, 1
                ],
                [
                    [6, [3, 1, 0, 0], 2], 1, 1, 4, 3
                ],
                [6, 1, [0, 0], 3, 2, [0, 1, 0], 6],
                [4, [1, [0, 0], 3], 2, 2, [3, "r", 1, [0, 0]], 4],
                [
                    [5, 0, 0], 3, 1, [0, 2], 4, 0, 0
                ],
                [
                    [2, 0, 0],
                    [1, 2], 4, 1, 1, 1, 1, 1
                ],
                [6, 3, 1, 1, ["r", 1, [0, 0], 3], 4, 1, 0, 0],
                [
                    [1, 1, 1], 2, 6, 3, 1, 1
                ],
                [5, 3, "r", 2, 2, 1, 3],
                [3, "r", 4, "r", 2, 2, 1, 3, 1, 1],
                [1, 1, 1, "r", 5, 4, 2, 2, [1, 1], 4, 2],
                [
                    [1, 0, 0], 4, 1, [0, 0], 3, 1, 3, 1, 1
                ],
                [
                    [2, 2, 3], 3, "r", 2, 2, [0, 0], 3
                ],
                ["r", [3, 2, 2], 2, 4, 3, [0, 0]],
                [6, 3, 3],
                [
                    [3, 3], 6
                ],
                [
                    [5, 3], 6, 6
                ],
                [
                    [6, 6], 3, 5
                ],
                [
                    [3, 3], 6, 6, 3, 3
                ],
                [6, 3, 3, [3, 3], 6],
                [5, 6, 6],
                [1, 3, 1, 1],
                [3, [0, 0], 3],
                [1, 1, 3, [0, 0]],
                [
                    [0, 1],
                    [1, 0],
                    [0, 1],
                    [1, 0],
                    [0, 1]
                ],
                [
                    [0, 0], 1, [0, 0], 1, [0, 0]
                ],
                [1, [0, 0], 1, [0, 0], 1],
                [1, 1, 1, 1, 1],
                [1, 1, 3, 1],
                [
                    [1, 0],
                    [0, 1],
                    [1, 0],
                    [0, 1],
                    [1, 0]
                ],
                [3, [0, 0],
                    [0, 0],
                    [0, 0]
                ],
                [0, 0, "r", 3, "r", 1, [0, 1], 1, "r", 1, "r", 1, "r", 1, 0],
                [
                    [0, 0, 1], 0, 0, "r", 1, "r", 1, 3, "r", 1, "r", 1, 0, 0
                ],
                [
                    [0, 0], 1, 1, 0, 0, "r", 1, "r", 1, 1, [0, 0], 1, 0, 0
                ],
                [
                    [0, 0, 0],
                    [0, 1], 1, 1, 1, 0, 0, 0
                ],
                [1, [0, 0],
                    [0, 0], 1, 1
                ],
                [1, 1, 1, 1, [0, 0]],
                [1, 1, 1, 1, 1],
                [1, [0, 0], 1, 1, 1],
                [0, 0, 0, 0, 0],
                [
                    [0, 1, 0],
                    [0, 1, 0], 1, 1, 1, 1, [0, 0], 1
                ],
                [
                    [1, 0, 0],
                    [1, 1],
                    [0, 1, 0],
                    [0, 0, 1], 1, 1
                ],
                [1, 3, "r", 4, 2, 3, 1, 3, 1],
                [
                    [4, 1, 1, 3], 1, 1, 1, 2, 4, 1, 3
                ],
                [
                    [4, 1, "r", 2, 1],
                    [2, 1], 3, 4, 3, 1
                ],
                [3, "r", 4, "r", 2, [1, 2], 2, 1, 3, 3, 1, 1],
                [1, 1, 3, "r", 2, [3, 4],
                    [1, 2], "r", [2, 1], 1, 1
                ],
                [1, 1, 3, 1, 3, 1, 1, 1],
                [2, [1, 1, 3], 2, 1, 1],
                [
                    [3, 1, 1], 4, 2
                ],
                [2, 4, 3, 3],
                [
                    [1, 1],
                    [1, 1, 3], 4
                ],
                [
                    [1, 1], 2, 1, 3, 3, 1
                ],
                [
                    [1, 1], 2, [1, 1], 2, [1, 1]
                ],
                [4, [1, 1], 2, 2],
                [2, [3, 3], 2, 2],
                [
                    [5, 5], 6, 6, 6
                ],
                [
                    [5, 5], 6, 6, 6
                ]
            ], w = [
                [6, 3, [0, 0], 1, 3, 4, 2, 0, 0, 1],
                [1, 1, 5, 0, 0, 4, 2, 0, 1, 0, 3, 0, 0],
                [3, [0, 0], 1, 0, 0, 11, 6, 3],
                [6, 3, 1, 0, 0, 2, 1, 1, 4, 3],
                [6, 1, 0, 0, 3, 2, 1, 0, 0, 6],
                [4, 1, 0, 0, 3, 2, 2, 3, 1, 0, 0, 4],
                [5, 0, 0, 3, 2, 1, 0, 0, 4, 0],
                [2, 0, 0, 1, 2, 1, 1, 4, 1, 1],
                [6, 3, 1, 1, 1, 0, 0, 3, 4, 1, 0, 0],
                [1, 1, 2, 1, 1, 6, 3],
                [5, 3, 2, 2, 3],
                [3, 4, 2, 2, 3, 1, 1],
                [1, 1, 5, 4, 2, 2, 4, 2, 1, 1],
                [1, 0, 0, 4, 1, 0, 0, 3, 3, 1, 1],
                [2, 2, 3, 3, 2, 2, 0, 0, 3],
                [3, 2, 2, 2, 0, 0, 4, 3],
                [6, 3, 3],
                [3, 3, 6],
                [5, 3, 6, 6],
                [6, 6, 3, 5],
                [3, 3, 6, 6, 3, 3],
                [6, 3, 3, 3, 3, 6],
                [1, 1, 3],
                [3, 3, 0, 0],
                [3, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
                [0, 0, 1, [0, 0], 1, [0, 0]],
                [1, [0, 0], 1, [0, 0]],
                [1, 1, 1, 1],
                [1, 1, 3],
                [1, 0, 0, 1, 1, 0, 0, 1, 1],
                [3, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 1, 0, 0, 1, 1, 1, 1],
                [0, 0, 1, [0, 0], 1, 1, 3, 1, 1, 0, 0],
                [
                    [0, 0], 1, 1, 0, 0, 1, 1, 1, [0, 0], 1, [0, 0]
                ],
                [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
                [1, [0, 0],
                    [0, 1],
                    [0, 1]
                ],
                [1, 1, 1, 1, 0, 0],
                [1, 1, 1, 1],
                [1, [0, 0], 1, 1],
                [0, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                [1, 1, [0, 0], 1, 1, 0, 0, 0, 0, 1, 1],
                [3, 4, 2, 1, 1, 3, 3],
                [4, 1, 1, 3, 1, 1, 4, 2, 1, 1, 3],
                [4, 1, 1, 2, 2, 1, 1, 4, 3, 3],
                [3, 1, 1, 4, 2, 2, 2, 1, 1, 3, 3],
                [2, 1, 1, 3, 3, 4, 2, 2, 1, 1, 1, 1],
                [1, 1, 3, 1, 1, 3, 1, 1],
                [2, 1, 1, 2, 1, 1, 3],
                [4, 2, 1, 1, 3],
                [4, 3, 3],
                [1, 1, 1, 1, 4, 3],
                [2, 1, 1, 3, 3],
                [1, 1, 2, 1, 1, 2, 1, 1],
                [4, 1, 1, 2, 2],
                [3, 3, 2, 2],
                [
                    [5, 5], 6, 6, 6
                ],
                [
                    [5, 5], 6, 6, 6
                ]
            ], T = 0, f = !1, i.isDesktop && (e.imageHeight = i.mediaHeight), h = function() {
                y = i.isDesktop ? u : w, T = 0, e.limit = 0, null != p && (e.getBrick(), e.$digest())
            }, e.mainWrapper = null, e.scrollEnable = !0, i.storeLocation = "", e.limit = 0, e.distance = i.isTouch ? 800 : 0, e.videos = [], e.isMovieSection = !1, e.carouselReady = !1, m = !1, e.getBrick = function() {
                var s, a, t;
                a = p.combinations.length, a && a > T && (t = p.combinations[T], s = 100 === t.combination_id ? null : y[t.combination_id - 1], b = r.createLayout({
                    items: t.items,
                    layout: s,
                    page: S,
                    mainWrapper: b
                }), e.limit += t.items.length, e.mainWrapper = b, T++, e.scrollEnable && (e.showMore = T !== a && 100 !== t.combination_id), "page-search" === i.page && (e.showClear = T === a || 100 === t.combination_id))
            }, e.initInfinite = function() {
                i.$emit("stickyFooter"), e.showMore = !1, e.scrollEnable = !1
            }, t.current.name.indexOf("home") >= 0 ? e.section = $ = t.current.name.replace("home.", "") : (f = !0, e.section = $ = t.current.name + "s"), e.showMore = !1, e.showFilters = "home.all" !== t.current.name, S = "", "all" !== $ && "home" !== $ && (S = $), x = i.$on("updateLayout", h), i.storeName = null, v = function() {
                return e.videos = [], f ? (e.gridClass = "designer-container", a.hasOwnProperty("designer") ? s.all("designer").get(a.designer).then(function(s) {
                    var a, t;
                    for (i.storeName = s.title, i.page = "page-designer", p = s.images, a = 6, t = []; a--;) t.push(e.getBrick());
                    return t
                }) : s.all("search").get("?q=" + a.q).then(function(s) {
                    return i.storeName = s.title, i.page = "page-search", e.page = "page-search", e.showClear = !e.showMore, p = s, s.combinations.length ? e.getBrick() : e.mainWrapper = []
                })) : s.all("").get(S).then(function(s) {
                    var a, t, n, l, o, r, c, d, u, v;
                    if (i.page = "page-grid", p = s, "films" === S)
                        for (i.page = "page-grid page-videos", e.isMovieSection = !0, d = p.combinations, t = 0, r = d.length; r > t; t++)
                            for (a = d[t], u = a.items, l = 0, c = u.length; c > l; l++) n = u[l], n.colorImage = window.mediaServer + "/media/" + n.image_colour, e.videos.push(n);
                    for (o = function() {
                            switch (S) {
                                case "features":
                                case "stores":
                                case "films":
                                    return 4;
                                case "materials":
                                case "quotes":
                                    return 6;
                                default:
                                    return 2
                            }
                        }(), v = []; o--;) v.push(e.getBrick());
                    return v
                })
            }, v(), h(), _ = i.$on("refreshTranslation", function() {
                return e.mainWrapper = null, e.scrollEnable = !0, T = 0, e.limit = 0, p = null, b = [], v(), !1
            }), e.findVideosFromId = function(i) {
                var s, a;
                return a = -1, s = !1, {
                    video: d("filter")(e.videos, function(e) {
                        return s || a++, e.id === i && (s = !0), e.id === i
                    })[0],
                    position: a
                }
            }, k = i.$on("openVideoGallery", function(a, t) {
                var n, l, o;
                return n = e.findVideosFromId(t), o = n.video, l = n.position, o ? s.all(o.element_type).get(o.related_store).then(function(s) {
                    return e.currentVideo = s, e.count = 0, "store" === o.element_type && (e.currentVideo.video_id = s.video), g(s, o.element_type), i.isDesktop ? (c.open({
                        template: "videogallery",
                        scope: e,
                        className: "dialog"
                    }), setTimeout(function() {
                        return e.count = l, e.carouselReady = !0
                    }, 10)) : e.count = parseInt(t), !0
                }) : console.log("no video!?"), !0
            }), g = function(i, s) {
                return "store" === s ? (e.share = window.serverName + "/share/store/" + i.id + "/?image=" + window.mediaServer + "/media/inspire_uncropped/" + i.inspire_photo1, e.photo = window.mediaServer + "/media/inspire_uncropped/" + i.inspire_photo1) : (e.share = null, e.photo = null)
            }, e.currentVideo = null, e.showcaption = !0, e.beforeChange = function() {
                return e.currentVideo = null, e.showcaption = !1, e.$apply()
            }, e.afterChange = function(i) {
                var a;
                return i < e.videos.length ? (e.currentVideo = null, e.$apply(), a = e.videos[i], s.all(a.element_type).get(a.element_id).then(function(i) {
                    return setTimeout(function() {
                        return e.currentVideo = i, "store" === a.element_type && (e.currentVideo.video_id = i.video), e.$apply()
                    }, 0), setTimeout(function() {
                        return e.appear = !0, e.showcaption = !0, e.$apply()
                    }, 1e3), g(i, a.element_type), !1
                })) : void 0
            }, e.clearSearch = function() {
                return e.showClear = !1, "page-search" === i.page && n.history.back(), i.$emit("removeResult")
            }, i.isDesktop && !i.isTouch && o(function() {
                var i;
                e.offset = angular.element("#fixHeader").height() + angular.element(".fix-header-top").height(), i = angular.element(".grid-container"), i.length > 0 && l.scrollTop() >= e.offset && l.duScrollTo(i, e.offset, 100)
            }, i.transitionDelay, !1), e.$on("$destroy", function() {
                return k(), _(), x()
            })
        }])
    }.call(this),
    function() {
        angular.module("aesop").controller("SearchCtrl", ["$scope", "$rootScope", "$state", "$window", function(e, i, s, a) {
            e.closeSearch = function() {
                return e.searchInput = null, "page-search" === i.page ? a.history.back() : void 0
            }, i.$on("removeResult", function() {
                return e.searchInput = null
            }), e.search = function() {
                e.toggleNav(), e.searchInput && s.go("search", {
                    q: e.searchInput
                }, !1)
            }
        }])
    }.call(this),
    function() {
        angular.module("aesop").controller("FooterCtrl", ["$scope", "$rootScope", "$http", "$stateParams", "$timeout", function(e, i, s, a, t) {
            var n;
            return e.form = {}, e.error = !1, i.$on("$stateChangeStart", function() {
                return e.footerState = ""
            }), i.$on("stickyFooter", function() {
                return e.footerState = "sticky readyToStick", t(function() {
                    return e.footerState = "sticky", e.$digest()
                }, 1e3, !1)
            }), n = function(a) {
                var t;
                t = "en-us", window.localStorage.language && (t = window.localStorage.language), s.post(window.serverName + "/" + t + "/api/subscribe/", a).success(function() {
                    return e.success = i.translations.label_subscribe_success, e.form.email_address = ""
                }).error(function() {
                    return e.error = i.translations.label_subscribe_failure
                })
            }, e.subscribe = function() {
                return "" !== this.form.email_address && this.form.hasOwnProperty("email_address") ? this.form.email_address.$valid ? e.error = i.translations.label_subscribe_emailinvalid : (e.error = "", n(this.form)) : e.error = i.translations.label_subscribe_emailinvalid, !1
            }
        }])
    }.call(this),
    function() {
        angular.module("aesop").controller("MainCtrl", ["$scope", "$rootScope", "$state", "$window", "Restangular", "ngDialog", "$timeout", function(e, i, s, a, t, n, l) {
            var o;
            i.loading = "page-loading", i.isDesktop = a.innerWidth >= 767, i.isTouch = !("undefined" == typeof document.documentElement.ontouchstart), i.transitionDelay = i.isDesktop ? 500 : 0, i.translations = {}, o = function() {
                return i.translations = {}, t.one("site").get().then(function(e) {
                    return i.translations = e, l(function() {
                        return i.loading = "page-ready"
                    }, 1e3), l(function() {
                        return i.loading = ""
                    }, 5e3)
                })
            }, i.$on("refreshTranslation", function() {
                return t.setBaseUrl(window.serverName + "/" + window.localStorage.language + "/api/"), o()
            }), o(), angular.element(a).on("resize", a._.debounce(function() {
                i.isDesktop !== a.innerWidth >= 768 && (i.isDesktop = !i.isDesktop, e.$broadcast("updateLayout"))
            }, 500)), i.isDesktop && angular.element(a).on("scroll", function() {
                e.$broadcast("scroll::scroll")
            }), i.$on("showIntro", function() {
                n.open({
                    template: "philosophy",
                    scope: e,
                    className: "dialog philosophy"
                })
            })
        }])
    }.call(this),
    function() {}.call(this), angular.module("aesop").run(["$templateCache", function(e) {
        e.put("app/main/main.html", '<script id="philosophy" type="text/ng-template"><div ng-click="closeThisDialog()" class="togglePopup"> <div class="wrapper-pixel"> <div class="pixels-collapse"><span class="pixel-0"></span><span class="pixel-1"></span><span class="pixel-2"></span><span class="pixel-3"></span><span class="pixel-4"></span><span class="pixel-5"></span><span class="pixel-6"></span><span class="pixel-7"></span><span class="pixel-8"></span><span class="pixel-9"></span><span class="pixel-10"></span><span class="pixel-11"></span><span class="pixel-12"></span><span class="pixel-13"></span> </div> </div> </div> <div ng-controller="IntroCtrl" class="view-intro"> <div class="intro center"> <h1 class="icon-aesop"> <div class="hide">Aesop</div> </h1> <h2 class="tod">{{::translations.philosophy_title}}</h2> <p ng-bind-html="translations.philosophy_copy | splitTranslation"></p> <div ng-click="closeThisDialog()" class="btn"> <div class="loading-line"></div>{{button}} </div> </div> </div></script><div autoscroll="" class="body-wrapper"><div ui-view="header" ng-class="navState" ng-controller="HeaderCtrl" scroll="" class="view-header"></div><div ui-view="content" class="view-content"></div></div><div ui-view="footer" ng-controller="FooterCtrl" ng-class="footerState" class="view-footer"></div>'), e.put("app/components/footer/footer.html", '<footer ng-class="{\'expend\' : toggleF}" class="footer"><div ng-class="{\'reverse\' : toggleF}" ng-click="toggleF = !toggleF" class="toogle"><div class="pixels-top"><span class="pixel-0"></span><span class="pixel-1"></span><span class="pixel-2"></span><span class="pixel-3"></span><span class="pixel-4"></span><span class="pixel-5"></span><span class="pixel-6"></span><span class="pixel-7"></span><span class="pixel-8"></span></div></div><div class="container"><div class="expandable"><h3 class="title">{{translations.footer_about}}</h3><p class="two-columns">{{translations.footer_copy}}</p><div class="side"><div class="signUp"><h4>{{translations.footer_signup_copy}}</h4><form ng-submit="subscribe()"><div ng-if="error" class="error">{{error}}</div><div ng-if="success" class="success">{{success}}</div><div ng-class="(error!=\'\') ? \'error\' : \'\'" class="input-background"><input name="email_address" placeholder="{{translations.footer_sign_up_email_placeholder}}" ng-model="form.email_address" type="email" required="" ng-keyup="$event.keyCode == 13 &amp;&amp; subscribe()"></div><input type="submit" value="{{translations.footer_submit}}" class="button"></form></div><div class="social-list"><label>{{translations.footer_connect_with_us}}</label><ul class="list-inline"><li><a href="https://instagram.com/aesopskincare" target="_blank"><span class="icon-instagram"></span></a></li><li><a href="https://twitter.com/aesopskincare/" target="_blank"><span class="icon-twitter"></span></a></li></ul></div></div></div><div class="footer-links"><blockquote ng-class="{\'reverse\' : toggleF}" ng-click="toggleF = !toggleF">‘Order and simplification are the first steps toward the mastery of a subject.’<span class="author">Thomas Mann</span></blockquote><div class="side"><div class="credits">2016 © Aesop</div><div class="links"><a href="http://www.aesop.com/help/faq/terms/" target="_blank">{{translations.footer_terms_and_conditions}}</a><a href="http://www.aesop.com/help/faq/privacy/" target="_blank">{{translations.footer_privacy_policy}}</a><a href="mailto:aesop@aesop.com" target="_blank" class="connect">{{translations.footer_contact_us}}</a></div></div></div></div></footer>'), e.put("app/components/gallery/gallery.html", '<div ng-if="!isDesktop" class="mobile-gallery"><h2 class="tod">{{storeName}}</h2><div class="scroll-content"><div ng-repeat="image in gallery"><div class="gallery"><div class="image-gallery"><img src="{{::image.src}}"></div><div class="caption"><h3 class="title">{{::storeName}}</h3><div class="location">{{::storeLocation}}</div></div><div ng-class="isTouch?\'\':\'notTouchGallery\'" class="social-list bottom"><div class="icon-share"></div><ul><li class="show-desktop"><div ng-click="$parent.mail(image.share)" class="social-link"><span class="icon-mail"></span></div></li><li class="show-desktop"><div social-linkedin="" media="{{::image.src}}" custom-url="{{::image.share}}" class="social-link"><span class="icon-linkedin"></span></div></li><li><div social-facebook="" custom-url="{{::image.share}}" class="social-link"><span class="icon-facebook"></span></div></li><li><div social-twitter="" media="{{::image.src}}" status="{{::image.share}}" class="social-link"><span class="icon-twitter"></span></div></li><li><div social-pinterest="" media="{{::image.share}}" custom-url="{{::image.share}}" description="Aesop {{::translations.subtitle}}" class="social-link"><span class="icon-pinterest"></span></div></li></ul></div></div></div></div></div><div ng-if="isDesktop"><div class="controller"><div class="icon-left"></div><div class="count">{{count+1}}<span>/</span>{{::gallery.length}}</div><div class="icon-right"></div></div><div ng-class="slickClass" class="center-gallery"><slick center-mode="{{centerMode}}" center-padding="0" variable-width="true" next-arrow=".icon-left" prev-arrow=".icon-right" current-index="count" adaptive-height="false"><div ng-repeat="image in gallery"><div class="gallery"><div class="image-gallery"><img src="{{::image.src}}"></div><div class="caption"><h3 class="title">{{::storeName}}</h3><div class="location">{{::storeLocation}}</div></div><div ng-class="isTouch?\'\':\'notTouchGallery\'" class="social-list bottom"><div class="icon-share"></div><ul><li class="show-desktop"><div ng-click="$parent.mail(image.share)" class="social-link"><span class="icon-mail"></span></div></li><li class="show-desktop"><div social-linkedin="" media="{{::image.src}}" custom-url="{{::image.share}}" class="social-link"><span class="icon-linkedin"></span></div></li><li><div social-facebook="" custom-url="{{::image.share}}" class="social-link"><span class="icon-facebook"></span></div></li><li><div social-twitter="" media="{{::image.src}}" status="{{::image.share}}" class="social-link"><span class="icon-twitter"></span></div></li><li><div social-pinterest="" media="{{::image.share}}" custom-url="{{::image.share}}" description="Aesop {{::translations.subtitle}}" class="social-link"><span class="icon-pinterest"></span></div></li></ul></div></div></div></slick></div></div>'), e.put("app/components/gallery/video.html", '<div class="videoGalleryOverlay"><div class="controller"><div class="icon-left"></div><div class="count">{{count+1}}<span>/</span>{{::videos.length}}</div><div class="icon-right"></div></div><div class="center-gallery"><slick center-mode="true" center-padding="0" variable-width="true" next-arrow=".icon-left" prev-arrow=".icon-right" current-index="count" adaptive-height="false" on-after-change="afterChange(count)" on-before-change="beforeChange()"><div ng-repeat="video in videos"><div ng-class="{\'show\': carouselReady}" class="videos-wrapper"><div class="gallery"><div class="videoGallery"><div ng-if="$index == count &amp;&amp; currentVideo != null" class="videoWrapper"><div fluid-video="" video-type="vimeo" video-id="{{currentVideo.video_id}}" class="videoContainer"></div></div><img ng-src="{{video.colorImage}}" ng-class="{\'show\': $index != count, \'appear\': appear}"></div></div><div ng-if="currentVideo != null" ng-class="{\'showcaption\': showcaption}" class="caption"><div ng-if="currentVideo.route == \'store\'" class="separator-left"><h3 class="title">{{currentVideo.title}}</h3><div class="location">{{currentVideo.subtitle}}</div></div><div class="separator-left"><h3 class="title">{{currentVideo.title}}</h3></div><div class="separator-right social-separator"><div ng-class="isTouch?\'\':\'notTouchGallery\'" class="social-list bottom"><div class="icon-share"></div><ul><li class="show-desktop"><div ng-click="$parent.mail()" class="social-link"><span class="icon-mail"></span></div></li><li class="show-desktop"><div social-linkedin="" media="{{photo}}" custom-url="{{share}}" class="social-link"><span class="icon-linkedin"></span></div></li><li><div social-facebook="" custom-url="{{share}}" class="social-link"><span class="icon-facebook"></span></div></li><li><div social-twitter="" media="{{photo}}" status="{{share}}" class="social-link"><span class="icon-twitter"></span></div></li><li><div social-pinterest="" media="{{share}}" custom-url="{{share}}" description="Aesop {{currentVideo.title}}" class="social-link"><span class="icon-pinterest"></span></div></li></ul></div></div><a ng-href="{{video.ref}}" ng-click="closeThisDialog()" ng-if="currentVideo.route == \'store\'" class="separator-right"><h3 class="title">{{::translations.label_visit || \'Visit\'}}</h3><div class="location">{{::translations.label_visit_line_2 || \'Store page\'}}</div></a></div></div></div></slick></div></div>'), e.put("app/components/grid/grid.html", '<div ng-controller="GridCtrl" ng-class="gridClass" class="grid-container container"><div infinite-scroll="getBrick()" infinite-scroll-distance="distance" infinite-scroll-immediate-check="false" infinite-scroll-disabled="scrollEnable" class="grid-wrapper"><div ng-repeat="(key, bricksWrapper) in mainWrapper track by $index | limitTo: limit" ng-class="bricksWrapper.size" class="floating-wrapper"><div ng-repeat="wrapper in bricksWrapper.bricks" ng-class="wrapper.size" class="floating-wrapper"><div ng-repeat="brick in wrapper.bricks" ng-class="::brick.size" class="tile"><tile ng-brick="{{ ::brick }}" ng-if="brick.isImage" ng-id="{{key}}"></tile><a ng-href="{{::brick.ref}}" ng-if="!brick.isImage"><div class="grid-quote">{{ ::brick.title }}</div><div class="caption"><h3>{{::brick.subtitle}}</h3></div></a></div></div></div></div><a ng-click="initInfinite()" ng-show="showMore" class="btn more">{{translations.label_show_more}}</a><div ng-show="mainWrapper == null &amp;&amp; page == &quot;page-search&quot;" class="btn fade no-hover">{{translations.search_no_results}}</div><div ng-show="showClear" ng-click="clearSearch()" class="btn">{{translations.search_clear_results || \'Clear search\' }}</div></div><script id="videogallery" type="text/ng-template"><div ng-click="closeThisDialog()" class="togglePopup"> <div class="wrapper-pixel"> <div class="pixels-collapse"><span class="pixel-0"></span><span class="pixel-1"></span><span class="pixel-2"></span><span class="pixel-3"></span><span class="pixel-4"></span><span class="pixel-5"></span><span class="pixel-6"></span><span class="pixel-7"></span><span class="pixel-8"></span><span class="pixel-9"></span><span class="pixel-10"></span><span class="pixel-11"></span><span class="pixel-12"></span><span class="pixel-13"></span> </div> </div> </div> <div class="videoGalleryOverlay"> <div class="controller"> <div class="icon-left"></div> <div class="count">{{count+1}}<span>/</span>{{::videos.length}}</div> <div class="icon-right"></div> </div> <div class="center-gallery"> <slick center-mode="true" center-padding="0" variable-width="true" next-arrow=".icon-left" prev-arrow=".icon-right" current-index="count" adaptive-height="false" on-after-change="afterChange(count)" on-before-change="beforeChange()"> <div ng-repeat="video in videos"> <div ng-class="{\'show\': carouselReady}" class="videos-wrapper"> <div class="gallery"> <div class="videoGallery"> <div ng-if="$index == count &amp;&amp; currentVideo != null" class="videoWrapper"> <div fluid-video video-type="vimeo" video-id="{{currentVideo.video_id}}" class="videoContainer"></div> </div><img ng-src="{{video.colorImage}}" ng-class="{\'show\': $index != count, \'appear\': appear}"> </div> </div> <div ng-if="currentVideo != null" ng-class="{\'showcaption\': showcaption}" class="caption"> <div ng-if="currentVideo.route == \'store\'" class="separator-left"> <h3 class="title">{{currentVideo.title}}</h3> <div class="location">{{currentVideo.subtitle}}</div> </div> <div class="separator-left"> <h3 class="title">{{currentVideo.title}}</h3> </div> <div class="separator-right social-separator"> <div ng-class="isTouch?\'\':\'notTouchGallery\'" class="social-list bottom"> <div class="icon-share"></div> <ul> <li class="show-desktop"> <div ng-click="$parent.mail()" class="social-link"><span class="icon-mail"></span></div> </li> <li class="show-desktop"> <div social-linkedin media="{{photo}}" custom-url="{{share}}" class="social-link"><span class="icon-linkedin"></span></div> </li> <li> <div social-facebook custom-url="{{share}}" class="social-link"><span class="icon-facebook"></span></div> </li> <li> <div social-twitter media="{{photo}}" status="{{share}}" class="social-link"><span class="icon-twitter"></span></div> </li> <li> <div social-pinterest media="{{share}}" custom-url="{{share}}" description="Aesop {{currentVideo.title}}" class="social-link"><span class="icon-pinterest"></span></div> </li> </ul> </div> </div><a ng-href="{{video.ref}}" ng-click="closeThisDialog()" ng-if="currentVideo.route == \'store\'" class="separator-right"> <h3 class="title">{{::translations.label_visit || \'Visit\'}}</h3> <div class="location">{{::translations.label_visit_line_2 || \'Store page\'}}</div></a> </div> </div> </div> </slick> </div> </div></script>'), e.put("app/components/grid/tile.html", '<a ng-href="{{::ref}}" images-loaded-events="imgLoadedEvents" class="tile-link images-loaded"><div class="img-wrapper"><img ng-src="{{::link}}"><div ng-style="::overlayDuotone" class="overlay duotone"></div><div ng-style="overlay" ng-click="open($event)" class="overlay"></div><div ng-if="$parent.isMovieSection &amp;&amp; video" class="videoWrapper"><div fluid-video="" video-type="vimeo" video-id="{{video}}?autoplay=1" class="videoContainer"></div></div></div><div ng-if="socialShare" class="tile-social"><div ng-class="isTouch?\'\':\'notTouchGallery\'" ng-mouseover="loadSharingData()" class="social-list bottom"><div ng-click="stop($event)" class="icon-share"></div><ul><li class="show-desktop"><div ng-click="$event.stopPropagation(); $parent.mail($event)" class="social-link"><span class="icon-mail"></span></div></li><li class="show-desktop"><div ng-click="$event.stopPropagation();" social-linkedin="" media="{{photo}}" custom-url="{{share}}" class="social-link"><span class="icon-linkedin"></span></div></li><li><div ng-click="$event.stopPropagation();" social-facebook="" custom-url="{{share}}" class="social-link"><span class="icon-facebook"></span></div></li><li><div ng-click="$event.stopPropagation();" social-twitter="" media="{{photo}}" status="{{share}}" class="social-link"><span class="icon-twitter"></span></div></li><li><div ng-click="$event.stopPropagation();" social-pinterest="" media="{{share}}" custom-url="{{share}}" description="Aesop {{::translations.subtitle}}" class="social-link"><span class="icon-pinterest"></span></div></li></ul></div></div><div class="caption"><h3>{{::title}}</h3><div class="span-location">{{::subtitle}}</div></div></a>'), e.put("app/components/header/header.html", '<div class="language-selection"><ul><li ng-repeat="section in lang" ng-class="section.code==translations.language_code?\'active\':\'\'"><a ng-click="switchLang(section.code)">{{section.abbr}}</a></li></ul><span class="icon-down"></span></div><div class="hide-mobile"><div class="social-list retracted"><div class="share-button">{{translations.header_share}}<span class="icon-share"></span></div><ul><li><a ng-click="mail()"><span class="icon-mail"></span></a></li><li><a social-linkedin="" media="http://taxonomyofdesign.com/static/images/share.jpg" description="{{translations.sharing_description}}"><span class="icon-linkedin"></span></a></li><li><a social-facebook=""><span class="icon-facebook"></span></a></li><li><a social-pinterest="" media="http://taxonomyofdesign.com/static/images/share.jpg" description="{{translations.sharing_description}}"><span class="icon-pinterest"></span></a></li><li><a social-twitter="" status="{{translations.sharing_message}}" media=""><span class="icon-twitter"></span></a></li></ul></div></div><header ng-class="fixMe"><div class="header"><a ui-sref="home.all" ng-if="mainHeader" class="logo"><div class="icon-aesop"><div class="hide">{{translations.header_mainsite}}</div></div><div class="tod">{{ translations.title }}</div></a><div ng-if="isSearch" class="searchContext">{{::translations.header_search_context || \'Results for\'}}</div><h1 ng-if="storeName" class="storeNameLarge logo"><span ng-if="isSearch" class="resultTitle">{{header_results_for}}</span>{{storeName}}</h1><h2 ng-if="storeLocation" class="storeLocation">{{storeLocation}}</h2><div ng-class="activeFixHeader" class="fix-header-top"><div class="container"><a ui-sref="home.all" ng-style="transformLogo" class="logo"><div class="icon-aesop"><div class="hide">{{header_mainsite}}</div></div><div ng-style="transformSubLogo" class="storeName"><span ng-if="isSearch" class="resultTitle">{{header_results_for}}</span>{{storeName}}</div></a><div ng-style="transformSubLogo" class="tod"><a ui-sref="home.all" class="tod-title">{{translations.title}}</a></div><div ng-class="isTouch?\'\':\'notTouch\'" class="right-nav"><a href="http://www.aesop.com/" target="_blank" class="hide-mobile main-link">aesop.com</a><div class="social-list retracted"><div class="share-button">{{translations.header_share}}<span class="icon-share"></span></div><ul><li><a ng-click="mail()"><span class="icon-mail"></span></a></li><li><a social-linkedin="" media="http://taxonomyofdesign.com/static/images/share.jpg" description="{{translations.sharing_description}}"><span class="icon-linkedin"></span></a></li><li><a social-facebook=""><span class="icon-facebook"></span></a></li><li><a social-pinterest="" media="http://taxonomyofdesign.com/static/images/share.jpg" description="{{translations.sharing_description}}"><span class="icon-pinterest"></span></a></li><li><a social-twitter="" status="{{translations.sharing_message}}" media=""><span class="icon-twitter"></span></a></li></ul></div></div><div ng-click="toggleNav()" class="toggle-menu"><span></span><span></span><span></span></div></div></div></div><div id="fixHeader" class="fix-header"><div class="container"><div class="left-nav"><div class="cell"><a ui-sref="home.all" title="Back to the list" ng-if="!mainHeader" ng-click="toggleNav()" class="back">{{translations.header_home}}</a><a ng-click="philosophy();toggleNav()" ng-if="showPhilosophy">{{translations.header_philosophy}}</a><div class="hide-desktop"><a href="http://www.aesop.com/" target="_blank">aesop.com</a></div></div></div><nav id="nav" role="navigation" class="header-nav"><div class="cell"><div ng-repeat="section in nav" ng-if="mainHeader || isMobile" class="header-nav-element"><a ui-sref="{{&quot;home.&quot;+section}}" ui-sref-active="active" ng-click="toggleNav()">{{translations[\'nav_primary_\'+section]}}</a></div><div ng-repeat="section in nav | orderBy: section.position" ng-if="!mainHeader" class="header-nav-element"><a href="{{\'#\'+section.url}}" offset="{{offset}}" du-smooth-scroll="{{section.url}}" duration="1500" du-scrollspy="{{section.url}}" ng-click="toggleNav()">{{translations[\'nav_store_\'+section.title]}}</a></div></div></nav><div ng-controller="SearchCtrl" class="header-search"><div class="header-search-wrapper"><div class="input-background"><input type="text" placeholder="{{translations.header_search}}" ng-model="searchInput" ng-keyup="$event.keyCode == 13 &amp;&amp; search()" ng-class="{activeSearch: searchInput}"><div ng-if="searchInput" ng-click="closeSearch()" class="close-search"><div class="pixels-cross"><span class="pixel-0"></span><span class="pixel-1"></span><span class="pixel-2"></span><span class="pixel-3"></span><span class="pixel-4"></span><span class="pixel-5"></span><span class="pixel-6"></span><span class="pixel-7"></span><span class="pixel-8"></span><span class="pixel-9"></span><span class="pixel-10"></span><span class="pixel-11"></span><span class="pixel-12"></span><span class="pixel-13"></span><span class="pixel-14"></span><span class="pixel-15"></span><span class="pixel-16"></span><span class="pixel-17"></span></div></div></div><div ng-click="search()" class="icon-search"></div></div></div></div></div></header>'), e.put("app/components/icons/icons.html", ""), e.put("app/components/intro/intro.html", '<div ng-controller="IntroCtrl" class="view-intro"><div class="intro center"><h1 class="icon-aesop"><div class="hide">Aesop</div></h1><h2 class="tod">{{::translations.philosophy_title}}</h2><p ng-bind-html="translations.philosophy_copy | splitTranslation"></p><div ng-click="closeThisDialog()" class="btn"><div class="loading-line"></div>{{button}}</div></div></div>'), e.put("app/components/social/social.html", '<div class="social-list retracted"><div class="share-button">{{translations.header_share}}<span class="icon-share"></span></div><ul><li><a ng-click="mail()"><span class="icon-mail"></span></a></li><li><a social-linkedin="" media="http://taxonomyofdesign.com/static/images/share.jpg" description="{{translations.sharing_description}}"><span class="icon-linkedin"></span></a></li><li><a social-facebook=""><span class="icon-facebook"></span></a></li><li><a social-pinterest="" media="http://taxonomyofdesign.com/static/images/share.jpg" description="{{translations.sharing_description}}"><span class="icon-pinterest"></span></a></li><li><a social-twitter="" status="{{translations.sharing_message}}" media=""><span class="icon-twitter"></span></a></li></ul></div>'), e.put("app/components/store/store.html", '<div ng-controller="StoreCtrl"><div id="store" class="container"><div ng-repeat="display in sectionToDisplay | orderBy: display.position"><div ng-if="display.type == \'video\'" class="section-wrapper"><section class="section-video"><div fluid-video="" video-type="vimeo" video-id="{{::video}}?title=0&amp;byline=0&amp;portrait=0" class="videoContainer"></div></section></div><div ng-click="openGallery(display.index)" ng-if="display.type == \'inspire\'" class="section-wrapper"><section class="section-tile"><img ng-src="{{::display.photo}}"><div class="togglePopup"><div class="pixels-expend"><span class="pixel-0"></span><span class="pixel-1"></span><span class="pixel-2"></span><span class="pixel-3"></span><span class="pixel-4"></span><span class="pixel-5"></span><span class="pixel-6"></span><span class="pixel-7"></span><span class="pixel-8"></span><span class="pixel-9"></span><span class="pixel-10"></span><span class="pixel-11"></span><span class="pixel-12"></span><span class="pixel-13"></span></div></div></section></div><div id="intro" ng-if="display.type == \'intro\'" class="section-wrapper"><section class="section-main-left"><div ng-class="{fullWidth: quote == null}" class="col sticky-content"><div sticky="" class="fix"><div ng-if="intro_description" class="section-wysiwyg"><p ng-bind-html="intro_description"></p></div></div></div><div id="quote" ng-if="quote" class="col"><blockquote><p>{{::quote}}</p><footer ng-if="author"><cite>{{::author}}</cite></footer></blockquote><div ng-if="intro_photo" class="section-tile"><div ng-attr-style="background-image:url(&quot;{{::intro_photo}}&quot;)" class="tile-image"></div></div></div></section></div><div id="designer" ng-if="display.type == \'designer\'" class="section-wrapper"><section class="section-main-right"><div ng-if="designer_url" class="col"><div ng-if="designer_image" class="section-tile tile"><div ng-attr-style="background-image:url(&quot;{{::designer_image}}&quot;)" class="tile-image"></div><div class="caption"><h3>{{::designer_title}}</h3></div></div><div ng-if="!designer_image" class="section-tile tile"><div class="grid-quote">{{::designer_title}}</div></div><div class="section-wysiwyg tiny"><ul><li><a href="{{::designer_url}}">{{::translations.label_view_designer_page}}</a></li><li><a ui-sref="home.designers">{{::translations.label_all_designers }}</a></li></ul></div></div><div ng-class="{fullWidth: designer_url == null}" class="col sticky-content"><div sticky="" class="fix"><div ng-if="text_copy1" class="section-wysiwyg"><p ng-bind-html="text_copy1"></p></div></div></div></section></div><div id="features_materials" du-spy-context="" ng-if="display.type == \'features_materials\'" class="section-wrapper"><section class="section-main-left"><div class="col sticky-content"><div sticky="" class="fix"><div class="section-wysiwyg"><p ng-if="text_copy2" ng-bind-html="text_copy2"></p><ul><li><a ui-sref="home.features">{{translations.label_all_features}}</a></li><li><a ui-sref="home.materials">{{translations.label_all_materials}}</a></li></ul></div></div></div><div class="col"><div ng-repeat="bricksWrapper in mainWrapper" ng-class="::bricksWrapper.size" class="floating-wrapper"><div ng-repeat="wrapper in bricksWrapper.bricks" ng-class="::wrapper.size" class="floating-wrapper"><div ng-repeat="brick in wrapper.bricks" ng-class="::brick.size" class="tile"><tile ng-brick="{{ ::brick }}"></tile></div></div></div></div></section></div><div id="location" ng-if="display.type == \'location\'" class="section-wrapper"><section ng-controller="MapCtrl" ng-class="{fullHeight: az_description}" class="section-main-left"><div class="col section-tile"><div id="map" ng-attr-style="{{mapSize}}"></div></div><div class="col square"><div class="row address-row"><div class="col"><div ng-if="street_address" class="section-wysiwyg street-address"><h4>Aesop {{::storeLocation}}</h4><p>{{::street_address}}</p><ul ng-if="aesop_com_store_detail_link"><li><a href="{{aesop_com_store_detail_link}}" target="_blank" class="store-location"><span>{{::translations.label_view_store_details || \'VIEW STORE DETAIL\'}}</span><span>{{::translations.label_view_store_details_line_2 || \'ON AESOP.COM\'}}</span></a></li></ul></div></div><div class="col section-tile"><div ng-attr-style="background-image:url({{::location_photo1}})" class="cover"></div></div></div><div class="row"><div ng-if="az_description" class="col"><div class="section-wysiwyg"><h4>{{::az_title}}</h4><p>{{::az_description}}</p><ul ng-if="az_link"><li><a href="{{az_link}}" target="_blank">{{translations.label_view_more}}</a></li></ul></div></div><div class="col section-tile"><div ng-attr-style="background-image:url({{::location_photo2}})" class="cover"></div></div></div></div></section></div></div></div><div ng-if="further_informations" class="section-center further_informations"><h4>{{translations.label_further_information}}</h4><div class="section-wysiwyg"><ul><li ng-repeat="info in further_informations"><a href="{{::info.link}}" target="_blank">{{::info.title}}</a></li></ul></div></div><script id="gallery" type="text/ng-template"><div ng-click="closeThisDialog()" class="togglePopup"> <div class="wrapper-pixel"> <div class="pixels-collapse"><span class="pixel-0"></span><span class="pixel-1"></span><span class="pixel-2"></span><span class="pixel-3"></span><span class="pixel-4"></span><span class="pixel-5"></span><span class="pixel-6"></span><span class="pixel-7"></span><span class="pixel-8"></span><span class="pixel-9"></span><span class="pixel-10"></span><span class="pixel-11"></span><span class="pixel-12"></span><span class="pixel-13"></span> </div> </div> </div> <div ng-if="!isDesktop" class="mobile-gallery"> <h2 class="tod">{{storeName}}</h2> <div class="scroll-content"> <div ng-repeat="image in gallery"> <div class="gallery"> <div class="image-gallery"><img src="{{::image.src}}"></div> <div class="caption"> <h3 class="title"> {{::storeName}}</h3> <div class="location">{{::storeLocation}}</div> </div> <div ng-class="isTouch?\'\':\'notTouchGallery\'" class="social-list bottom"> <div class="icon-share"></div> <ul> <li class="show-desktop"> <div ng-click="$parent.mail(image.share)" class="social-link"><span class="icon-mail"></span></div> </li> <li class="show-desktop"> <div social-linkedin media="{{::image.src}}" custom-url="{{::image.share}}" class="social-link"><span class="icon-linkedin"></span></div> </li> <li> <div social-facebook custom-url="{{::image.share}}" class="social-link"><span class="icon-facebook"></span></div> </li> <li> <div social-twitter media="{{::image.src}}" status="{{::image.share}}" class="social-link"><span class="icon-twitter"></span></div> </li> <li> <div social-pinterest media="{{::image.share}}" custom-url="{{::image.share}}" description="Aesop {{::translations.subtitle}}" class="social-link"><span class="icon-pinterest"></span></div> </li> </ul> </div> </div> </div> </div> </div> <div ng-if="isDesktop"> <div class="controller"> <div class="icon-left"></div> <div class="count">{{count+1}}<span>/</span>{{::gallery.length}}</div> <div class="icon-right"></div> </div> <div ng-class="slickClass" class="center-gallery"> <slick center-mode="{{centerMode}}" center-padding="0" variable-width="true" next-arrow=".icon-left" prev-arrow=".icon-right" current-index="count" adaptive-height="false"> <div ng-repeat="image in gallery"> <div class="gallery"> <div class="image-gallery"><img src="{{::image.src}}"></div> <div class="caption"> <h3 class="title"> {{::storeName}}</h3> <div class="location">{{::storeLocation}}</div> </div> <div ng-class="isTouch?\'\':\'notTouchGallery\'" class="social-list bottom"> <div class="icon-share"></div> <ul> <li class="show-desktop"> <div ng-click="$parent.mail(image.share)" class="social-link"><span class="icon-mail"></span></div> </li> <li class="show-desktop"> <div social-linkedin media="{{::image.src}}" custom-url="{{::image.share}}" class="social-link"><span class="icon-linkedin"></span></div> </li> <li> <div social-facebook custom-url="{{::image.share}}" class="social-link"><span class="icon-facebook"></span></div> </li> <li> <div social-twitter media="{{::image.src}}" status="{{::image.share}}" class="social-link"><span class="icon-twitter"></span></div> </li> <li> <div social-pinterest media="{{::image.share}}" custom-url="{{::image.share}}" description="Aesop {{::translations.subtitle}}" class="social-link"><span class="icon-pinterest"></span></div> </li> </ul> </div> </div> </div> </slick> </div> </div></script><div ng-repeat="image in gallery"><div ng-attr-style="background-image:url(&quot;{{::image.src}}&quot;)" class="preload"></div></div></div>')
    }]);