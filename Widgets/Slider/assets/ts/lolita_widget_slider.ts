/// <reference path="jquery.d.ts" />

namespace LolitaFramework {
    export class Slider {

        /**
         * Slider widget
         */
        constructor() {

            // Init bxSlider triggers
            //==================================================================================================================
            jQuery('.bx_slider').each(function() {

                var $options = {

                    // GENERAL
                    mode: 'fade',
                    slideSelector: '',
                    infiniteLoop: true,
                    hideControlOnEnd: false,
                    speed: 500,
                    easing: 'swing',
                    slideMargin: 0,
                    startSlide: 0,
                    randomStart: false,
                    captions: false,
                    ticker: false,
                    tickerHover: false,
                    adaptiveHeight: false,
                    adaptiveHeightSpeed: 500,
                    video: false,
                    useCSS: true,
                    preloadImages: 'visible',
                    responsive: true,
                    slideZIndex: 50,
                    wrapperClass: 'bx-wrapper',

                    // TOUCH
                    touchEnabled: false,
                    swipeThreshold: 50,
                    oneToOneTouch: true,
                    preventDefaultSwipeX: true,
                    preventDefaultSwipeY: false,

                    // KEYBOARD
                    keyboardEnabled: false,

                    // PAGER
                    pager: false,
                    pagerType: 'full',
                    pagerShortSeparator: ' / ',
                    pagerSelector: null,
                    buildPager: null,
                    pagerCustom: null,

                    // CONTROLS
                    controls: false,
                    nextText: 'Next',
                    prevText: 'Prev',
                    nextSelector: null,
                    prevSelector: null,
                    autoControls: false,
                    startText: 'Start',
                    stopText: 'Stop',
                    autoControlsCombine: false,
                    autoControlsSelector: null,

                    // AUTO
                    auto: false,
                    pause: 7000,
                    autoStart: true,
                    autoDirection: 'next',
                    autoHover: false,
                    autoDelay: 0,
                    autoSlideForOnePage: false,

                    // CAROUSEL
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 0,
                    slideWidth: 0,

                    // CALLBACKS
                    onSliderLoad: function() {
                        return true
                    },
                    onSlideBefore: function() {
                        return true
                    },
                    onSlideAfter: function() {
                        return true
                    },
                    onSlideNext: function() {
                        return true
                    },
                    onSlidePrev: function() {
                        return true
                    },
                    onSliderResize: function() {
                        return true
                    }
                };

                if (jQuery(this).hasClass('pager')) {
                    $options.pager = true;
                }

                if (jQuery(this).hasClass('controls')) {
                    $options.controls = true;
                }

                if (jQuery(this).hasClass('auto')) {
                    $options.auto = true;
                }

                var $object = jQuery(this).bxSlider($options);
            });
        }
    }
    (<any>window).LolitaFramework.slider_widget = new Slider();
}