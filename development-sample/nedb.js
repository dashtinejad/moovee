var Datastore = require('nedb')

var Crawler = require("crawler")
var url = require('url')

// console.log(Crawler)
// console.log(url)

var db = new Datastore({
  filename: './sample-nedb-db',
  autoload: true
})

var c = new Crawler();

c.queue({
    uri: 'http://www.imdb.com/title/tt1345836/',

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            
            const movie = {
              _id: 'tt1345836',
              _crawled: res.body,
              // title: 'Dark Knight Rises',
              // year: 2012,
            }

            // remove the old document
            db.remove(
              { _id: 'tt1345836' },
              { multi: true },
              (err, numRemoved) => {

              }
            )

            db.insert(movie, (err, newDoc) => {
              console.log(newDoc._id)
            })


            /*
            db.find({}, (err, docs) => {
              console.log(docs)
            })
            */
        }
        done();
    }
});
