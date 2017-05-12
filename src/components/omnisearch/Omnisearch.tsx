import * as React from 'react';

export default class Omnisearch extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="omnisearch">
                <label htmlFor="mt__omnisearch__input">Search here</label>
                <input id="mt__omnisearch__input" type="text" placeholder="enter search"/>
                <button>Search</button>
            </div>
        );
    }
}