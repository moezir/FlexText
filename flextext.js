/**
 * @preserve  flextext
 * @name      flextext.js
 * @author    Motasem Zir
 * @author    moe.zeer@gmail.com
 * @version   0.5.1
 * @date      2019-01-19
 * @copyright (c) 2019
 * @license   Apache License 2.0
 * @homepage  https://github.com/moezir/FlexText
 */

(function ($) {
    $.fn.flextext = function (options) {
        var _settings = $.extend({}, {
            minFont: 4,
            maxFont: 32,
            oneLine: false,
            onResize: true,
            paddingV: "0px",
            paddingH: "0px",
            fontWeight: "normal"
        }, options);

        $this = this;
        var _scrollWidth = 'scrollWidth';
        var _scrollHeight = 'scrollHeight';
        var _fontSize = 'font-size';
        var _whiteSpace = 'white-space';
        var _padding = 'padding';
        var _overflow = 'overflow';
        var _hidden = 'hidden';
        var _nowrap = 'nowrap';
        var _fontWeight = 'normal'

        if (_settings.onResize)
            ft_OnResize();

        ft_Flex($this);



        function ft_Flex(el) {
            return $(el).each(function () {
                $(this).css(_overflow, _hidden);
                $(this).css(_padding, _settings.paddingV +' ' + _settings.paddingH);                
                $(this).css(_fontWeight, _settings.fontWeight);
                
                if (_settings.oneLine)
                    $(this).css(_whiteSpace, _nowrap);
                for (var i = _settings.maxFont; i >= _settings.minFont; i--) {
                    $(this).css(_fontSize, i + "px");
                    if ((Math.ceil($(this).prop(_scrollWidth)) <= Math.ceil($(this).width()) && Math.ceil($(this).prop(_scrollHeight)) <= Math.ceil($(this).height())) || i == _settings.minFont) {
                        break;
                    }
                }
            });
        }

        function ft_OnResize() {
            $(window).resize(function () {
                ft_Flex($this);
            });
        };
    };
}(jQuery));
