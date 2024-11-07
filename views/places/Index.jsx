const React = require('react');
const Def = require('../Default');

function Index({ places }) {
    return (
  <Def>
    <main>
        <h1>PLACES</h1>
        <div className='row'>
        { places.map((place, index) => (
          <div className='col-sm-6'>
                <h2>
                  <a href={ '/places/${index}'}>
                    { place.name }
                  </a>
                 </h2>
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
