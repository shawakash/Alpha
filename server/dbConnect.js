const mongoose = require('mongoose');

module.exports = async () => {
    const mongooseUri = process.env.MONGOOSEURI;
    const connect = await mongoose.connect(mongooseUri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    )
        .then((e) => console.log('Database Connected.'))
        .catch(console.error)
}