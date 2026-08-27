const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pdf",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    sharedWith: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    permission: {
        type: String,
        enum: ["view", "download"],
        default: "view",
        required: true
    },
    expiresAt: {
        type: Date,
        default: null
    },
}, {
    timestamps: true
});

shareSchema.index(
    {
        file: 1,
        sharedWith: 1
    },
    {
        unique: true
    }
);

const Share = mongoose.model("Share", shareSchema);
module.exports = Share;