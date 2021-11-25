import '../components/ExpensesItem.css'
import ExpenseDate from '../components/ExpenseDate.js'
import Card from '../UI/Card';
function ExpenseItem(props) {
  
    return (
      <Card className='expense-item'>
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
    </Card>)
  }
  
  export default ExpenseItem;
  