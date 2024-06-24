const ExpenseSchema = require("../models/ExpenseModel.js");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const Expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //validation
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await Expense.save();

    res.status(200).json({ message: "Expense added" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error Please Check the connection" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const Expenses = await ExpenseSchema.find().sort({ createAt: -1 });
    res.status(200).json(Expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  ExpenseSchema.findByIdAndDelete(id)
  .then((Expense)=>{
    res.status(200).json({message:'Expense Deleted'})
  })
  .catch((err)=>{
    res.status(500).json({message:'Server Error'})
  })
};
