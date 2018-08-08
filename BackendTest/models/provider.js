var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Provider = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    firstName: { type: String, lowercase: true, trim: true, required: true },
    lastName: { type: String, lowercase: true, trim: true, required: true },
    document: { type: String, trim: true, required: true },
    email: { type: String, lowercase: true, trim: true, required: true },
    address: { type: String, lowercase: true, trim: true, required: true },
    city: { type: String, lowercase: true, trim: true, required: true },
    specialty: { type: Schema.Types.ObjectId, ref: 'specialty', required: true },
    status: { type: Number, required: true }
}, {
        collection: 'providers',
        timestamps: true
    });


module.exports = mongoose.model('provider', Provider);