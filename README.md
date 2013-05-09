Code sample from my talk at Ottawa JS on Grunt - May 8, 2013.

Slides available on [SlideShare](http://www.slideshare.net/FabienDoiron/grunt-js).

## Dependencies
* [nvm](https://github.com/creationix/nvm)
* [node and npm](http://nodejs.org/)
* [rvm](https://rvm.io/)
* ruby ~1.9
* [compass](http://compass-style.org/) (which install SASS)
* [bower](http://bower.io/)
* [Grunt CLI](http://gruntjs.com/getting-started)

## Installing Dependencies
All these installation take place in the terminal.

### 1. nvm
Install or update [nvm](https://github.com/creationix/nvm). This allows the machine to run multiple versions of node.

1. `curl https://raw.github.com/creationix/nvm/master/install.sh | sh`

### 2. Node
Install node using nvm.

1. `nvm install 0.10`. This will install the latest version `0.10.*`

### 3. rvm
Install or update [rvm](https://rvm.io/). This allows the machine to run multiple versions of ruby.

1. If not or to update: `\curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled`. This may take a little while
2. If updated `rvm reload` to use latest version

### 4. Ruby
Install ruby using rvm.

1. `rvm install 1.9`. This will install the latest version `1.9.*`

### 5. Compass & Sass
Install compass (this will install Sass) using ruby.

1. `gem update --system` # may require sudo
2. `gem install compass`

### 6. Bower
Install bower, front end dependency management.

1. `npm install -g bower` # -g installs bower globally

### 7. Grunt CLI
Install the grunt cli to allow the grunt task runner to run. Grunt is not needed ONLY the cli tools. Grunt will part of the project dependencies to allow multiple versions of grunt to be installed.

1. `npm uninstall -g grunt` # uninstall any previous global installation of grunt
2. `npm install -g grunt-cli`

## Install Project
* Clone repo
* From root directory of the project run `npm install` to install dependencies
* Run grunt tasks: `grunt build:dev`, `grunt build:prod` and `grunt test`.