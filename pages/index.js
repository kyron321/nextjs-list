import Link from "next/link"
import Footer from "../comps/footer"
import Navbar from "../comps/Navbar"

export default function Home(){
  return (
    <div>

      <h1>Home Page</h1>
      <Link href = "/ninjas">See Ninja Listing</Link>

    </div>
  )
}