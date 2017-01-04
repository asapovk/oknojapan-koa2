Course = require('../modules/03-lessons/models/course');
var mongoose = require('mongoose');

(async function () {
mongoose.connect('localhost:27017/oknojapan');

var beginner = new Course({
  title: 'For beginers',
  description: 'This is the courseware is perfomanced for thouse who just started learning japanese. This is also ok for students without any knoledge of japanese.',
  type: 'general',
  price: 20,
  accessGroup: 'beginners',
  imagePath: 'media/thumbnails/courses/beginners.png',
  lessons: 'lessons'
});

var intermediate = new Course({
  title: 'Intermediate',
  description: 'This is the courseware is perfomanced for thouse who passed the beginer courseware.',
  type: 'general',
  price: 30,
  accessGroup: 'intermediate',
  imagePath: 'media/thumbnails/courses/intermediate.png',
  lessons: 'lessons'
});

var advanced = new Course({
  title: 'Advanced',
  description: 'This is the courseware is perfomanced for thouse who passed intermediate courseware.',
  type: 'general',
  price: 30,
  accessGroup: 'advanced',
  imagePath: 'media/thumbnails/courses/advanced.png',
  lessons: 'lessons'
});

var kanji = new Course ({
  title: 'kanji',
  description: 'You will learn 300 most common japanese kanji. This courseware is designed for self study in your pace with our vedeo lessons and exercises.',
  type: 'additional',
  price: 7,
  accessGroup: 'kanji',
  imagePath: 'media/thumbnails/courses/kanji.png',
  lessons: 'lessons'
});

await beginner.save();
await intermediate.save();
await advanced.save();
await kanji.save();

mongoose.disconnect();
}) ()
