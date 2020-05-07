function time()
{
 'use strict';
    
 var date = new Date();
    
 var h = date.getHours();
    
 var m = date.getMinutes();
    
 var s = date.getSeconds();
    
 document.getElementById("clock").textContent= h + ':' + m + ':' + s;
    if(h < 10)
        {
            h = "0" + h;
        }
    if(m < 10)
        {
            m = "0" + m;
        }
    if(s < 10)
        {
            s = "0" + s;
        }
}
window.onload =function()
{
    'use strict';
     setInterval(time,500);
}
