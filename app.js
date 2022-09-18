var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');

var app = express();

const Booru = require('booru')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.get('/yuri', (req, res) => {
  let posts = await Booru.search('dan', ['yuri'], { limit: 350, random: false })
  d = posts
  resu = []
  d.forEach(ggwp =>{
  ld = { url: `${ggwp.file_url}` }
  resu.push(ld)
  })
  random =  resu[Math.floor(Math.random() * resu.length)]
  res.json({url: "https://external-content.duckduckgo.com/iu/?u=" + random.url})
})




module.exports = app;
