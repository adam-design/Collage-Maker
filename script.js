// this variable will hold whichever object is currently being dragged
var currentlyDragging;

// this variable holds the curent mode (0=move, 1=resize, 2=rotate)
var mode = 0;

// these variables stores the old y position of the cursor (it is updated in whileDragging)
var oldY;

// run this code when fully loaded
$(window).load(function () {
    
    // attach the mousedown event to all image tags
    $("img").mousedown(startDragging);
    
    // attach the mousemove event to all image tags
    $("img").mousemove(whileDragging);
    
    // attach the mouseup event to all image tags
    $("body").mouseup(doneDragging);
    
    // attach the onchange event to the dropdown toolchooser
    $("#toolchooser").change(changeMode);
    
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
        
    // mode 0, move
    if (mode == 0)
    {
        // for moving, dragging the image moves it to to the new coordinates
        
        // offset the new drag coordinates (by half the image height)
        var newY = e.pageY - 150;
        var newX = e.pageX - 150;

        // adjust the x and y values of the currently being dragged image
        currentlyDragging.css({"margin-top":newY+"px", "margin-left":newX+"px"});
    }
    // mode 1, resize
    else if (mode == 1)
    {
        // for resizing, dragging the image up makes it larger, down makes it smaller
        
        // to detect if the cursor moved up or down, we need to check if its y value is greater than or less than the y value that it previously held
        if (e.pageY > oldY)
        {
            // dragged down, make it smaller
            currentlyDragging.css({height: '-=10%', width: '-=10%'})
        }
        else if (e.pageY < oldY)
        {
            // dragged up, make it larger
            currentlyDragging.css({height: '+=10%', width: '+=10%'})
        }
        
        // update old Y for the next call to currentlyDragging
        oldY = e.pageY;
    }
}

function doneDragging(e)
{
    // unset the image that's being dragged
    currentlyDragging = null;
}


// the following function is called when the mode changes

function changeMode()
{
    // get the index (0 through 2 of the selection
    var selectedIndex = $(this)[0].selectedIndex;
        
    // update the global mode variable
    mode = selectedIndex;
}