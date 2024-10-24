const React = require('react');
const Def = require('./Default');

function Home() {
    return (
        <Def>
             <main style={{ backgroundColor: 'lightblue', height: '50vh' }}>
                <h1>Home Default Page</h1>
                <a href="/places">
                <button className='btn-primary'>Places Page MD</button>
                </a>
            </main>
        </Def>
    )
};

    module.exports = Home;