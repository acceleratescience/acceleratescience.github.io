/*
 *
 * Canvas Proximity Mask
 *
 */
let parameters = {
    size: 30,
    radius: 1,
    proximity: 125,
    growth: 60,
    ease: 0.075,
    stats: false
};


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(radius, x, y) {
        this._radius = radius;
        this.radius = radius;
        this.growthValue = 0;
        this.position = new Point(x, y);
    }

    /**
     * @param {CanvasRenderingContext2D} context
     * @param {number} ease
     */
    draw(context, ease) {
        this.radius += (this._radius + this.growthValue - this.radius) * ease;
        context.moveTo(this.position.x, this.position.y);
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    }

    addRadius(value) {
        this.growthValue = value;
    }

    get x() {
        return this.position.x;
    }

    set x(value) {
        this.position.x = value;
    }

    get y() {
        return this.position.y;
    }

    set y(value) {
        this.position.y = value;
    }
}

function init() {
    const stats = new Stats();
    stats.showPanel(0);

    buildGUI();
    let imageLoaded = false;
    const canvas = document.getElementById("c");
    const hero = document.getElementById("hero");
    const image = new Image();
    let circles = [];
    const context = canvas.getContext("2d");
    window.addEventListener("resize", resizeHandler);
    hero.addEventListener("mousemove", mouseMoveHandler);
    hero.addEventListener("touchmove", touchMoveHandler);
    resizeHandler();
    loadImage();
    build();

    function build() {
        circles = [];
        const {
            size,
            radius
        } = parameters;

        // const columns = Math.ceil(window.innerWidth / size) + 1;
        // const rows = Math.ceil(window.innerHeight / size) + 1;
        const columns = Math.ceil(hero.offsetWidth / size) + 1;
        const rows = Math.ceil(hero.offsetHeight / size) + 1;

        const amount = Math.ceil(columns * rows);
        for (let i = 0; i < amount; i++) {
            const column = i % columns;
            const row = ~~(i / columns);
            circles.push(new Circle(radius, size * column, size * row));
        }
    }

    function mouseMoveHandler(event) {
        proximityHandler(event);
    }

    function touchMoveHandler(event) {
        proximityHandler(event.touches[0]);
    }

    function proximityHandler(event) {
        const {
            proximity,
            growth
        } = parameters;
        for (let c of circles) {
            let distance = Math.sqrt(Math.pow(c.x - event.clientX, 2) + Math.pow(c.y - event.clientY, 2));
            let d = map(distance, c._radius, c._radius + proximity, growth, 0);
            if (d < 0) d = 0;
            c.addRadius(d);
        }
    }

    function animate() {
        stats.begin();
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.save();
        context.beginPath();
        context.fillStyle = "#000000";
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let circle of circles) {
            circle.draw(context, parameters.ease);
        }
        if (imageLoaded) {
            drawImage();
        } else {
            context.fill();
        }
        context.restore();
        stats.end();
        requestAnimationFrame(animate);
    }

    function buildGUI() {
        const gui = new dat.GUI({
            closed: true
        });
        gui.closed = true;
        const sizeController = gui.add(parameters, "size", 5, 80);
        const radiusController = gui.add(parameters, "radius", 0.5, 20);
        gui.add(parameters, "proximity", 0, 300);
        gui.add(parameters, "growth", 1, 150);
        gui.add(parameters, "ease", 0.02, 0.15);
        const statsController = gui.add(parameters, "stats");

        sizeController.onFinishChange(() => {
            build();
        });

        radiusController.onFinishChange(() => {
            build();
        });

        statsController.onChange(value => {
            if (value) {
                document.body.appendChild(stats.dom);
            } else {
                stats.dom.parentNode.removeChild(stats.dom);
            }
        });
    }

    function drawImage() {
        context.clip();
        const {
            naturalHeight,
            naturalWidth
        } = image;

        // const ratio = findPreferredRatio(naturalWidth, naturalHeight, window.innerWidth, window.innerHeight);
        const ratio = findPreferredRatio(naturalWidth, naturalHeight, hero.offsetWidth, hero.offsetHeight);

        const w = naturalWidth * ratio;
        const h = naturalHeight * ratio;

        // const x = window.innerWidth / 2 - w / 2;
        // const y = window.innerHeight / 2 - h / 2;
        const x = hero.offsetWidth / 2 - w / 2;
        const y = hero.offsetHeight / 2 - h / 2;

        context.drawImage(image, 0, 0, naturalWidth, naturalHeight, x, y, w, h);
    }

    function resizeHandler() {
        resizeCanvas(canvas);
        build();
    }

    function loadImage() {
        image.onload = function () {
            imageLoaded = true;
        };
        // Photo by JJ Ying
        // https://unsplash.com/@jjying?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
        image.src = "../assets/images/jj-ying-8bghKxNU1j0-unsplash.jpg";
    }

    animate();
}

