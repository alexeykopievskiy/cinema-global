var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', './src/views/v-fall');
app.set('view engine', 'pug');
app.set('view cache', false);

app.use(bodyParser.json({ limit: '5mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", express.static(__dirname + '/src'));

app.use(function (req, res, next) {
  if (req.path.startsWith('/v-fall')) app.set('views', './src/views/v-fall');
  else if (req.path.startsWith('/ladines')) app.set('views', './src/views/ladines');
  else if (req.path.startsWith('/showlaxy')) app.set('views', './src/views/showlaxy');
  else res.send('lolz')
  next()
})

var data = [{"id": 9782, "title": "фаворитка", "year": null, "category": [], "country": null, "image": "//photo.tvigle.ru/res/2019/05/30/a211aa15-42fe-4419-8f79-1ef7514cc7aa.jpg", "url": "/video/9782"}, {"id": 9783, "title": "фаворитка 2", "year": null, "category": [], "country": null, "image": "//photo.tvigle.ru/res/2019/05/29/d8ec4e46-b5f3-4ed7-a1ac-e76d4e7f5a76.jpg", "url": "/video/9783"}]

app.get('/v-fall', function (req, res, next) {
    res.render('index');
    next()
});

app.get('/v-fall/error', function (req, res, next) {
  res.render('error');
  next()
});

app.get('/v-fall/news', function (req, res) {
  res.render('news');
});

app.get('/v-fall/list', function (req, res) {
  res.render('list');
});

app.get('/v-fall/inner', function (req, res) {
  res.render('inner');
});

app.get('/v-fall/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/v-fall/article', function (req, res) {
  res.render('article');
});

app.get('/ladines', function (req, res) {
  res.render('index');
});

app.get('/ladines/error', function (req, res, next) {
  res.render('error');
  next()
});

app.get('/ladines/news', function (req, res) {
  res.render('news');
});

app.get('/ladines/list', function (req, res) {
  res.render('list');
});

app.get('/ladines/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/ladines/article', function (req, res) {
  res.render('article');
});

app.get('/showlaxy', function (req, res) {
  res.render('index');
});

app.get('/showlaxy/error', function (req, res, next) {
  res.render('error');
  next()
});

app.get('/showlaxy/news', function (req, res) {
  res.render('news');
});

app.get('/fetchNews', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Accept', 'application/json');
    res.json(JSON.stringify(data));
});

app.get('/showlaxy/list', function (req, res) {
  res.render('list');
});

app.get('/showlaxy/inner', function (req, res) {
  res.render('inner');
});

app.get('/showlaxy/contacts', function (req, res) {
  res.render('contacts');
});

app.get('/showlaxy/article', function (req, res) {
  res.render('article');
});

app.listen(3000, function () {
    console.log('Rendering pug app listening on port 3000');
});

