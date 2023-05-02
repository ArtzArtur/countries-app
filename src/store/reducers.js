import { combineReducers } from "redux"
const initialState = {
  data:[],
  filteredData:[],
  dataInfo:[],
}

const loaderReducer = (state={
  isLoading:false,
  error:null}
  ,{type,payload}) =>{
  switch(type){
    case "FETCH_PENDING":
      return{
        isLoading:true
      }
    case "FETCH_SUCCESS":
      return{
        isLoading:false
      }
    case "FETCH_ERROR":
      return{
        error:payload
      }
    default:return state
  }
}

const infoReducer = (state=initialState,action) => {
switch(action.type){
  
  case "FETCH_INFO":
    return{
      ...state,
      dataInfo:action.payload,
    }
    default:return state
}
}

const countryReducer = (state=initialState,action) =>{
  switch(action.type){
      case "FETCH_COUNTRIES":
        return{
          ...state,
          data:action.payload,
          filteredData:action.payload,
        }
      case "FILTER":
        return{
          ...state,
          filteredData:state.data.filter(item=>{
            return item.name.common.toLowerCase().includes(action.payload.toLowerCase())
          }),
        }
      default:return state
  }
}


const allReducers = combineReducers({
  infoReducer,countryReducer,loaderReducer
})

export default allReducers