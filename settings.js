module.exports = {
  /*
   * Production env is used in the paperelectron/littoral-docker image.
   * And is the default when starting the app with NODE_ENV unset
   */
  production: {
    theme: 'MyTheme',
    /*
     * Global variables available to every page in your application.
     */
    globals: {
      name: 'My Awesome Demo Site.',
      title: 'Cool Examples',
      description: 'This is where I host my super cool modular examples.'
    },
    server: {
      //Warning this MUST be 8080 if you are running the
      // paperelectron/littoral-docker image.
      port: 8080
    }
  },
  /*
   * development env is used when running via "npm start"
   */
  development: {
    theme: 'MyTheme',
    globals: {
      name: 'My Awesome Demo Site.',
      title: 'Cool Examples',
      description: 'This is where I host my super cool modular examples.'
    },
    server: {
      port: 8080
    }
  },
  /*
   * test env is used when running via npm test
   */
  test: {
    theme: 'MyTheme',
    globals: {
      name: 'My Awesome Demo Site.',
      title: 'Cool Examples',
      description: 'This is where I host my super cool modular examples.'
    },
    server: {
      port: 8080
    }
  }
};
