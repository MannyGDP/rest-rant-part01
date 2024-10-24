const places = require('express').Router();

places.get('/', (req, res) => {
    const places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'data:image/jpeg;base64,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'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjEoZ_6UvGTluJvJ_LEHOW8JduVV44mziP2ng0HvL9lvd5HwxinvjeGk8wA5pISihT5M&usqp=CAU'
      }]
    res.render('places/Index', { places });
});

places.get('/new', (req, res) => {
  res.render('places/New');
});

places.post('/', (req, res) => {
  console.log(req.body);
  res.send(200);
});

module.exports = places;
