(function ($) {
    var SELECTORS = {
        nextButton: "#next",
        previousButton: "#previous",
        nthChild: "ul.carousel-nav li:eq",
        popUpImage: "img#popUp",
        modal: "#myModal",
        getNthChild: function (n) {
            return this.nthChild + '(' + n + ')';
        }
    };
    var CONSTANT = {
        showClassName: "show",
        visibleImageCount: 5
    };
    $(SELECTORS.nextButton).click(function () {
        if (CONSTANT.visibleImageCount >= 5 && CONSTANT.visibleImageCount < 20) {
            $(SELECTORS.getNthChild(CONSTANT.visibleImageCount - 5)).removeClass(CONSTANT.showClassName);
            $(SELECTORS.getNthChild(CONSTANT.visibleImageCount)).addClass(CONSTANT.showClassName);
            CONSTANT.visibleImageCount++;
        }
    });
    $(SELECTORS.previousButton).click(function () {
        if (CONSTANT.visibleImageCount > 5) {
            $(SELECTORS.getNthChild(CONSTANT.visibleImageCount - 1)).removeClass(CONSTANT.showClassName);
            $(SELECTORS.getNthChild(CONSTANT.visibleImageCount - 6)).addClass(CONSTANT.showClassName);
            CONSTANT.visibleImageCount--;
        }
    });
    $('ul.carousel-nav > li').click(function () {
        $(SELECTORS.popUpImage).attr('src', $(this).attr('data-image'));
        $(SELECTORS.modal).modal('show');
    });
})(jQuery);
