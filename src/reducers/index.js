import { combineReducers } from 'redux'
import DisplayContentReducer from './DisplayContentReducer'
import performanceBar from './performanceBarReducer'
import levelUpReducer from './levelUpReducer'
import answerBoolean from './answerBoolean'

import showCorrectAnswer from './ShowCorrectAnswerReducer'
import shownBreeds from './shownBreeds'

export default combineReducers({
    levelUpReducer,
    answerBoolean,
    DisplayContentReducer,
    performanceBar,

    showCorrectAnswer,
    shownBreeds

})
