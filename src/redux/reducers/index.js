import { combineReducers } from "redux";
import mvp from './MVPReducer';
import study from './CaseStudyReducer'

export default combineReducers({
    mvp,
    study,
})