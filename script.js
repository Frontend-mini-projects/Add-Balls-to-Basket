$(document).ready(function(){
    $(function(){
        // counter part
        var count=0;
        $("#addBtn").click(function(){
            console.log('clicked btn');
            $("#container").append('<div class="balls"></div>'); // append in div 
            var arr=['red','blue','pink','green','yellow','red','orange','black',
            'darkorchid','deeppink','purple','saddlebrown','lightseagreen'
            ,'deepskyblue','firebrick','crimson','aquamarine','coral']; //arr 
            const num=Math.floor((Math.random() * arr.length)+ 0 ); // random value 
            console.log(num); // return arr index arr index always start with 0
               const ballColor=arr[num]; // store in ballColor value of color 
               console.log(ballColor); // print value in console  
               var spans=$(".balls");
               console.log(spans);
               const element=spans.eq(count);
               console.log(element); // print value in console
               count=count+1; // count increment
               element.css({
                   "background-color":ballColor // value of color
               });
        });
    });
});