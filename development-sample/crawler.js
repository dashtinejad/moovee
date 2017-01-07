var Crawler = require("crawler")
var url = require('url')

// console.log(Crawler)
// console.log(url)

var c = new Crawler();

c.queue({
    uri: 'http://www.imdb.com/title/tt1345836/',

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            console.log($("title").text());
        }
        done();
    }
});