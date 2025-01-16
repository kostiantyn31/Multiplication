# Multiplication
Multiplication web app
1. Build home page with JS
1. Build options page with JS
1. Build questions page with JS
1. Build feedback page / pop-up with JS
1. Build stats page with JS
1. Make home page fancy with CSS
1. Update other pages with CSS

KOSTIA:  The reason it broke where it did was that we had a DOM element with id = "answer" and a variable called answer.  When I wrote answer.value="" it was pointing at the locally declared variable and breaking. 

I solved this by using "response" for the variable "answer", replacing wherever that happened. 