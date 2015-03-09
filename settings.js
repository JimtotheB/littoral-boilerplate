module.exports = {
  /*
   * Production enviornment is used in the paperelectron/littoral-docker image.
   *
   */
  production: {
    theme: 'MyTheme',
    /*
     * Global variables available to every page in your application.
     */
    globals: {
      name: 'My Demo site',
      description: 'Where I host my cool demos.'
    },
    /*
     * You can add anything you like to "mainApp" and "subApp"
     */
    locals: {
      /*
       * These variables will be added to every page inside the "request" variable
       * available to your templates. These are useful for setting things like CSS classes
       * that may be different between the main page and a demos page.
       */
      mainApp: {
      },
      subApp: {
      }
    },
    server: {
      //Warning this MUST be 8080 if you are running the
      // paperelectron/littoral-docker image.
      port: 8080
    }
  },
  development: {
    theme: 'MyTheme',
    globals: {
      name: 'My Demo Site',
      description: 'Where I host my cool demos.'
    },
    locals: {
      mainApp: {
      },
      subApp: {
      }
    },
    server: {
      port: 8080
    }
  },
  test: {
    theme: 'NyTheme',
    globals: {
      name: 'My Demo Site',
      description: 'Where I host my cool demos.'
    },
    locals: {
      mainApp: {
      },
      subApp: {
      }
    },
    server: {
      port: 8080
    }
  }
};
