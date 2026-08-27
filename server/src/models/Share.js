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

shareSchema.index({
        file: 1,
        sharedWith: 1
    },{
        unique: true
    }
);

const Share = mongoose.model("Share", shareSchema);
module.exports = Share;

/* This part is important:
shareSchema.index(
    { file: 1, sharedWith: 1 },
    { unique: true }
);
It means one user can't have two separate Share documents for the same PDF.
For example, this combination:
PDF A + User B
can occur only once.
If we need to change: view → download
we update the existing Share instead of creating another one. */