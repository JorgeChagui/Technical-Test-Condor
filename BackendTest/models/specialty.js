var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Specialty = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, lowercase: true, trim: true, required: true }
}, {
        collection: 'specialties',
        timestamps: true
    });


module.exports = mongoose.model('specialty', Specialty);