$(document).ready(function () {
    $('.pricing-button').click(function () {
        $('#myModal').modal('show');
    });
});

$(document).ready(function () {
const userSlider = document.getElementById("userSlider");
const userCountDisplay = document.getElementById("userCount");
// console.log("Slider",userSlider)
// Function to highlight the plan based on user count
function highlightPlan(userCount) {
    // Reset all plans
    $(".pricing-plan").removeClass("highlighted");
    
    // plan that matches the user range
    $(".pricing-plan").each(function () {
        const min = parseInt($(this).data("range-min"));
        const max = parseInt($(this).data("range-max"));
        if (userCount >= min && userCount <= max) {
            // console.log(range-min)
            $(this).addClass("highlighted");

            return false; 
        }
    });
}

 const freeDiv = document.getElementById("free");
 const proDiv = document.getElementById("pro");
 const enterprisediv=document.getElementById("enterprise")


userSlider.addEventListener("input", function () {
    const userCount = parseInt(userSlider.value);
    userCountDisplay.textContent = userCount;
    if(userSlider.value<=10){
        proDiv.style.boxShadow="0px 0px";
        enterprisediv.style.boxShadow="0px 0px";
       freeDiv.style.boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        // free.style.color="blue"
    }
    else if(userSlider.value<=20){
  freeDiv.style.boxShadow="0px 0px";
  enterprisediv.style.boxShadow="0px 0px";
    proDiv.style.boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

    }
    else{
     freeDiv.style.boxShadow="0px 0px";
    proDiv.style.boxShadow="0px 0px";
    enterprisediv.style.boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

    }
    console.log(userSlider.value,"slidervalue")
    highlightPlan(userCount);
});
});





// Task 2 - vanilla JS

document.getElementById('submitButton').addEventListener('click', function() {
var form = document.getElementById('myForm');
form.submit();
});