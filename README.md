# micro-frontend-angular
POC application to demonstrate the dynamic loading of angular based MFEs in a shell angular app.

# Referred article
https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-part-2-module-federation-with-angular/

# Description
The app contains 3 MFE or Micro-frontends which are referred from the parent/host/shell app using Module federation via webpack

# Shared Library
There is also a angular library which is shared in all 3 MFE

# How to use
First, build the library using ng build lib-shared-ui.

Second, once the library is build you can run npm run run:all. This will build and run all the apps and will also launch them in the browser.

To understand more, refer the webpack.config.js file in shell and MFE apps.
