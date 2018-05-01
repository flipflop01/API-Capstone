$(document).ready(function(){
        var placeHolder = ['one','two','three','four','five'];
        var n=0;
        var loopLength=placeHolder.length;

        setInterval(function(){
           if(n<loopLength){
              var newPlaceholder = placeHolder[n];
              n++;
              $('input').attr('placeholder',newPlaceholder);
           } else {
              $('input').attr('placeholder',placeHolder[0]);
              n=0;
           }
        },2000);
    });