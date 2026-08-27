const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    parentFolder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder",
        default: null
    },
}, {
    timestamps: true,
});

const Folder = mongoose.model("Folder", folderSchema);
mongoose.exports = Folder;