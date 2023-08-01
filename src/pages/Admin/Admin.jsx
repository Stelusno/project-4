import AddItem from '../../component/AddItem/AddItem'
import ItemIndex from '../../component/ItemIndex/ItemIndex'
import './Admin.css'

export default function Admin({ items, handleEdit, handleCreate, handleDelete}) {
    return(
    <div className="Admin">
        <AddItem handleCreate={handleCreate} />
	    <ItemIndex items={items} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
    )
}