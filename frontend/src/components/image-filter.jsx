import { useEffect } from "react"
import { useForm } from "../customHooks/useForm"
import { imageService } from "../services/image.service"

export function ImageFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit, handleChange] = useForm(imageService.getDefaultFilter(), onSetFilter.current)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    return (
        <div className="filter">
            <input type="text"
                name="searchTerm"
                placeholder="What are you looking for?"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
        </div>
    )
}