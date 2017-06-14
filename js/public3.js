$(function(){
    var x = parseInt( Math.random() * 100 );
    $('#send').on('click',function(){
        var num = $('input[name="send"]').val();
        var min = $('#min');
        var max = $('#max');
        var result = '';
        if ( !isNaN(num) ) {   
            if (num > x ) {
                result = '小一點';
                $('#max').text(num);
            } else if ( num == x ) {
                result = '答對了';
            } else {
                result = '大一點';
                $('#min').text(num);
            }
            num > x ? result = '小一點' : num == x ? result = 'bingo': result = '大一點';

            var content = $('<div />').addClass ('list').append($('<span />').text('你的數字：'+num+' 結果： '+result)).append($('<a />').text());
            $('.lists').append(content);
        }
        
    })

}); 