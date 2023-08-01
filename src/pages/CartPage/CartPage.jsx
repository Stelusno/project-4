import {useState} from 'react'

const CartPage = ({ handleCreateOrder }) => {
    

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
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='title' name='title' onChange={handleChange} />
                <br />
                <br />
                <input type='text' placeholder='description' name='description' onChange={handleChange} />
                <br />
                <br />
                <input type='number' name='price' onChange={handleChange} />
                <br />
                <br />
                <select name='category' onChange={handleChange}>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="American">American</option>
                </select>
                <br />
                <br />
                <input type='text' placeholder='image'name='img' onChange={handleChange} />
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )
}

export default Add