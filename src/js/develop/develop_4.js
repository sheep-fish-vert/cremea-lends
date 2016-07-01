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


$(document).ready(function(){
    lend1Timer();
});

$(window).load(function(){

});

$(window).resize(function(){

});
