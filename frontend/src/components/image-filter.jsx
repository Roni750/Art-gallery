import { useEffect, useState } from "react"

export function ImageFilter({ setFilterBy, filterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        setFilterBy(filterByToEdit)
    }, [filterByToEdit])

    return (
        <div className="filter">
            <input type="text"
                name="searchTerm"
                placeholder="What are you looking for?"
                value={filterByToEdit.searchTerm}
                onChange={(ev) => setFilterByToEdit(ev.target.value)}
            />
        </div>
    )
}