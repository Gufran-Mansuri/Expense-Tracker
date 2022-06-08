import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = (props) =>{
    const [editing, setEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData)
    }
    const statusEditing = () => {
        setEditing(true)
    }
    const startEditing = () =>{
        setEditing(false)
    }

    return(
        <div className='new-expense'>
            {!editing && <button onClick={statusEditing} >Add Expenses</button>}
            {editing && <ExpenseForm onSaveExpensedData={saveExpenseDataHandler} startEditingHandler={startEditing}/>}
        </div>
    );
}

export default NewExpenses;