import { useState } from "react"

export function NewTodoForm({ onSubmit }) {

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <div className="title-container">
          <h1>Mind Bendy ✧</h1>
          </div>
          <label htmlFor="item" className="new-title">New bendy</label>
          <input placeholder="What went well today?"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn" id="btn-add">Add</button>
      </form>
  )
}
