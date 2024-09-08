import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Chip from "../components/chip"
// import Sorted from "../components/sorted"
function Product() {
    const [item, setItem] = useState([])
    const [catagores, setCatagores] = useState([])
    const [Chosencatagores, setChosenCatagores] = useState("All")
    const [loder, setLoder] = useState(true)
    useEffect(() => {
        setLoder(false)
        const url = Chosencatagores ==="All" 
        ? "https://dummyjson.com/products"
         : `https://dummyjson.com/products/category/${Chosencatagores}`
        axios.get(url).then((res) => setItem(res.data.products))
            .catch((error) => alert(error))
    }, [Chosencatagores])
    useEffect(() => {
        setLoder(false)
        axios.get('https://dummyjson.com/products/categories').then((res) => setCatagores(res.data))
            .catch((error) => alert(error))
    }, [])
     
    return (
        <div className="container  mx-auto ">
            {loder ? (<h1 className="text-center text-3xl">loding...</h1>) : (
                <div>
                    <div className="flex flex-wrap gap-2 m-6">
                        <Chip onclick={()=>setChosenCatagores("All")} isChosen={Chosencatagores === "All"} showcategory={{
                            name: "All",
                            slug: "All"
                        }} />

                        {catagores.map((category, index) => (

                            <Chip key={index} onclick={() => setChosenCatagores(category.slug)} isChosen={Chosencatagores === category.slug} showcategory={category} />
                        ))}
                    </div>
                    <div className="flex flex-wrap m-4 gap-y-0.5 ">
                        {item.map((products, index) => (
                            <Card item={products} key={index} />
                             
                        ))}
                    </div>
                   
                </div>

            )}
        </div>




    )
}
export default Product