const React = require('react');
const Def = require('./Default');

function Home() {
    return (
        <Def>
            <main>

                <h1>Home Default Page</h1>
                <a href="/places">
                <button className='btn-primary'>Places Page MD</button>
                </a>
            </main>
        </Def>
    )
};

    module.exports = Home;