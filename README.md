# express-services

Build a website for a service provider (plumber, electrician, computer repair, etc.). Feel free to invent a service that doesn't currently exist. Please keep it PG (I wouldn't say it if it hadn't been a problem in the past).
Here are specs for the finished website:
  -Contains a title page, service listings page, and an order page.
  -Use Express and Pug for templates and routing
  -Add Cool CSS transitions on pages (http://www.w3schools.com/css/css3_transitions.asp)
  -Minimum eight service items for each category with item name, description, price, and image (can use content from the internet)
  -Load the service items, their image names, prices, and the descriptions from a JSON file on the back-end (https://www.codementor.io/nodejs/tutorial/how-to-use-json-files-in-node-js)
  -Display the service items using an 'each' in Pug (https://pugjs.org/language/iteration.html)
  -The order page should be a form that requires name, address, phone, and has a checkboxes for the services desired
  -When the order form has been submitted, have the information be saved to a text file on the server using 'fs'. (http://www.c-sharpcorner.com/UploadFile/dacca2/node-js-in-action-create-simple-text-file-in-node-js-using/)
  -Professionally designed pages (look at other service websites for inspiration)
  -Nothing should break or look terrible if I change the window size, although mobile sizes are not required
  -No libraries or modules except FS, Express, and Pug
  -All code must be original and from this class
Additional Resources:
https://pugjs.org/api/getting-started.html
 - Since we have only scratched the surface in Pug, you may want to brush up on all the cool things it can do
 
Deliverables:
Zip up your entire project WITHOUT the 'node_modules' folder. Make sure you have a working 'package.json' that has all of your dependencies. If my graders can't set it up using 'npm install', it will be returned and your project will be late.
