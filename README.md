canvasGrid
==========

Places a evenly distributed grid pattern across your HTML5 Canvas element. The point of this little bit of code is to help newbie's to HTML5 Canvas, like myself (day 2 as of this writing), visiualize their canvas while picking out points. 

I was going to take some ideas that I had gotten from some lessons I had done the night before and see if I could work them out. The problem I had was getting my brain wrapped around this imaginary grid of the canvas. I had a sheet of graph paper next to me, but felt that I could come up with something better. Being new to JavaScript, I took it as a challange and this is what came out of it. 

##How to Use
###Set-up
Just import the grid.js file into your project. Of course, point to it. As long as the id of your canvas is "canvas" your golden. If not, you can either adjust the id of your element or adjust the files canvas variable, whichever makes you happy tickles me to death. 

###Adjusting the Grid
The file grabs your canvase size, so there is no need for adjustments to that. All you need to do is open the file and find the var "inc" (for increment) within the init function, at the top of the file. Adjust this var to meet your needs.

So if you wanted a 5px grid on your canvas, just change the inc variable to 5 and walla! 
![5px Grid](https://docs.google.com/file/d/0B-kKCIm8tW4gV1ZvVExuQlpMMmM/edit?usp=sharing "5px Grid on Canvas")

And if you wanted a 10px grid on your canvas, change inc to 10 and...
![5px Grid](https://docs.google.com/file/d/0B-kKCIm8tW4gM0tYVVpsVkJxeVk/edit?usp=sharing "10px Grid on Canvas")

I think you get the idea. Hope this helps some folks out while they are learning HTML5 Canvas, as I am. That is where the idea of this came from. 
