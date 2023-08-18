import CollectClient from "./components/CollectClient"

const CollectPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CollectClient />
      </div>
    </div>
  )
}

export default CollectPage