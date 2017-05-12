import * as React from 'react';
import './App.scss';
import Omnisearch from './omnisearch/Omnisearch';

// export interface AppProps {
// }

export default class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <section>
                <h1>Triage</h1>
                <Omnisearch/>
            </section>
        );
    }
}