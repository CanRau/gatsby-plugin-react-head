# gatsby-plugin-react-head

This plugin sets up [react-head](https://github.com/tizmagik/react-head) with server-rendering for you.

[More about thread-safe meta tag management with react-head](https://jeremygayed.com/making-head-tag-management-thread-safe-with-react-head-323654170b45)

## Install

```
npm install --save react-head@next gatsby-plugin-react-head
```

### Note

`gatsby-plugin-react-head` **depends** on react-head!  
To use the **new whitelist** feature you have to specifically install **react-head@next** as shown above, the whitelist option hasn't been merged into the main release so far as it's still a proof of concept.

## Configuration

Add the plugin to your `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-head`,
      // optional options
      options: {
        // an array of whitelisted tags to disable `[data-rh]` attribute for them
        whitelist: [
          `title`,
          `[name="description"]`,
          `[property^="og:"]`,
          `[property^="fb:"]`,
        ],
      },
    },
  ],
}
```

## Usage

```
import * as React from 'react';
import { HeadProvider, Title, Link, Meta } from 'react-head';

const App = () => (
  <HeadProvider>
    <div className="Home">
      <Title>GaiAma.org</Title>
      <Link rel="canonical" content="http://www.gaiama.org/" />
      <Meta name="description" content="Making rainforests cool againa" />
      // ...
    </div>
  </HeadProvider>
);
```

## License

[MIT](LICENSE) © [Can Rau](https://www.canrau.com)
