const React = require('react');
const Def = require('./Default');

function Error404() {
    return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Opps, Sorry we can't find this page</p>
            <img src="data:image/jpeg;base64,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" alt="DreAm Car"/>
        </main>
    </Def>
  )
};

module.exports = Error404;