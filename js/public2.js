$(function(){
    

    $ ('#send').on ('click', function (){
        var input = $('input[name="send"]').val();
        if (input) {
            $('.lists')
            .append( $('<div />')
                .addClass('list')
                .append( $('<span />').text (input) )
                .append (
                    $('<a />')
                    .text ('變色')
                    .on('click',function(){
                        $(this).parent().hasClass('blue')?$(this).parent().removeClass('blue'):$(this).parent().addClass('blue')
                    })
                )
                .append (
                    $('<a />')
                    .text ('修改')
                    .on('click',function(){
                        var newInput = prompt("","");
                        $(this).prevAll('span').text(newInput);
                    })
                )        
                .append(
                    $('<a />')
                    .text('刪除')
                    .on('click',function(){
                        $(this).parent().remove();
                    })
                )
            )
        }
    });
    

});