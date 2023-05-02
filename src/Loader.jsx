import loader from "../src/loader.css"

function Loader() {
  return (
    <div className="loader">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader