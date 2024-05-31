import React from "react";

export default function ContextMenu({
  menuPosition, 
  setMenuPosition,
  setExpenses, 
  setExpense, 
  expenses,
  rowId,
  setEditingRowId
}) {
  if(!menuPosition.left) return
  return (
    <div className="context-menu" style={{...menuPosition}}>
       <div onClick={() => {
        const {title, category, amount} = expenses.find((expense) => expense.id == rowId);
        setEditingRowId(rowId)
        setExpense({title, category, amount})
        setMenuPosition({})
        console.log("editing!")
       }}>Edit</div>

       <div onClick={() => {
        setExpenses((prevState) => {
          return prevState.filter((expense) => expense.id !== rowId) 
        })
        console.log("Deleting!")
        setMenuPosition({})
       }}>Delete</div>
    </div>
  )
}
