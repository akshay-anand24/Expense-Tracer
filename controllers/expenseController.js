const Expense = require('../models/expense');
const User = require('../models/user');
const { validateExpense } = require('../utils/validation');
const { parse } = require('json2csv');
const fs = require('fs');

exports.addExpense = async (req, res) => {
  try {
    const { error } =await validateExpense(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({'participants.email':req.body.email})
    let arr=[]
    expenses.forEach((Expense)=>{
      Expense.participants.forEach((participant)=>{
        if(participant.email===req.body.email)
          { participant.splitMethod=Expense.splitMethod
            arr.push(participant)}
      })
    })

    res.json(arr);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


function convertDataToCsv(data) {
  const records = data.flatMap(expense => 
    expense.participants.map(participant => ({
      _id: expense._id,
      amount: expense.amount,
      splitMethod: expense.splitMethod,
      participantEmail: participant.email,
      participantValue: participant.value,
      participantAmount: participant.amount,
      createdAt: expense.createdAt,
    }))
  );

  const fields = [
    '_id', 
    'amount', 
    'splitMethod', 
    'participantEmail', 
    'participantValue', 
    'participantAmount', 
    'createdAt'
  ];
  const opts = { fields };

  try {
    const csv = parse(records, opts);
    fs.writeFileSync('data.csv', csv);
    console.log('CSV file was written successfully');
  } catch (err) {
    console.error('Error converting data to CSV:', err);
  }
}


exports.downloadBalanceSheet = async (req, res) => {
  try {
    const expenses = await Expense.find();

    // Create CSV or Excel logic here
    convertDataToCsv(expenses)

    res.attachment('balance-sheet.csv');
    res.status(200).send("csvData"); // assuming `csvData` is the generated CSV content
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAll=async(req,res)=>{
  try {
    await Expense.deleteMany({});
    res.status(200).json({ message: 'All expenses have been deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting expenses.' });
  }
}

// exports.showExpense=async(req,res)=>{

// }
