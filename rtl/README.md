# @pxblue/storybook-rtl-addon

This storybook addon provides a Right-to-Left toggle used to test your component's bidirectionality support.  
When this addon is active, it sets the current story body's `dir` attribute to `rtl`.

This addon assumes the default text orientation of the parent storybook app is Left-to-Right.


## Installation

To install the `@pxblue/storybook-rtl-addon` run:

```
yarn add @pxblue/storybook-rtl-addon
```

In your `main.js` file, register this addon:

```
addons: [
    '@pxblue/storybook-rtl-addon/register',
]
```            

> **Angular Projects**: No further setup is required.

## Tested Frameworks
- Angular (^8.0.0)
- React


## Local Testing

This addon can be tested locally by using `npm link` or `yarn link` commands.

From the addon's root folder, run to following to automatically rebuild the addon when changes occur:

```yarn watch```

From another terminal, run:

```yarn link```

From your storybook app's root folder, run:

```yarn link @pxblue/storybook-rtl-addon```

When finished testing the local version of this addon, run: 

```yarn unlink @pxblue/storybook-rtl-addon```



