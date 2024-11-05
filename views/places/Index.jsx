const React = require('react');
const Def = require('../Default');

function Index({ places }) {
    return (
  <Def>
    <main>
        <h1>PLACES</h1>
        <div className='row'>
        { places.map(place => (
          <div className='col-sm-6'>
                <a href="/">
                <button className='btn-primary'>Back to Home</button>
                </a>
                <h2>{ place.name }</h2>
                <img src={ place.pic } alt={ place.name } />
                <p className='text-center'>{ place.cuisines }</p>
                <p className='text-center'>
                  Located in { place.city }, { places.state }
                </p>
            </div>
        ))}
        </div>
    </main>
  </Def>
    )
}

module.exports = Index;
