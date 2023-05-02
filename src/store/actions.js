export const handleData = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_PENDING",
    })
    const resp = await fetch('https://restcountries.com/v3.1/all')
    const json = await resp.json()
    dispatch({
      type: "FETCH_COUNTRIES",
      payload: json,
    })
    dispatch({
      type:"FETCH_SUCCESS"
    })
  }
}

export const handleInfo = (code) => {
  return async(dispatch) =>{
    dispatch({
      type: "FETCH_PENDING",
    })
    const resp = await fetch(`https://restcountries.com/v3.1/alpha/${code}
    `)
    const json = await resp.json()
    dispatch({
      type:"FETCH_INFO",
      payload:json
    })
    dispatch({
      type: "FETCH_SUCCESS",
    })
  }
}

export const handleFilter = (item) => {
  return {
    type: "FILTER",
    payload:item
  }
}

