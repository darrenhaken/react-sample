import * as React from 'react';
import './index.scss';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';
import {render} from 'react-dom';

const rootElement = document.getElementById('root');

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    rootElement
);

// // Hot Module Replacement API
// declare let module: {hot: any};
//
// if (module.hot) {
//     module.hot.accept('./components/App', () => {
//         const NewApp = require('./components/App').default;
//
//         render(
//             <AppContainer>
//                 <NewApp/>
//             </AppContainer>,
//             rootElement
//         );
//     });
// }