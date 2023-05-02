import { useEffect } from "react"
import { useParams,useNavigate,Link } from "react-router-dom"
import { handleInfo } from "./store/actions"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./Loader"
function CountryInfo() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(handleInfo(id))
  },[id])
  const data = useSelector(state=>state.infoReducer.dataInfo)
  const isLoading = useSelector(state=>state.loaderReducer.isLoading)
  
  
  return (
    <div className="container-md" style={{"height":"80vh"}}>
      <div className="row p-4">
        
        <div className="col-12">
        <button className="btn btn-light shadow-sm" onClick={()=>navigate('/')}>Go back</button>

        </div>

        </div>
        {isLoading ? <div>
          <Loader />
        </div> :null}
          {data && !isLoading ? data.map((info,index)=>
      <div className="row shadow-lg p-2"  key={index}>
          <div className="col-12 col-md-4">
            <h1 className="display-5 py-2">
            {info.name.common}
            </h1>
            <img src={info.flags.png} className="img-fluid pb-2" alt="flag image" />
          </div>
          <div className="col-12 col-md-4">
            <p>Popultion: {info.population}</p>
            {info.capital ? <p>Capital: {info.capital[0]}</p>:null}
            <p>Region: {info.region}</p>
            <p>Subregion: {info.subregion}</p>
            <div>
                Continent: {
                  info.continents ? Object.values(info.continents).map((continent,index)=>
                    <p key={index}>{continent}</p>
                    )
                :null }
              </div>
            <p>Languages:</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
            {info.languages ? 
            Object.values(info.languages).map((lang,index)=>
                <p className="bg-light text-muted p-1" key={index}>
                {lang}
                </p>
              )
              :null}
              

              </div>
          </div>
              <div className="col-12 col-md-3">
                {info.borders ? <p className="w-100 text-center">Borders:</p>:null}
                {info.borders ? Object.values(info.borders).map((border,index)=>
                  <Link to={`/CountryInfo/${border}`} className="text-center text-muted rounded m-1 d-block" key={index}>{border}</Link>
                ) :null}
              </div>
      </div>
          )
          : null}
    </div>
  )
}

export default CountryInfo