function lend1Timer(){
     $('#timeto-1').timeTo({
        //timeTo: new Date(new Date('Fri Jul 08 2016 09:00:00')),
        timeTo: new Date(new Date(lend1_year,lend1_mounts,lend1_day)),
        displayDays: 2,
        lang:'ru',
        displayCaptions: true,
        fontFamily:'Lato',
        fontSize:50
     });
    // var newYear = new Date(lend1_year, lend1_mounts-1, lend1_day)
    // $('#timeto-1').countdown({
    //     until: newYear,
    //     regionalOptions:'ru'
    // });
}


function focusSubmit(){
    $('.focus-tel').click(function(event) {
        $('.give-me-focus').focus();
    });
}

function lend1Timer2(){
     $('#timeto-2').timeTo({
        timeTo: new Date(new Date(lend2_year,lend2_mounts,lend2_day)),
        displayDays: 2,
        lang:'ru',
        displayCaptions: true,
        fontFamily:'EagleSans',
        fontSize:67
     });
}
$(document).ready(function(){
    lend1Timer();
    focusSubmit();
    lend1Timer2();
});

$(window).load(function(){

});

$(window).resize(function(){

});
