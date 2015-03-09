# Littoral
### Boilerplate theme and routes

This is a bare bones setup for the Littoral demo server.

### Installation.

As the user you are running the Littoral application under. Clone this repo into ~/.littoral

```shell 
$ git clone https://github.com/PaperElectron/littoral-boilerplate.git ~/.littoral
```

If you plan on tracking your changes with git, you can either fork this project and follow the instructions above, or delete the .git directory inside and recreate it to point to your own private repo somewhere.


# Template variables.

The main application has several variables available for you to use in your Jade templates.


### Global variables

settings.js located in the ~/.littoral directory holds a number of variables that will be assigned to 

```javascript
app.locals.site
```
and available anywhere inside your templates with

```javascript
site.<property>
site.name: 'My Demo site',
site.description: 'Where I host my cool demos.'
```

Feel Free to add any additional variables to this section as necessary.

### Loaded applications

Loaded application data is assigned to 

```javascript
app.locals.apps
``` 

and is available in your templates as

```javascript
apps[index]
```
### Inside loaded sub applications.

Available inside sub applications you have 

```javascript
app.locals.app
```

which will contain all parameters exported from a route index.js file.

They are available with 

```javascript
app.<property>
app.name
app.title
app.description
app.teaserImage
```

Along with anything else you exported from your sub apps index.js file.

```javascript 
module.exports = function(router){
  
  router.get('/', function(req, res){
    res.render('index', {
      description: 'This value was set on the server on '+ new Date()
    });
  });

  return {
    //Required
    name: 'Some other cool project',
    title: 'Cool project',
    description: "Here is another cool project I made.",
    basePath: '/cool',
    //Optional
    teaserImage: 'golf.jpg',
    
    //Really really optional
    neededOnPage: [1,2,3],
    otherImportantVar: 10
  }
};
```

in the example above in the template for "Some other cool project" in addition to the name, title, description... variables you would also have access to 
`app.neededOnPage` and `app.otherImportantVar` but only withing that applications pages.