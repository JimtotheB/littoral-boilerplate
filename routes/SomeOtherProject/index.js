module.exports = function(router){

  router.get('/', function(req, res){
    res.render('index', {
      request: {description: 'This value was set on the server on ', time: new Date()}
    });
  });

  return {
    //Required
    name: 'Some other cool project',
    title: 'Cool project',
    description: "Here is another cool project I made.",
    basePath: '/cool',
    //Optional
    teaserImage: 'golf.jpg'
  }
};