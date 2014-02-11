# My personal site

A simple [Harp] site running on [Heroku].

## Running locally

The easiest way to install Node.js is via the [official installer][Node.js]. A
few clicks and you're done.

Once you have Node.js installed make sure to download the source of this site
to your development machine:

Once you have Node.js on your local development environment make sure to set up Harp, download the latest version of this site, and start the Harp server:

```
$ npm install -g harp
$ git clone git@github.com:max/max.git
$ cd max
$ harp server ./
```

## Deploying to Heroku

To deploy this app to Heroku you need to first install the latest version of
the Heroku [Toolbelt] and then run:

```
$ heroku create
$ heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git
$ git push heroku master
$ heroku open
```

[Harp]: http://harpjs.com/
[Heroku]: https://www.heroku.com/
[toolbelt]: https://toolbelt.heroku.com/
[Homebrew]: http://mxcl.github.io/homebrew/
