/*$(function(){}); this is a shorthand function call to document.ready event which looks like follows:

$(document).ready(function(){
    alert("hello);
});

The basic syntax to use jQuery is:
$(selector).action();
*/

$(function()
 {
    //All your jQuery code goes here
    //alert("Hello");
    //$('#box').hide();
    //$('.thing').fadeOut();
    //$('h1').css("color","blue");
    $("button").click(function(){
    $('#box').fadeOut(1000);
    });
    /*******************************************jQuery Selectors*************************************/
    
    // api.jquery.com/category/selectors
    //w3schools.com/jquery/jquery_reference_selectors.asp
    //w3schools.com/jquery/trysel.asp
    
    //Grouping Selectors!
    //$('h2,h3,h4').css('border','solid 1px red');
    
    
    //Id Selectors!
    //$('div#container').css('border','solid 1px red');
    
    //Class selector
    //$('p.lead').css('border','solid 1px red');
    
    //Pseudo-element selector - selects the first element
    //$('li:first').css('border','solid 1px red');//it only selects the first li on the page
    
    //Pseudo-element selector - selects all even p tag
    //$('p:even').css('border','solid 1px red');
    
    //Descendant Selectors
    //$('div em').css('border','solid 1px red');
    
    //Child Selector
    //$('div >p').css('border','solid 1px red');
    
    //jQuery Header Selector - selects all headers i.e. h1 to h6
    //$(':header').css('border','solid 1px red');
    
    //jQuery Contains Selector
    //$('div:contains("Himanshu")').css('border','solid 1px red');
    
    
    
    
    /*******************************************jQuery Events*************************************/
    //api.jquery.com/category/events
    //w3schools.com/jquery/jquery_ref_events.asp
    
    $('#box').click(function(){
        alert('you just clicked a box!');
    });
    
    $('input[type="text"]').blur(function(){
        if($(this).val()==""){
            $(this).css('border','solid 1px red');
            $('#box').text('Forget to add some text');
        }
    });
    
    $('input [type="text"]').keydown(function(){
       if($(this).val !== ""){
           $(this).css('border','solid 1px #777');
           $('#box').text("Thanks for that!!");
       } 
        if($(this).val()==""){
            $(this).css('border','solid 1px red');
            $('#box').text('Forget to add some text');
        }
    });
    
    $('#box').hover(function(){
        //code which will be executed on mouse in
        $('#box').text('You hovered in!!');
    },function(){
        //code which will be executed on mouse out
        $('#box').text('You hovered out!!');
    });
    
    
    
    
    
    
    
    
    
    
    /****************************************js for chaining.html********************************/
    //$('.notification-bar').delay(2000);
    //$('.notification-bar').slideDown();
    //$('.notification-bar').delay(3000);
    //$('.notification-bar').slideUp();
    
    /*---------------------------The below concept is known as Chaining----------------------------*/     
    $('.notification-bar').delay(2000).slideDown().delay(3000).slideUp();
    
    
    /*******************************js for hide-show.html******************************/
    //$('h1').hide();
    //$('.hidden').show();
    //$('div.hidden').fadeIn(8000);
    
    $('#box1').click(function(){
        $(this).fadeTo(3000,0.5,function(){
            $('this').slideUp();
        });
    });
    
    $('div.hidden').slideDown();
    $('button').click(function(){
        $('#box1').slideToggle();
    }); 
    
    
    /******************************JS for Animate.html********************************/
    $('#left').click(function(){
        $('.box').animate({
            left:"-=10px",
            fontSize:"+=2px"
        },function(){
            //code to be executed when animation is completed
        });
    });
    $('#right').click(function(){
        $('.box').animate({
            left:"+=10px",
            fontSize:"-=2px"
        },function(){
            //code to be executed when animation is completed
        });
    });

    $('#up').click(function(){
        $('.box').animate({
            top:"-=20px",
            opacity:"+=0.1"
        },function(){});
    });
    
    $('#down').click(function(){
        $('.box').animate({
            top:"+=20px",
            opacity:"-=0.1"
        },function(){});
    });
    
    /*********************************************CSS.HTML************************************************/
    $('#circle2').css({
        'background': '#8a8d22',
        'color':'white',
        'display':'inline-block',
        'text-align':'center',
        'line-height':'150px',
        'width':'150px',
        'height':'150px',
    }).addClass('circleShape');
    
    
    
    /*******************************js for error-box.html********************************/
    $('.cross').click(function(){
        $('.error').slideToggle();
    }); 
    
    /************************************JS for CAR RACE***************************************************/
    $('#go').click(function(){
        
        function checkIfComplete(){
            if(isComplete==false)
                {
                    isComplete=true;
                }
            else{
                place='second';
            }
        }
        //set the flag variable to false by default
        var isComplete=false;
        
        //set a place variable to first by default
        var place='first';
        //get width of the cars
        var carWidth=$('#car1').width();
        //get width of the race track
        var raceTrackWidth=$(window).width()-carWidth;
        
        //generate two randoms numbers between 1-5000
        
        var raceTime1=Math.floor(1+(Math.random()*5000));
        
        var raceTime2=Math.floor(1+(Math.random()*5000));
        
        $('#car1').animate({
            //move the car
            left: raceTrackWidth,
        },raceTime1,function(){
            //code to be run after race completes
            checkIfComplete();
            $('#raceInfo1 span').text('Finished in '+place+' place and clocked in at '+raceTime1+' milliseconds!');
        });
         $('#car2').animate({
            //move the car
            left: raceTrackWidth,
        },raceTime2,function(){
            //code to be run after race completes
             checkIfComplete();
             $('#raceInfo2 span').text('Finished in '+place+' place and clocked in at '+raceTime2+' milliseconds!');
        });
    });
    $('#reset').click(function(){
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });
    
});