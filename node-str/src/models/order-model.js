const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    created_at: {
        type: Date,
        default: Date.now()
    },
    cancelDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['CONCLUDED', 'CANCELED', "PROGRESS" ]
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items: [
        {
            amount: {
                type: Number,
                default: 1,
                required: true
            },
            price_unit: {
                type: Number,
                default: 1,
                required: true
            },
            total: {
                type: Number,
                default: 1,
                required: true
            },
            product: {
                id: {
                    type: Number,
                    required: true
                },
                sku: {
                    type: Number,
                    required: true
                },
                title: {
                    type: "String",
                    required: true
                }
            }
            
        }
    ]
});

module.exports = mongoose.model("Order", schema);