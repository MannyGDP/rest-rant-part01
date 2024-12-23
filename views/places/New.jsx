const React = require('react');
const Def = require('../Default');

function New() {
    return (
        <Def>
        <main>
            <h1>Add a New place MD New</h1>
            <form method='POST' action='/places'>
                <div className='form-group'>
                    <label htmlFor='name'>Place Name</label>
                    <input className='form-control' id='name' name='name' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Place Picture</label>
                    <input className='form-control' type='url' id='pic' name='pic' />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>City</label>
                    <input className='form-control' id='city' name='city' />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>State</label>
                    <input className='form-control' id='state' name='state' />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Cuisines</label>
                    <input className='form-control' id='cuisines' name='cuisines' required />
                </div>
                <input className='btn btn-primary' type='submit' value='Add Place' />
            </form>
        </main>
        </Def>
 )
};

module.exports = New;
