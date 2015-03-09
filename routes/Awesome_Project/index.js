module.exports = function(router){

  router.get('/', function(req, res){
    res.render('index', {
      description: 'This value was set on the server on '+ new Date()
    });
  });

  return {
    //Required
    name: 'My cool demo project',
    title: 'A second cool project',
    description: "Here is a cool project I made.",
    basePath: '/awesome',
    //Optional
    teaserImage: 'awesome.jpg'
  }
};