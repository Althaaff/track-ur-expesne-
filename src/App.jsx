import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from './ExpenseData'
import { useLoacalStorage } from './hooks/useLocalStorage'

function App() {
  const [expense, setExpense] = useLoacalStorage('expense', {
    title: '',
    category: '',
    amount: '',
  })
  const [expenses, setExpenses] = useLoacalStorage('expenses', ExpenseData);
  const [editingRowId, setEditingRowId] = useLoacalStorage('editingRowId', '');

  // const [localData, setLocalData] = useLoacalStorage('myNum', [1,2,3]);
  // console.log(localData);

  return (
<>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm 
          setExpenses={setExpenses} 
          expense={expense} 
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable 
          expenses={expenses} 
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main> 
    </>
  )
}

export default App
