import { QWIK_LOADER } from '@builder.io/qwik/loader/index';
import { render } from '@builder.io/qwik';

eval(QWIK_LOADER);

export const decorators = [
  (Story) => {
    const parent = document.createElement('div');
    const jsxNode = Story();
    render(parent, jsxNode);
    return parent;
  },
];