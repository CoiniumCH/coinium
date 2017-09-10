(function() {
    'use strict';

    $("span.cointicker").each(function( index ) {
        var _this = this;
        var id = $( this ).data('id');

        $.getJSON( "https://api.coinmarketcap.com/v1/ticker/" + id + "/", function( data ) {
            var priceUSD = data[0]['price_usd'];

            $(_this).text(priceUSD);
        });
    });
})(jQuery);