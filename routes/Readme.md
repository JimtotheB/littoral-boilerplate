# Creating Demo applications

Littoral allows you to create sub apps that are completely separated from the rest of the system.
You can easily add custom resources to make every application look and function differently.

You can even install dependencies with npm and use them inside of a sub application. However that is borderline
creeping beyond the scope of what Littoral is designed to do.

# Structure.

A Littoral sub application is made up of three main parts.

* An index.js file where your routes are defined.
* A Views directory where your template files are stored
* A public directory where your assets are stored.

## Simplest example.

#### File structure.

~/.littoral/routes/MyDemo

```
├── index.js
├── public
│   ├── css
│   ├── images
│   └── js
└── views
    └── index.jade 
```
#### Route definitions and available data

~/.littoral/routes/MyDemo/index.js

```javascript 
/*
 * This function is called by Littoral route builder, the router object 
 * that is passed in as a parameter will be mounted to an express application
 * that is configured based on the data returned from this function.
 */ 
module.exports = function(router){

  /*
   * This is the entry point for your sub application.
   * res.render('index') will render the index.jade file 
   * in the views directory. The object that is passed in 
   * after will be available for use in the template. 
   */
  
  router.get('/', function(req, res){
    res.render('index', {
      description: 'This value was set on the server on '+ new Date()
    });
  });

  /*
   * Required parameters will differ on your theme requirements.
   * Feel free to add anything you want available to the main
   * application here.
   *
   */
  
  return {
    name: 'My cool demo project',
    title: 'A second cool project',
    description: "Here is a cool project I made.",
    basePath: '/awesome',
    //Optional
    teaserImage: 'awesome.jpg'
  }
};
```

#### index.jade file.

~/.littoral/routes/MyDemo/views/index.jade

There are two options available here. 1.) Extend the main applications base jade file which will use the base files css, javascript etc. 2.) Load up an entirely independent index.jade file, you will have to manage all of the css, js and images.


```jade
//extending the base jade file.
extends /base
block header
	.container
		.row
			.col-sm-12
				h1 #{app.name}
				h3 #{app.description}
				
block pageContent
	.container
		.row
			.col-sm-6
				h1 My awesome demo stuff here
			.col-sm-6
				//more cool demo stuff

//Assets are loaded from the basePath 
block scripts	
	script(src="/awesome/js/script.js")
```

```jade
//Standalone
doctype html
	html
		head
			//All of your head content
		body
			//All of your body content.
			//This path is not prefixed with a / as it is relative to 
			//the view directory inside the sub application.
			include content
		
```