const { timeStamp } = require("console");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Please add a name"],
            trim: true,
        },
        sku: {
            type: String,
            required: true,
            default: "SKU",
            trim: true,
        },
        category: {
            type: String,
            required: [true, "Please add a category"],
            trim: true,
        },
        quantity: {
            type: String,
            required: [true, "Please add a quantity"],
            trim: true,
        },
        price: {
            type: String,
            required: [true, "Please add a price"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Please add a description"],
            trim: true,
        },
        image: {
            type: String,
            default: {},
            trim: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Token", productSchema);
module.exports = Token;
