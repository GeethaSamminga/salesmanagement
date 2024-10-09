const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  agentmail: {
    type: String,
    ref: "Agent",
    required: true,
  },
  leadmail: {
    type: String,
    ref: "Lead", 
    required: true,
  },
  productsSold: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", 
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      price: {
        type: Number, 
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  saleDate: {
    type: Date,
    default: Date.now,
  },
});

// Ensure only one sale per lead per agent
saleSchema.index({ agentmail: 1, leadmail: 1 }, { unique: true });

const Sale = mongoose.model("Sale", saleSchema);
module.exports = Sale;
