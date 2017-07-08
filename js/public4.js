$(function (){

    function person (w,h) { 
        this.weight = w;
        this.height = h;
        this.bmi    = function () {
            return this.weight / Math.pow(this.height/100,2);
        }
    } 

    $('#button').on('click',function (){
        var w    = $('#weight').val ()
        var h    = $('#height').val ()
        var num1 = new person(w,h);

        $('#result').text(num1.bmi());
    });

    
})
   
