const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    product_name: { type: String, required: true },
    price: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
