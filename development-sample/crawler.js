var Datastore = require('nedb')
var Crawler = require("crawler")
var url = require('url')


var db = new Datastore({
  filename: './sample-nedb-db',
  autoload: true
})

var c = new Crawler();

db.findOne({ _id: 'tt1345836' }, (err, movie) => {
    // console.log(movie._crawled)

    c.queue({
        // uri: 'http://www.imdb.com/title/tt1345836/',
        html: movie._crawled,

        // The global callback won't be called
        callback: function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res.$;
                const title = $('h1[itemprop="name"]')
                    .clone()
                    .find('#titleYear')
                        .remove()
                        .end()
                    .text()
                
                const year = $('#titleYear').text().slice(1, -1)

                const duration = $('[itemprop="duration"]').attr('datetime')

                const genres = []
                $('.subtext [itemprop="genre"]').each((index, item) => {
                    genres.push($(item).text())
                })

                const date = $('meta[itemprop="datePublished"]').attr('content')

                const poster = $('.poster img').attr('src')

                console.log(title)
                console.log(year)
                console.log(duration)
                console.log(genres)
                console.log(date)
                console.log(poster)

            }
            done();
        }
    });
})