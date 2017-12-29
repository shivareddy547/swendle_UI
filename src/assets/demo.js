function check(value){
    var result = $('.front-crd .crd-ques form').serialize();
    checkVal(result,value);
    $('.crd-flip').toggleClass('flip');
}
function checkVal (result,value){
    console.log(value);
    if (value == "1"){
        $("#Admin").show("slow");
        $("#Live").hide();
        $("#Customer").hide();
    }
    else if(value == "0"){
        $("#Admin").hide();
        $("#Live").show("slow");
        $("#Customer").hide();


    }
    else if(value == "2"){
        $("#Admin").hide();
        $("#Live").hide();
        $("#Customer").show("slow");
    }
    else if(value == "3"){
        $("#Admin").hide();
        $("#Live").hide();
        $("#Customer").show("slow");
    }
}
function expand() {
    var $this =$(this).data("#panel-fullscreen");
    console.log($this);
    if ($this.children('i').hasClass('fa-window-maximize')) {
        $this.children('i').removeClass('fa-window-maximize');
        $this.children('i').addClass('fa-window-minimize');
    } else if ($this.children('i').hasClass('fa-window-minimize')) {
        $this.children('i').removeClass('fa-window-minimize');
        $this.children('i').addClass('fa-window-maximize');
    }
    $(this).closest('.panel').toggleClass('panel-fullscreen');
}

