module.exports = function(app) {
  var express = require('express');
  var meRouter = express.Router();

  meRouter.get('/', function(req, res) {
    res.send({
      'me': [
        {
          id: 1,
          imgUrl: 'abc.jpg',
          firstName: 'Steven',
          lastName: 'Buck'
        }
      ]
    });
  });

  meRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  meRouter.get('/:id', function(req, res) {
    res.send({
      'me': {
        id: req.params.id,
        imgUrl: 'abc.jpg',
        firstName: 'Steven',
        lastName: 'Buck'
      }
    });
  });

  meRouter.put('/:id', function(req, res) {
    res.send({
      'me': {
        id: req.params.id
      }
    });
  });

  meRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/me', meRouter);
};
