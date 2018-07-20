# Angular-Universal-IIS
https://blog.angularindepth.com/deploy-an-angular-application-to-iis-60a0897742e7 More details 

How to setup and deploy Angular-Universal to IIS

1. Understand Angular-Universal  this link https://angular.io/guide/universal
2. Download https://angular.io/generated/zips/universal/universal.zip
3. Install node 
4. npm install
5. npm run build:ssr
6. npm run serve:ssr  //localhost:4000
7. edit file server.ts 

//const PORT = process.env.PORT || 4000;

//const DIST_FOLDER = join(process.cwd(), 'dist');

const PORT = process.env.PORT || 80;

const DIST_FOLDER = join(process.cwd());

8. npm run build:ssr
9. copy file in folder dist

-----production server-----

How to install IISNode on Windows https://www.youtube.com/watch?v=JUYCDnqR8p0 follow this video

10. Install IIS
11. Install URL Rewrite Module
12. Install iisnode
13. paste file to root folder on IIS
14. npm install express
15. create web.config example web.config in my code

----real word applicetion maybe sub directory----

1. copy file in folder sub directory
2. edit web.cofig example web.config_sub directory in my code
3. copy file form folder browser except index.html and assets folder 
4. paste same place server.js


----real word applicetion maybe use https----
1. edit web.config example web.config_https in my code


