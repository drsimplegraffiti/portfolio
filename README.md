

https://user-images.githubusercontent.com/70065792/128037852-ae6b779c-0431-4f7e-ab50-424fc5bd5ad0.mp4

# Portfoliio

## Tools Used: ReactJS, NPM, CSS


<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="100" src="READMEimage/squirrelAppIcon.png" alt="Kerthin logo"></a></p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Status"></a>
  <a href="#"><img src="https://img.shields.io/badge/npm-v6.14.4-blue.svg" alt="Version"></a>
  <a href="#"><img src="https://img.shields.io/badge/node-v10.16.0-blue.svg" alt="Version"></a> <br>
  <a href="#"><img src="https://img.shields.io/badge/repo%20size-742.5%20MB-green.svg" alt="Size"></a>
  <a href="#"><img src="https://img.shields.io/badge/project%20version-v0.8-blue.svg" alt="Version"></a>
</p>

<h2 align="center">Description</h2>

The template is a site for viewing the works of great artists represented in the famous Prado Museum. You can also find out information about the painting and the artist himself.
- To launch the app:
  - download the repository;
  - log in to the downloaded repository using the command line or terminal;
  - enter the command line 'npm run start' or 'serve-s build' and go to the address specified in the terminal.

* Note that the project was made using the CREATE REACT APP.

- [Demo](https://kerthin.github.io/pradoMuseum-templateSait/)

#### Use technology.

The following technologies were used to create this project:

<h3 align="center">Software platform</h3>
<!--Software platform start-->

<p align="center">
  <a href="#">
    <img width="260px" src="READMEimage/technology/nodejs-1.svg">
  </a>
</p>

<h3 align="center">Libraries</h3>

<!--Libraries-->
<p align="center">
  <a href="#">
    <img width="260px" src="READMEimage/technology/react.svg">
  </a>
</p>

<h3 align="center">Package manager</h4>

<!--Package manager-->
<p align="center">
  <a href="#">
    <img width="144px" src="READMEimage/technology/npm.svg">
  </a>
</p>

---

## Documentation

#### The repository of this project is divided into several sections:

- `src` - this repository is intended for files with the help of which the project is being developed. It is from this repository that all project files are compiled;
- `docs` - a repository that stores all compiled code with all media files;

#### The following describes in more detail the repository `src`:

- `src` - this repository is divided into several folders and files:

  - `fonts` - folder is used to store fonts;
  - `image` - all images for the site are stored in the folder.

- `public` - media files distributed by subgroups are stored inside this repository.


#### This section describes how to work with `Create React App` used in the project:

- `npm run start` - this command starts the project from the local 'src' repository where you work on the entire product;
- `serve -s build` - this command starts the project from the local 'build' repository where the finished and assembled project is located for release in production.

## Appearance

The image of the website:

- Gif

#### Gif

  - Image Choise <br>
  <a href="#"><img src="READMEimage/gif/imageChoose.gif" /></a>

  - Synopsis <br>
  <a href="#"><img src="READMEimage/gif/synopsis.gif" /></a>

  - Horizontal Scroll <br>
  <a href="#"><img src="READMEimage/gif/imageChoose.gif" /></a>
  
  
  
  
  
  
  
  
  
  
  
  
  
  # [enquire.js](http://wickynilliams.github.com/enquire.js/) - Awesome Media Queries in JavaScript

[![Build Status](https://travis-ci.org/WickyNilliams/enquire.js.svg)](https://travis-ci.org/WickyNilliams/enquire.js)

`enquire.js` is a lightweight, pure javascript library (with **no dependencies**) for programmatically responding to media queries.

## Getting enquire.js

### Download

Get the latest build, ready to go:

 * [Development](https://github.com/WickyNilliams/enquire.js/raw/master/dist/enquire.js) - unminified

 * [Production](https://github.com/WickyNilliams/enquire.js/raw/master/dist/enquire.min.js) - minified

### Install via Bower

To install via bower, enter the following at the command line:

    bower install enquire

### Install via npm

To install via npm, enter the following at the command line:

    npm install enquire.js

### Build From Source

If you want build from source (and run all unit tests etc):

    git clone git://github.com/WickyNilliams/enquire.js.git

    cd enquire.js

    npm install

    grunt

Booya!

## Quick Start

The main method you will be dealing with is `register`. It's basic signature is as follows:

```javascript

enquire.register(query /* string */, handler /* object || array  || function */);

```

`query` is the CSS media query you wish to respond to, and `handler` is an object containing any logic to handle the query. An example of usage is as follows:

```javascript

enquire.register("screen and (max-width:1000px)", {

    match : function() {},      // OPTIONAL

                                // If supplied, triggered when the media query transitions

                                // *from an unmatched to a matched state*

    unmatch : function() {},    // OPTIONAL

                                // If supplied, triggered when the media query transitions

                                // *from a matched state to an unmatched state*.

                                // Also may be called when handler is unregistered (if destroy is not available)

    setup : function() {},      // OPTIONAL

                                // If supplied, triggered once immediately upon registration of the handler

    destroy : function() {},    // OPTIONAL

                                // If supplied, triggered when handler is unregistered. Place cleanup code here

    deferSetup : true           // OPTIONAL, defaults to false

                                // If set to true, defers execution the setup function

                                // until the media query is first matched. still triggered just once

});

```

This should be enough to get you going, but **please read the full [enquire.js documentation](http://wickynilliams.github.com/enquire.js/)** if you wish to learn about the other cool features.

## Contributing

* Got an awesome idea?

* Found a *not-so*-awesome bug?

* Wish to get my attention through an inappropriate communication channel?!

Then please don't hesitate to raise an issue, they will *all* be looked at and tended to.

And for all the cool cats who are prepared to give their time to contribute code, feel free to open a pull request. If you could write unit tests to accompany your pull request that would be pretty sweet, but no worries if not - if it's good enough to be merged in, it's good enough for me to spend a little time to write tests on your behalf :-)

## License

License: MIT (http://www.opensource.org/licenses/mit-license.php)

  - Vertical Scroll <br>
  <a href="#"><img src="READMEimage/gif/verticalScroll.gif" /></a>
