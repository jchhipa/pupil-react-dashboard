import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Root from './Root';

const mountNode = document.getElementById('root');

const mainInitializer = {};

const renderAppWithState = () => {
    render(
        <Root />,
        mountNode
    );
};

mainInitializer.init = () => {
    unmountComponentAtNode(mountNode);
    renderAppWithState();
};

window.main = mainInitializer;
window.main.init();
//registerServiceWorker();