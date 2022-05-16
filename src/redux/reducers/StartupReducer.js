const initState = {
    resources_data:[],
    id:null,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'RESOURCE_BUTTONS_ID':
            return {
                ...state,
                id: action.payload
            }

        default:
            return state
    }
}
