import {
  all, fork, put, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  IMAGE_FAILURE, IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_UPLOAD_FAILURE, IMAGE_UPLOAD_REQUEST, IMAGE_UPLOAD_SUCCESS,
  SURVEY_FAILURE, SURVEY_REQUEST, SURVEY_SUCCESS,
} from "../reducers/user";


function surveyAPI(data){
  return axios.post('user/survey',data)
}

function* survey(action){
  try{
    const result = yield call(surveyAPI,action.data);
    yield put({
      type:SURVEY_SUCCESS,
      data:result.data
    })
  }catch (err){
    yield put({
      type:SURVEY_FAILURE,
      data:err.response.data
    })
    console.error(err)
  }
}

function imageReqAPI(data){
  return axios.post('user/image',data)
}

function* imageReq(action){
  try{
    const result = yield call(imageReqAPI,action.data);
    yield put({
      type:IMAGE_SUCCESS,
      data:result.data
    })
  }catch (err){
    yield put({
      type:IMAGE_FAILURE,
      data:err.response.data
    })
    console.error(err)
  }
}

function imageUploadAPI(data){
  return axios.post('user/upload/image',data)
}

function* imageUpload(action){
  try{
    const result = yield call(imageUploadAPI,action.data);
    yield put({
      type:IMAGE_UPLOAD_SUCCESS,
      data:result.data
    })
  }catch (err){
    yield put({
      type:IMAGE_UPLOAD_FAILURE,
      data:err.response.data
    })
    console.error(err)
  }
}

function* watchSurvey() {
  yield takeLatest(SURVEY_REQUEST, survey);
}

function* watchImage() {
  yield takeLatest(IMAGE_REQUEST, imageReq);
}

function* watchImageUpload() {
  yield takeLatest(IMAGE_UPLOAD_REQUEST, imageUpload);
}

export default function* userSaga() {
  yield all([
    fork(watchSurvey),
    fork(watchImage),
    fork(watchImageUpload),
  ])
}
