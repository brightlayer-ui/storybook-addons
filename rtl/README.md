![npm](https://img.shields.io/npm/v/@pxblue/storybook-rtl-addon?label=%40pxblue%2Fstorybook-rtl-addon)


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
addons: ['@pxblue/storybook-rtl-addon/register']
```            

## Usage

This package exports two functions `getDirection` & `useDirection` that returns the current `Direction` ('rtl' or 'ltr').

### getDirection
`getDirection` is used within Stories to access the current `Direction`.

For detailed usage for the `getDirection` function, see the Examples section further below.

> **Angular Components**: If your component uses the Direction service, use the exported function `getDirection()` to supply the `[dir]` directive with the appropriate direction.

### useDirection
`useDirection` is a React hook that emits any `Direction` change and can be used inside of Storybook Decorators.


```ts
import useDirection from "@pxblue/storybook-rtl-addon/useDirection";

export const decorators = [
    (Story) => {
        const direction = useDirection();
        return (
            <>
                {direction}
                <Story />
            </>
        );
    },
];
```

## Examples

PX Blue uses this addon extensively in our storybook documentation to guarantee bidirectional support of our components and examples.

To see live-example usage of this addon, click on the "Story" tab of each linked example.

### Angular

```ts
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const angularExampleStory = () => ({
    template: `
        <div>{{direction}}</div>
    `,
    props: {
        direction: getDirection
    }
});

```

[Live Example](https://pxblue-components.github.io/angular/?path=/story/components-score-card--with-full-config)


### React

```ts
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const reactExampleStory = () => {
    const direction = getDirection();
    return <div>{direction}</div>;
}

```
[Live Example](https://pxblue-components.github.io/react/?path=/story/components-user-menu--within-toolbar)



## Tested Frameworks
- Angular (^8.0.0)
- React

## Local Testing

This addon can be tested locally by using `npm link` or `yarn link` commands.

From the addon's root folder, run the following to rebuild the addon when changes occur:

```yarn watch```

From another terminal, run:

```yarn link```

From your storybook app's root folder, run:

```yarn link @pxblue/storybook-rtl-addon```

When finished testing the local version of this addon, run:

```yarn unlink @pxblue/storybook-rtl-addon```



