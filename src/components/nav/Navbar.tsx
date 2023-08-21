import MainNav from "./MainNav"

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>This is logo</div>
        <MainNav className="mx-6"/>
        <div className="ml-auto flex items-center space-x-4">
          User button
        </div>
      </div>
    </div>
  )
}

export default Navbar