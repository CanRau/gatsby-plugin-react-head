# @canrau/gatsby-plugin-react-head

## WARNING: The `whitelist` option introduced in `react-head@next` is not working properly at least not using the below mentioned whitelist.
### Please check my [PR#84](https://github.com/tizmagik/react-head/pull/84#issuecomment-537728374) over at react-head if you're interested in the details.

This plugin sets up [react-head](https://github.com/tizmagik/react-head) with server-rendering for you.

[More about thread-safe meta tag management with react-head](https://jeremygayed.com/making-head-tag-management-thread-safe-with-react-head-323654170b45)

## Install

```
npm install --save react-head@next @canrau/gatsby-plugin-react-head
```

### Note

`@canrau/gatsby-plugin-react-head` **depends** on react-head!  
To use the **new whitelist** feature you have to specifically install **react-head@next** as shown above, the whitelist option hasn't been merged into the main release so far as it's still a proof of concept.

The un-namespaced version [gatsby-plugin-react-head](https://github.com/bejamas/gatsby-plugin-react-head) **doesn't** support the **whitelist** option.

## Configuration

Add the plugin to your `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    {
      resolve: `@canrau/gatsby-plugin-react-head`,
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
import { Title, Link, Meta } from 'react-head';

const App = () => (
  <>
    <Title>GaiAma.org</Title>
    <Link rel="canonical" content="http://www.gaiama.org/" />
    <Meta name="description" content="Protecting Amazonian rainforest in Peru" />
    // ...
  </>
);
```

## License

[MIT](LICENSE) © [Can Rau](https://www.canrau.com)