function normalize(value, min, max) {
    return (value - min) / (max - min);
}

function interpolate(value, min, max) {
    return min + (max - min) * value;
}

function map(value, min1, max1, min2, max2) {
    return interpolate(normalize(value, min1, max1), min2, max2);
}

function findPreferredRatio(width, height, maxWidth, maxHeight) {
    let dw = maxWidth / width;
    let dh = maxHeight / height;
    return dw > dh ? dw : dh;
}

function resizeCanvas(canvas) {
    // canvas.width = window.innerWidth;
    canvas.width = hero.offsetWidth;
    // canvas.height = window.innerHeight;
    canvas.height = hero.offsetHeight;
}

/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function ($) {
    // Use this variable to set up the common and page specific functions. If you
    // rename this variable, you will also need to rename the namespace below.
    var mirai = {
        // All pages
        common: {
            init: function () {

                /*
                 *
                 * Core Functionality
                 *
                 */

                // wrap embeds in div
                $('iframe[src^="https://www.youtube.com/embed/"]').wrap('<div class="embed"></div>');
                $('iframe[src^="https://player.vimeo.com/video"]').wrap('<div class="embed"></div>');

                // Smooth scroll to links
                $('a[href*="#"]:not([href="#"])').click(function () {
                    var offset = -250; // <-- change the value here
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top + offset
                            }, 1000);
                            return false;
                        };
                    };
                });

                // Mobile Trigger to open Mobile Menu
                $('.menu-trigger').click(function () {
                    $(this).toggleClass('menu-open');
                    $('body, .nav-mobile').toggleClass('mobile-menu-active');
                });

                $('.mobile-menu-exit').click(function () {
                    $('.block__hero .menu-trigger').removeClass('menu-open');
                    $('body, .nav-mobile').removeClass('mobile-menu-active');
                });

                // Submenu Functionality
                $('.nav-primary > li').click(function () {
                    var $this = $(this),
                        $ul = $('> ul', this);

                    if (!$ul.hasClass('menu-active')) {
                        // Add class to current list item
                        $this.addClass('menu-active');

                        // Slide down used for mobiles
                        $ul.toggleClass('menu-active').slideDown();
                    } else {
                        $this.removeClass('menu-active');

                        $ul.removeClass('menu-active');
                    }
                });

                // Mobile Nav Submenu
                $('.nav-mobile li svg').click(function () {
                    $(this).closest('li').addClass('open');
                });

                $('.nav-mobile li .submenu .back').click(function () {
                    $(this).closest('li').removeClass('open');
                });

                // Hide Sub Menu when clicking outside
                $(document).click(function (e) {
                    if (document.documentElement.clientWidth > 900) {
                        e.stopPropagation();
                        var container = $('.nav-primary');

                        //check if the clicked area is dropDown or not
                        if (container.has(e.target).length === 0) {
                            $('.nav-primary li, .sub-menu').removeClass('menu-active');
                        }

                        if ($('.search-form-wrapper').hasClass('search-form-wrapper--open')) {
                            $('.search-form-wrapper').removeClass('search-form-wrapper--open');
                            $('body').removeClass('search-form-open');
                        };
                    }
                });

                // Container Float (Floating Container)
                function containerFloat() {
                    var containerSize = 1440;
                    var windowWidth = $(window).width();
                    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                    windowWidth = windowWidth + scrollbarWidth;

                    var containerFloat = $('.container--float');

                    $(containerFloat).each(function () {
                        var fivePercent = (windowWidth / 10) / 2;
                        var remainingWidth = windowWidth - containerSize;
                        var float = remainingWidth / 2;

                        if (windowWidth >= 1200) {
                            if (fivePercent > float) {
                                if ($(this).hasClass('container--float-left')) {
                                    $(this).css({
                                        "width": windowWidth - fivePercent + "px",
                                        "max-width": "100%",
                                        "margin": "0 0 0 " + fivePercent + "px",
                                    });
                                };

                                if ($(this).hasClass('container--float-right')) {
                                    $(this).css({
                                        "width": windowWidth - fivePercent + "px",
                                        "max-width": "100%",
                                        "margin": "0 " + fivePercent + "px 0 0",
                                    });
                                };
                            } else {
                                if ($(this).hasClass('container--float-left')) {
                                    $(this).css({
                                        "width": windowWidth - float + "px",
                                        "max-width": "100%",
                                        "margin": "0 0 0 " + float + "px",
                                    });
                                };

                                if ($(this).hasClass('container--float-right')) {
                                    $(this).css({
                                        "width": windowWidth - float + "px",
                                        "max-width": "100%",
                                        "margin": "0 " + float + "px 0 0",
                                    });
                                };
                            };
                        } else {
                            if ($(this).hasClass('container--float-mobile-full')) {
                                $(this).css({
                                    "width": "100%",
                                    "max-width": "100%",
                                    "margin": "0 auto",
                                });
                            } else {
                                $(this).css({
                                    "width": "90%",
                                    "max-width": "1440px",
                                    "margin": "0 auto",
                                });
                            };

                            // if ($(this).hasClass('container--float-left')) {
                            // 	$('.container--float-left').css({
                            // 		"width": "90%",
                            // 		"max-width": "1440px",
                            // 		"margin": "0 auto",
                            // 	});
                            // };

                            // if ($(this).hasClass('container--float-right')) {
                            // 	$('.container--float-right').css({
                            // 		"width": "90%",
                            // 		"max-width": "1440px",
                            // 		"margin": "0 auto",
                            // 	});
                            // };
                        };
                    });
                };

                function containerFloatMargin() {
                    var containerSize = 1440;
                    var windowWidth = $(window).width();
                    var windowWith90 = (windowWidth / 10) * 9;
                    var marginSize = 0;

                    if (windowWith90 >= containerSize) {
                        marginSize = (windowWidth - containerSize) / 2;
                    } else {
                        marginSize = (windowWidth / 10) / 2;
                    };

                    $('.container-float-margin').css({
                        "width": marginSize + "px",
                        "min-width": marginSize + "px",
                    });
                };

                // Reset Nav
                function resetNav() {
                    $('body, .nav-mobile, .menu-trigger span').removeClass('mobile-menu-active');
                };

                // Functions to run on load
                // Length checks to see if page has these elements before running costly JavaScript resources
                $(document).ready(function () {
                    if ($('.container--float').length) {
                        containerFloat();
                    };

                    if ($('.container-float-margin').length) {
                        containerFloatMargin();
                    };

                    if ($('#hero').length) {
                        init();
                    };
                });

                // Functions to run on window resize
                // Length checks to see if page has these elements before running costly JavaScript resources
                $(window).resize(function () {
                    if ($('.container--float').length) {
                        containerFloat();
                    };

                    if ($('.container-float-margin').length) {
                        containerFloatMargin();
                    };

                    if ($('#hero').length) {
                        init();
                    };

                    resetNav();
                });


                /*
                 *
                 * General Functionality
                 *
                 */

                // Load More Button - Non Ajax
                $('.loadMore--alt').click(function () {
                    let grid = $(this).closest('.block__posts').find('.posts__grid');
                    let items = $(grid).find('.hidden');

                    if ($(items).length) {
                        let i;
                        for (i = 0; i <= 7; i++) {
                            if (items[i] == null) {
                                $(this).closest('.posts__load-more').remove();
                                break;
                            } else {
                                $(items[i]).removeClass('hidden');
                            }
                        };
                    } else {
                        $(this).closest('.posts__load-more').remove();
                    };
                });

                // Accordions
                $('.accordions__selectors button').click(function () {
                    var id = $(this).data('accordion-id');
                    $(this).siblings('button').removeClass('active');
                    $(this).addClass('active');

                    var accordion = $(this).closest('.block__accordions').find('.accordions__accordion[data-accordion-content="' + id + '"]')
                    $(this).closest('.block__accordions').find('.accordions__accordion').removeClass('active');
                    $(accordion).addClass('active');
                });

                // Tabs
                $('.tabs__selector').click(function () {
                    var id = $(this).data('id');
                    var closestBlock = $(this).closest('.block');

                    $(closestBlock).find('.tabs__selector').removeClass('active');
                    $(this).addClass('active');

                    $(closestBlock).find('.tabs__tab').removeClass('active');
                    $(closestBlock).find('.tabs__tab--' + id).addClass('active');
                });

                // Dropdown
                $('.dropdown__toggle').click(function () {
                    event.stopPropagation();
                    $(this).closest('.dropdown').toggleClass('open');
                });

                // Team
                $('.team__tabs button').click(function () {
                    var id = $(this).data('team-id');
                    $(this).siblings('button').removeClass('active');
                    $(this).addClass('active');

                    var team = $(this).closest('.block__team').find('.team__grid[data-team-content="' + id + '"]')
                    $(this).closest('.block__team').find('.team__grid').addClass('inactive');
                    $(team).removeClass('inactive');
                });

                // News Filter
                $('.news-category-filter').on('change', function () {
                    var category = this.value;

                    if (category == "*") {
                        $(this).closest('.block__posts').find('.post__post').removeClass('hidden');
                    } else {
                        $(this).closest('.block__posts').find('.post__post').addClass('hidden');
                        $(this).closest('.block__posts').find('.post__post[data-category="' + category + '"]').removeClass('hidden');
                    };
                });

                // Blog Filter
                $('.blog-category-filter').on('change', function () {
                    var category = this.value;

                    if (category == "*") {
                        $(this).closest('.block__posts').find('.post__post').removeClass('hidden');
                    } else {
                        $(this).closest('.block__posts').find('.post__post').addClass('hidden');
                        $(this).closest('.block__posts').find('.post__post[data-category="' + category + '"]').removeClass('hidden');
                    };
                });

                // News Load More Alt
                $('.loadMore--alt').click(function () {
                    if ($(this).hasClass('open')) {
                        $(this).removeClass('open');

                        $(this).closest('.latest__insights').find('.post__post.visible').removeClass('visible').addClass('hidden');
                    } else {
                        $(this).addClass('open');

                        $(this).closest('.latest__insights').find('.post__post.hidden').removeClass('hidden').addClass('visible');
                    };
                });

                // Resources Filter
                $('.resources__filter button').click(function () {
                    var id = $(this).data('resources-id');
                    $(this).siblings('button').removeClass('active');
                    $(this).addClass('active');

                    if (id == "all") {
                        $(this).closest('.block__resources').find('.resources__grid .resources__resource').removeClass('inactive');
                    } else {
                        $(this).closest('.block__resources').find('.resources__grid .resources__resource').addClass('inactive');
                        $(this).closest('.block__resources').find('.resources__grid .resources__resource[data-resources-value="' + id + '"]').removeClass('inactive');
                    };
                });

                /*
                 *
                 * Sliders
                 *
                 */


                /*
                 *
                 * Intersection Observer
                 *
                 */

                // Intersection Observer
                if ('IntersectionObserver' in window) {
                    // Intersection Observer Callback Function
                    blockObserverCallback = function (entries, observer) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('in-view');
                                observer.unobserve(entry.target);
                            };
                        });
                    };

                    // Intersection Observer Options
                    var blockObserverOptions = {
                        root: null,
                        rootMargin: '0% 0% -30% 0%',
                        threshold: 0,
                    }

                    // Creation of Intersection Observer
                    var blockObserver = new IntersectionObserver(blockObserverCallback, blockObserverOptions);
                    // Intersection Observer Elements to observe
                    blockObserverElements = document.querySelectorAll('.block');
                    // Pass Elements to Observer
                    blockObserverElements.forEach(function (blockObserverElement) {
                        blockObserver.observe(blockObserverElement);
                    });

                } else {
                    blockObserverElements = document.querySelectorAll('.block');
                    blockObserverElements.forEach(function (blockObserverElement) {
                        blockObserverElement.classList.add('in-view');
                    });
                }

                /*
                 *
                 * Google Map
                 *
                 */

                // Google Map
                function new_map($el) {
                    // var
                    var $markers = $el.find('.marker');

                    // vars
                    var args = {
                        zoom: 18,
                        center: new google.maps.LatLng(0, 0),
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        scrollwheel: false,
                        navigationControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        draggable: false,
                        styles: [{
                                "featureType": "all",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "on"
                                }]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "administrative.neighborhood",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "landscape.man_made",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "landscape.natural",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                        ],
                    };

                    // create map
                    var map = new google.maps.Map($el[0], args);

                    // add a markers reference
                    map.markers = [];

                    // add markers
                    $markers.each(function () {
                        add_marker($(this), map);
                    });

                    // center map
                    center_map(map);

                    // return
                    return map;
                }

                function add_marker($marker, map) {
                    // var
                    var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));

                    var icon = $marker.attr('data-icon');

                    // create marker
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: 'https://sjcp.tlp.dev/wp-content/themes/SJCP/assets/images/map-pin.svg',
                    });

                    // add to array
                    map.markers.push(marker);

                    // if marker contains HTML, add it to an infoWindow
                    if ($marker.html()) {
                        // create info window
                        var infowindow = new google.maps.InfoWindow({
                            content: $marker.html(),
                        });

                        // show info window when marker is clicked
                        google.maps.event.addListener(marker, 'click', function () {
                            infowindow.open(map, marker);
                        });
                    }
                }

                function center_map(map) {
                    // vars
                    var bounds = new google.maps.LatLngBounds();

                    // loop through all markers and create bounds
                    $.each(map.markers, function (i, marker) {
                        var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

                        bounds.extend(latlng);
                    });

                    // only 1 marker?
                    if (map.markers.length == 1) {
                        // set center of map
                        map.setCenter(bounds.getCenter());
                        map.setZoom(18);
                    } else {
                        // fit to bounds
                        map.fitBounds(bounds);
                    }
                }

                // global var
                var map = null;

                $('.acf-map').each(function () {
                    // create map
                    map = new_map($(this));
                });
            },
            finalize: function () {
                // JavaScript to be fired on all pages, after page specific JS is fired
            },
        },
        // Home page
        home: {
            init: function () {
                // JavaScript to be fired on the home page
            },
            finalize: function () {
                // JavaScript to be fired on the home page, after the init JS
            },
        },
        // About us page, note the change from about-us to about_us.
        about_us: {
            init: function () {
                // JavaScript to be fired on the about us page
            },
        },
        contact: {
            init: function () {},
        },
    };

    // The routing fires all common scripts, followed by the page specific scripts.
    // Add additional events for more control over timing e.g. a finalize event
    var UTIL = {
        fire: function (func, funcname, args) {
            var fire;
            var namespace = mirai;
            funcname = funcname === undefined ? 'init' : funcname;
            fire = func !== '';
            fire = fire && namespace[func];
            fire = fire && typeof namespace[func][funcname] === 'function';

            if (fire) {
                namespace[func][funcname](args);
            }
        },
        loadEvents: function () {
            // Fire common init JS
            UTIL.fire('common');

            // Fire page-specific init JS, and then finalize JS
            $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function (i, classnm) {
                UTIL.fire(classnm);
                UTIL.fire(classnm, 'finalize');
            });

            // Fire common finalize JS
            UTIL.fire('common', 'finalize');
        },
    };

    // Load Events
    $(document).ready(UTIL.loadEvents);
})(jQuery); // Fully reference jQuery after this point.