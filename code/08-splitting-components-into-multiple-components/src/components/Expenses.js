import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ expenses }) {
  const expenseList = expenses.map((expense, idx) => {
    const { date, amount, title } = expense;

    return <ExpenseItem key={idx} date={date} amount={amount} title={title} />;
  });

  return <div className="expenses">{expenseList}</div>;
}

export default Expenses;
