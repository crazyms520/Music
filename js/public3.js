$(function(){
    var x = parseInt( Math.random() * 100 );
    $('#send').on('click',function(){
        var num = $('input[name="send"]').val();
        var result = '';
        if ( !isNaN(num) ) {   
            num > x ? result = '小一點';

            var content = $('<div />').addClass ('list').append($('<span />').text(num)).append($('<a />').text());
            $('.lists').append(content);
        }
        
    })

});