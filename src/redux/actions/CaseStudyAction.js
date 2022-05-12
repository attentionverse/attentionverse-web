export const saveData =(data) => async(dispatch,getState) =>{
    console.log(" CaseStudyAction.js saveData() data : " ,data)
    dispatch({
        type:"CASE_STUDY_DATA",
        payload:data
    })
}