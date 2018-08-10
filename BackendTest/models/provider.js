var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Provider = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    firstName: { type: String, lowercase: true, trim: true, required: true },
    lastName: { type: String, lowercase: true, trim: true, required: true },
    document: { type: String, trim: true, required: true },
    email: { type: String, lowercase: true, trim: true, required: true },
    address: { type: String, lowercase: true, trim: true },
    city: { type: String, lowercase: true, trim: true },
    specialty: { type: Schema.Types.ObjectId, ref: 'specialty' },
    status: { type: Number }
}, {
        collection: 'providers',
        timestamps: true
    });


module.exports = mongoose.model('provider', Provider);