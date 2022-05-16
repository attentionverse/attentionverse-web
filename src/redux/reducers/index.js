import { combineReducers } from "redux";
import mvp from './MVPReducer';
import study from './CaseStudyReducer'
import startup from './StartupReducer'

export default combineReducers({
    mvp,
    study,
    startup,
})