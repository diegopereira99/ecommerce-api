const mongoose = require('mongoose');

const Order = mongoose.model('Order');


exports.get = async () => {
    const orders = await Order.find()
                    .populate('buyer', 'name cpf email');
    return orders;
};

exports.update = async (id) => {
    const order = await Order.findOneAndUpdate(
        {_id: id},
        {status: "CANCELED"}
    );
    return order;
}


exports.create = async (data) => {
    const order = new Order(data);
    const orderSaved = await order.save();
    return orderSaved;
    
};