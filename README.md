canvasGrid
==========

Places a evenly distributed grid pattern across your HTML5 Canvas element. The point of this little bit of code is to help newbie's to HTML5 Canvas, like myself (day 2 as of this writing), visiualize their canvas while picking out points. 

I was taking some ideas I got from some lessons I went through the night before and seeing if I could work them out on my own. The problem I had was getting my brain wrapped around this imaginary grid that is the canvas element. I had a sheet of graph paper next to me, but felt that I could come up with something a little better than pencil and graph paper. Being new to JavaScript, I took it as a challange and this is what came out of it.

##How to Use
###Set-up
Just import the grid.js file into your project. Of course, point to it. As long as the id of your canvas is "canvas" your golden. If not, you can either adjust the id of your element or adjust the files canvas variable, whichever makes you happy tickles me to death. Be sure to set the width and height of your canvas in the element or within your CSS. I have read different takes on this, but whatever works for you again... tickles me to death. 

###Adjusting the Grid
The file dynamically grabs your canvase size, so there is no need for adjustments to that. All you need to do is open the **grid.js** file and look at the bottom where drawGrid('increment') is called. Adjust the value inside the () to meet your needs. The default is 10, so just play around with it.

So if you want a 5px grid on your canvas, just change the increment parameter to 5 and walla! 
![5px Grid](https://lh4.googleusercontent.com/-1LcHfAl5rzA/USqilSKscbI/AAAAAAAACDc/gnwbIfbX0k0/w904-h428-o-k/5pixel.PNG "5px Grid on Canvas")

And if you wanted a 10px grid on your canvas, change increment to 10 and...
![10px Grid](https://lh3.googleusercontent.com/-HGWLgSdSQC4/USqiks4qbMI/AAAAAAAACDM/EIPokXwpV-M/w839-h395-o-k/10pixel.PNG "10px Grid on Canvas")

I think you get the idea. Each block on the grid represents the grid spacing that you provide by the increment parameter. So if you set it to 5, each block will be 5 pixels square and so on. Hope this helps some folks out while they are learning HTML5 Canvas, as I am. 
