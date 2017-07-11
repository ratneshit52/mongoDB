var MongoClient = require('mongodb').MongoClient;
//Open the connect of the server
MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
    if (err) throw err;
    //Find one documentin our collection
    db.collection('coll').findOne({}, function (err, doc) {
        if (err) throw err;
        // Print the result
        console.dir(doc);
        //Close the DB
        db.close();
    });
    //Declare success
    console.dir("Called findOne!");
});
