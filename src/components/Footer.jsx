import { Link } from "react-router-dom"

function Footer(){
    return(
<footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto text-center">
    <p className="text-sm">© 2024 Your Company Name. All Rights Reserved.</p>
    <div className="mt-4">
      <a href="#" className="text-gray-400 hover:text-white mx-2">
        Privacy Policy
      </a>
      <a href="#" className="text-gray-400 hover:text-white mx-2">
        Terms of Service
      </a>
      <Link to={"Contact"} className="text-gray-400 hover:text-white mx-2">
        Contact Us
      </Link>
    </div>
  </div>
</footer>

    )
}
export default Footer