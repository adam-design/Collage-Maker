// this variable will hold whichever object is currently being dragged
var currentlyDragging;

// run this code when fully loaded
$(window).load(function () {
    
    // attach the mousedown event to all image tags
    $("img").mousedown(startDragging);
    
    // attach the mousemove event to all image tags
    $("img").mousemove(whileDragging);
    
    // attach the mousedown event to all image tags
    $("img").mouseup(doneDragging);
    
});

// start dragging will always fire, then while dragging, and finally done dragging on mouse up

function startDragging(e)
{
    // set this image as the current one to be dragged
    currentlyDragging = $(this);
}

function whileDragging(e)
{
    if (currentlyDragging == null)
        return false;
        
    // offset the new drag coordinates (by half the image height)
    var newY = e.pageY - 150;
    var newX = e.pageX - 150;
    
    // adjust the x and y values of the currently being dragged image
    currentlyDragging.css({"margin-top":newY+"px", "margin-left":newX+"px"});
}

function doneDragging(e)
{
    // unset the image that's being dragged
    currentlyDragging = null;
}