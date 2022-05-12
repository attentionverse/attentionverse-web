const initState = {
    case_study_data: [],
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'CASE_STUDY_DATA':
            return {
                ...state,
                case_study_data: action.payload
            }
        default:
            return state
    }
}
