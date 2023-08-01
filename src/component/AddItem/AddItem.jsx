import {useState} from 'react'
import './AddItem.css'

const Add = ({ handleCreate }) => {
    const defaultItem = {
        title: '',
        description: '',
        price: 0,
        category: 'Italian',
        img: ''
    }

    const [item, setItem] = useState(defaultItem)

    const handleChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(item)
    }

    return (
        <>
            <h1>ADD ITEM</h1>
            <form className="AddItem" onSubmit={handleSubmit}>
                <input className="AddItem" type='text' placeholder='title' name='title' onChange={handleChange} />
                <br />
                <br />
                <input className="AddItem" type='text' placeholder='description' name='description' onChange={handleChange} />
                <br />
                <br />
                <input className="AddItem" type='number' name='price' onChange={handleChange} />
                <br />
                <br />
                <select id="select" name='category' onChange={handleChange}>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="American">American</option>
                </select>
                <br />
                <br />
                <input className="AddItem" type='text' placeholder='image'name='img' onChange={handleChange} />
                <br />
                <br />
                <input className="AddItem" type='submit' />
            </form>
        </>
    )
}

export default Add