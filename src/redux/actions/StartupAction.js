


export const saveId =(id) => async(dispatch,getState) =>{
    console.log(" StartupAction.js saveId Id : " ,id)
    const data = getState().startup.resources_data
    console.log(" StartupAction.js data : ",data)
    dispatch({
        type:"RESOURCE_BUTTONS_ID",
        payload:id
    })
}