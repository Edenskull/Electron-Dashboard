$(document).ready(function(){
    setInterval(function(){
        $("#clock").text(moment().format('LTS'));
    }, 1000);
})
