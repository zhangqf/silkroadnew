$(".ui-list").on("click", "span", function() {
    var index = $(this).index() - 1;
    $(this).addClass("active").siblings().removeClass("active")
    if (index < 0) {
        $(".ui-menu-content .ui-create").show()
    } else {
        $(".ui-menu-content .ui-create").eq(index).show().siblings().hide()
    }

})