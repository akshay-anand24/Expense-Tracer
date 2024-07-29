const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/add', expenseController.addExpense);
router.post('/user', expenseController.getUserExpenses);
router.get('/overall', expenseController.getOverallExpenses);
router.get('/balance-sheet', expenseController.downloadBalanceSheet);
router.delete('/delete', expenseController.deleteAll);

module.exports = router;
