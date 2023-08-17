import { useEffect } from "react"
import UseFetch from "../../hooks/UseFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"
import './Styles/FilterCategory.css'

const FilterCategory = () => {
const [categories, getAllCategories] = UseFetch()
useEffect(() => {
    getAllCategories('/categories')
},[])

console.log(categories)

const dispatch = useDispatch()

const handleAllCategories = () => {
    dispatch(getAllProductsThunk())
}
const handleFilterCategories = (id) => {
    dispatch(getFilteredProductsThunk(id))
}
  return (
    <article className="category__container">
        <h3 className="category__title">Filter by category</h3>
        <ul className="categories__container">
            <li className="categories__list" onClick={handleAllCategories}>All categories</li>
            {
                categories?.map(category => (
                    <li className="categories" onClick={() => handleFilterCategories(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory