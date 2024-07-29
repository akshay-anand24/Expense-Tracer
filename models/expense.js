const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String },
  splitMethod: { type: String, enum: ['equal', 'exact', 'percentage'], required: true },
  participants: [
    {
      email: { type:String,  required: true },
      value: { type: Number, required: true },
      amount:{ type:Number},
      splitMethod:{type:String}
    }
  ],
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
