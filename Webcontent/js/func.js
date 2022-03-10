$(function() {
    $(".menu-toggle").click(function() {
        this.value += parseInt(1);
        if(this.value == 1) {
            $("#article").css("width","80%");
            $("#aside").css("width","20%").css("display","block");
        } else {
            $("#article").css("width","100%");
            $("#aside").css("width","0%").css("display","none");
            this.value = "";
        }
    });
});