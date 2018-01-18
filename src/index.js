
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import configureStore from './store/configureStore';

const mountNode = document.getElementById('root');

const mainInitializer = {};

const renderAppWithState = () => {
    const store = configureStore();

    render(
        <Root store={store} />,
        mountNode
    );
};

mainInitializer.init = () => {
    unmountComponentAtNode(mountNode);
    renderAppWithState();
};

window.main = mainInitializer;
window.main.init();
registerServiceWorker();