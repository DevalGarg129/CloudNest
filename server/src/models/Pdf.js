const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    originalName: {
        type: String,
        required: true,
        trim: true
    },
    mimeType: {
        type: String,
        required: true,
        enum: ["application/pdf"]
    },
    size: {
        type: Number,
        required: true,
        min: 1
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder",
        default: null
    },
    s3key: {
        type: String,
        required: true,
        unique: true
    },
    isTrashed: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    },
}, {
    timestamps: true,
});

const Pdf = mongoose.model("Pdf", pdfSchema);
module.exports = Pdf;