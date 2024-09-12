import { useContext } from "react"
import { Link } from "react-router-dom"
import { themeContext } from "../Context/Theme"
function Card({ item,  }) {
    const {thumbnail,title,category,price,id} = item
    const{theme}=useContext(themeContext)
    return (
        <Link to={`/products/${id}`} className={`lg:w-1/4 md:w-1/2 ${theme=="Dark" ? "bg-white" : "bg-gray-700 text-white border " } p-4 w-full shadow  `}>
            <div className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={thumbnail}
                />
            </div>
            <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                    {category}
                </h3>
                <h2 className=" title-font text-lg font-medium">
                    {title}
                </h2>
                <p className="mt-1">${price}</p>
            </div>

        </Link>

    )}
export default Card

