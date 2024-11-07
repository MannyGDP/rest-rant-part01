const React = require('react');
const Def = require('./Default');

function Show({ place }) {
    return (
        <Def>
            <main>
                <h1>{ place.name }</h1>
            </main>
        </Def>
    )
}

module.exports = Show;
