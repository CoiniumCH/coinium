(function($) {
    'use strict';

    $.QueryString = (function(paramsArray) {
        var params = {};

        for (var i = 0; i < paramsArray.length; ++i)
        {
            var param = paramsArray[i]
                .split('=', 2);

            if (param.length !== 2)
                continue;

            params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
        }

        return params;
    })(window.location.search.substr(1).split('&'));
})(jQuery);

(function($) {
    'use strict';

    $("span.cointicker").each(function(index) {
        var _this = this;

        var id = $(this).data('id');
        var convert = $(this).data('convert');

        var url = "https://api.coinmarketcap.com/v1/ticker/" + id + "/";
        if(convert !== undefined) {
            url += "?convert=" + convert;
        }

        $.getJSON(url, function( data ) {
            var price = 0;
            if(convert !== undefined) {
                price = data[0]['price_' + convert.toLowerCase()];
            } else {
                price = data[0]['price_usd'];
            }

            price = Math.round(price * 100) / 100;

            $(_this).text(price);
        });
    });

    $("a.new-window").each(function() {
        var _this = this;

        $(this).on('click', function(e){
            e.preventDefault();
            var url = $(_this).attr('href');
            console.log(url);
            window.open(url, '_blank');
        });
    })
})(jQuery);

// Init the search box
$(function(config) {
    'use strict';

    var lastQuery;

    if($.QueryString["query"] !== undefined
        && window.location.pathname === '/suche') {

        var applicationId = config.applicationId;
        var apiKey = config.apiKey;
        var indexName = config.indexName;

        var algolia = algoliasearch(applicationId, apiKey);
        var helper = algoliasearchHelper(algolia, indexName);
        helper.setQueryParameter('distinct', true);
        helper.on('result', onResult);

        // Content to hide/show when searching
        var $initialContent = $('.js-algolia__initial-content');
        var $searchContent = $('.js-algolia__search-content');
        var $searchContentResults = $searchContent.find('.algolia__results');
        $searchContentResults.on('click', 'a', onLinkClick);

        // Rendering templates
        var templateResult = Hogan.compile($('#algolia__template').html());
        var templateNoResults = $('#algolia__template--no-results').html();

        lastQuery = $.QueryString["query"];

        helper.setQuery(lastQuery).search();
        showResults();
        return false;
    }

    // Toggle result page
    function showResults() {
        window.scroll(0, 0);
        $initialContent.addClass('algolia__initial-content--hidden');
        $searchContent.addClass('algolia__search-content--active');

    }

    function onResult(data) {
        // Avoid race conditions, discard results that do not match the latest query
        if (data.query !== lastQuery) {
            return false;
        }
        var content = data.nbHits ? renderResults(data) : templateNoResults;
        $searchContentResults.html(content);
    }

    function renderResults(data) {
        return $.map(data.hits, function(hit) {
            if (hit.posted_at) {
                hit.posted_at_readable = moment.unix(hit.posted_at).fromNow();
            }
            hit.css_selector = encodeURI(hit.css_selector);
            hit.full_url = config.baseurl + hit.url;

            return templateResult.render(hit);
        }).join('');
    }

    // Scroll page to correct element
    function getAnchorSelector(hash) {
        var anchor = hash.substring(1);
        if (!anchor.match(/^algolia:/)) {
            return false;
        }
        return decodeURI(anchor.replace(/^algolia:/, ''));
    }

    function scrollPageToSelector(selector) {
        var target = $('.page,.post').find(selector);
        var targetOffset = target[0].getBoundingClientRect().top + window.pageYOffset - 20;
        window.setTimeout(function() {
            window.scroll(0, targetOffset);
        }, 100);
    }

    function onLinkClick(event) {
        var selector = getAnchorSelector(event.target.hash);
        // Normal link, going to another page
        if (event.target.pathname !== window.location.pathname || !selector) {
            return true;
        }
        // Scrolling to a result on the same page
        hideResults();
        scrollPageToSelector(selector);
        event.preventDefault();
        return false;
    }
}(window.ALGOLIA_CONFIG));