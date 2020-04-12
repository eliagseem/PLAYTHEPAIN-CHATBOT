$(document).ready(function(){
    $('#conditionZoom').css('display','none');
    $('#truthZoom').css('display','none');

});

function showZoom(image){
    $('#'+image+'Zoom').css('display', 'block');
}

function closeZoom(image){
    $('#'+image+'Zoom').css('display', 'none');
}