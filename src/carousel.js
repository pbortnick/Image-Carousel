(function ($) {
    var SELECTORS = {
        nextButton: "#next",
        previousButton: "#previous",
        allChild: "ul.carousel-nav > li",
        nthChild: "ul.carousel-nav li:eq",
        popUpImage: "img#popUp",
        modal: "#myModal",
        getNthChild: function (n) {
            return this.nthChild + '(' + n + ')';
        }
    };
    var CONSTANT = {
        showClassName: "show",
        disableClassName: "disable",
        imageSrcAttribute: "data-image",
        visibleImageCount: 5,
        lastVisibleImageCount: 5,
        totalImageCount: 20
    };
    $(SELECTORS.nextButton).click(function () {
        if (CONSTANT.lastVisibleImageCount === (CONSTANT.totalImageCount - 1)) {
            $(SELECTORS.nextButton).addClass(CONSTANT.disableClassName);
        }
        else if (CONSTANT.lastVisibleImageCount === CONSTANT.visibleImageCount) {
            $(SELECTORS.previousButton).removeClass(CONSTANT.disableClassName);
        }
        if (CONSTANT.lastVisibleImageCount >= CONSTANT.visibleImageCount && CONSTANT.lastVisibleImageCount < CONSTANT.totalImageCount) {
            $(SELECTORS.getNthChild(CONSTANT.lastVisibleImageCount - CONSTANT.visibleImageCount)).removeClass(CONSTANT.showClassName);
            $(SELECTORS.getNthChild(CONSTANT.lastVisibleImageCount)).addClass(CONSTANT.showClassName);
            CONSTANT.lastVisibleImageCount++;
        }
    });
    $(SELECTORS.previousButton).click(function () {
        if (CONSTANT.lastVisibleImageCount === (CONSTANT.visibleImageCount + 1)) {
            $(SELECTORS.previousButton).addClass(CONSTANT.disableClassName);
        }
        else if (CONSTANT.lastVisibleImageCount === CONSTANT.totalImageCount) {
            $(SELECTORS.nextButton).removeClass(CONSTANT.disableClassName);
        }
        if (CONSTANT.lastVisibleImageCount > CONSTANT.visibleImageCount) {
            $(SELECTORS.getNthChild(CONSTANT.lastVisibleImageCount - 1)).removeClass(CONSTANT.showClassName);
            $(SELECTORS.getNthChild(CONSTANT.lastVisibleImageCount - (CONSTANT.visibleImageCount + 1))).addClass(CONSTANT.showClassName);
            CONSTANT.lastVisibleImageCount--;
        }
    });
    $(SELECTORS.allChild).click(function () {
        $(SELECTORS.popUpImage).attr('src', $(this).attr(CONSTANT.imageSrcAttribute));
        $(SELECTORS.modal).modal(CONSTANT.showClassName);
    });
})(jQuery);
