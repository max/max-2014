# My personal site

A simple [Node.js] wrapper to run static sties on [Heroku].

## Running locally

The easiest way to install Node.js is via the [official installer][Node.js]. A
few clicks and you're done.

Once you have Node.js installed make sure to download the source of this site
to your development machine:

```
$ git clone git@github.com:max/max.git
```

Then install the dependencies required to run the application:

```
$ cd max
$ npm install
```

To run this app [install the latest version of the Heroku toolbelt][toolbelt]
and from within the directoy run:

```
$ foreman start
$ open http://localhost:5000/
```

## Rolling your own markup and styles

Generally you should be able to ignore the `Procfile` as well as the
`package.json` and `server.js` files.

Everything you put into the `public` directory will be served so editing the
`index.html` file and the included stylesheet should be all you need.

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
```

[Node.js]: http://nodejs.org/
[Heroku]: https://www.heroku.com/
[toolbelt]: https://toolbelt.heroku.com/
[Homebrew]: http://mxcl.github.io/homebrew/
