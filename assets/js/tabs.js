(function($) {

    $.organicTabs = function (el, options) {

        var base = this;
        base.$el = $(el);
        base.$nav = base.$el.find('.tab-nav');

        base.init = function () {
            base.options = $.extend({}, $.organicTabs.defaultOptions, options);

            //Accessible hiding fix
            $(".hide").css({
                "position": "relative",
                "top" : 0,
                "left" : 0,
                "display": "none"
            });

            base.$nav.delegate("li > a", "click", function() {
                // Figure out current list via css class
                var curList = base.$el.find("li.current a").attr("href").substring(1);
                // List moving to
                $newList = $(this);
                // Figure out the ID of the new list
                listId = $newList.attr("href").substring(1);
                //Set outer wrapper to (static) height of its current inner list
                $allListWrap = base.$el.find(".tab-content");
                curListHeight = $allListWrap.height();
                $allListWrap.height(curListHeight);

                if((listId != curList) && (base.$el.find(":animated").length == 0)) {
                    // Fade out current list
                    base.$el.find("#"+curList).fadeOut(base.options.speed, function () {
                        //Fade in new list on callback
                        base.$el.find("#"+listId).fadeIn(base.options.speed);
                        // Adjust outer wrapper to fit new content snugly
                        var newHeight = base.$el.find("#"+listId).height();
                        $allListWrap.animate({
                            height: newHeight
                        });

                        // Remove highlighting, add to new clicked tab
                        base.$el.find('.tab-nav li').removeClass("current");
                        $newCurrent = $newList.parent();
                        $newCurrent.addClass("current");
                    });
                }

                //Don't behave like a regular link
                return false;
            });

        };
        base.init();

    };

    $.organicTabs.defaultOptions = {
        "speed": 300
    };

    $.fn.organicTabs = function (options) {
        return this.each(function () {
            (new $.organicTabs(this, options));
        });
    };
})(jQuery);