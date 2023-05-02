export const handleData = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_PENDING",
    })
    try{
    const resp = await fetch('https://restcountries.com/v3.1/all')
    const json = await resp.json()
    if(json.message){
      throw new Error(json.message)
    }
    dispatch({
      type: "FETCH_COUNTRIES",
      payload: json,
    })
    dispatch({
      type:"FETCH_SUCCESS"
    })
  }
  catch(err){
    dispatch({
      type:"FETCH_ERROR",
      payload:err

    })
  }
  }
}

export const handleInfo = (code) => {
  return async(dispatch) =>{
    dispatch({
      type: "FETCH_PENDING",
    })
    try{
      const resp = await fetch(`https://restcountries.com/v3.1/alpha/${code}
      `)
      const json = await resp.json()
      if(json.message){
        throw new Error(json.message)
      }
      dispatch({
        type:"FETCH_INFO",
        payload:json
      })
      dispatch({
        type: "FETCH_SUCCESS",
      })
    }
    catch(err){
      dispatch({
        type:"FETCH_ERROR",
        payload:err
      })
    }
  }
}

export const handleFilter = (item) => {
  return {
    type: "FILTER",
    payload:item
  }
}

