(function() {
    'use strict';

    $("span.cointicker").each(function( index ) {
        var _this = this;

        var id = $(this).data('id');
        var convert = $(this).data('convert');

        var url = "https://api.coinmarketcap.com/v1/ticker/" + id + "/";
        if(convert !== undefined) {
            url += "?convert=" + convert;
        }

        $.getJSON(url, function( data ) {
            var price = 0
            if(convert !== undefined) {
                price = data[0]['price_' + convert.toLowerCase()];
            } else {
                price = data[0]['price_usd'];
            }

            price = Math.round(price * 100) / 100;

            $(_this).text(price);
        });
    });
})(jQuery);