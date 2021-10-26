![npm](https://img.shields.io/npm/v/@brightlayer-ui/storybook-rtl-addon?label=%40brightlayer-ui%2Fstorybook-rtl-addon)


# @brightlayer-ui/storybook-rtl-addon

This storybook addon provides a Right-to-Left toggle used to test your component's bidirectionality support.  
When this addon is active, it sets the current story body's `dir` attribute to `rtl`.

This addon assumes the default text orientation of the parent storybook app is Left-to-Right.


## Installation

To install the `@brightlayer-ui/storybook-rtl-addon` run:

```
yarn add @brightlayer-ui/storybook-rtl-addon
```

In your `main.js` file, register this addon:

```
addons: ['@brightlayer-ui/storybook-rtl-addon/register']
```            

## Usage

This package exports two functions `getDirection` & `useDirection` that returns the current `Direction` ('rtl' or 'ltr').

### getDirection
`getDirection` is used within Stories to access the current `Direction`.  In React, this is value is only set during the initial component mount. 


Brightlayer UI uses this addon extensively in our storybook documentation to guarantee bidirectional support of our components and examples.

To see live-example usage of this addon, click on the "Story" tab of each linked example.

### Angular Usage

```ts
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const angularExampleStory = () => ({
    template: `
        <div>{{direction}}</div>
    `,
    props: {
        direction: getDirection
    }
});

```

> **Angular Components**: If your component uses the Direction service, use the exported function `getDirection()` to supply the `[dir]` directive with the appropriate direction.

[Live Example](https://brightlayer-ui-components.github.io/angular/?path=/story/components-score-card--with-full-config)


### React Usage

```ts
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const reactExampleStory = () => {
    const direction = getDirection();
    return <div>{direction}</div>;
}

```
[Live Example](https://brightlayer-ui-components.github.io/react/?path=/story/components-user-menu--within-toolbar)



### useDirection
`useDirection` is a React hook that returns the current `Direction` and re-emits on every `Direction` change (when toggling the RTL sidebar button). It can be used to set values for Providers in a Decorators or Stories.


```ts
import useDirection from "@brightlayer-ui/storybook-rtl-addon/useDirection";

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

## Tested Frameworks
- Angular (^8.0.0)
- React (^17.0.0)

## Local Testing

This addon can be tested locally by using `npm link` or `yarn link` commands.

From the addon's root folder, run the following to rebuild the addon when changes occur:

```yarn watch```

From another terminal, run:

```yarn link```

From your storybook app's root folder, run:

```yarn link @brightlayer-ui/storybook-rtl-addon```

When finished testing the local version of this addon, run:

```yarn unlink @brightlayer-ui/storybook-rtl-addon```



