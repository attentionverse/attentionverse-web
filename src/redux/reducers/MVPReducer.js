const initState = {
    mvp_data: [],
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'MVP_DATA':
            return {
                ...state,
                mvp_data: action.payload
            }
        default:
            return state
    }
}
