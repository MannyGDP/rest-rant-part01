const React = require('react');

function Def(html) {
    return (
<html>
    <head>
        <title>Rest Rant</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
    </head>
    <body>
        { html.children }
    </body>
  </html>
 )
};

module.exports = Def;