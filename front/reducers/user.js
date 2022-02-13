import produce from 'immer';

export const initialState = {
    surveyLoading: false,
    surveyDone:false,
    surveyError:null,

    imageLoading: false,
    imageDone:false,
    imageError:null,

    imageUploadLoading: false,
    imageUploadDone:false,
    imageUploadError:null,

    imageUrl:null,

    index:null,
};

export const SURVEY_REQUEST = "SURVEY_REQUEST"
export const SURVEY_SUCCESS = "SURVEY_SUCCESS"
export const SURVEY_FAILURE = "SURVEY_FAILURE"

export const IMAGE_REQUEST = "IMAGE_REQUEST"
export const IMAGE_SUCCESS = "IMAGE_SUCCESS"
export const IMAGE_FAILURE = "IMAGE_FAILURE"

export const IMAGE_UPLOAD_REQUEST = "IMAGE_UPLOAD_REQUEST"
export const IMAGE_UPLOAD_SUCCESS = "IMAGE_UPLOAD_SUCCESS"
export const IMAGE_UPLOAD_FAILURE = "IMAGE_UPLOAD_FAILURE"

export const IMAGE_DONE = "IMAGE_DONE"

export default (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case IMAGE_DONE:
            draft.imageLoading = false;
            draft.imageError = null;
            draft.imageDone = false;
            draft.imageUrl = null;
            break;

        case SURVEY_REQUEST:
            draft.surveyLoading = true;
            draft.surveyError = null;
            draft.surveyDone = false;
            break;
        case SURVEY_SUCCESS:
            draft.surveyLoading = false;
            draft.surveyDone = true;
            draft.index = action.data;
            break;
        case SURVEY_FAILURE:
            draft.surveyLoading = false;
            draft.surveyError = action.error;
            break;

        case IMAGE_REQUEST:
            draft.imageLoading = true;
            draft.imageError = null;
            draft.imageDone = false;
            break;
        case IMAGE_SUCCESS:
            draft.imageLoading = false;
            draft.imageDone = true;
            break;
        case IMAGE_FAILURE:
            draft.imageLoading = false;
            draft.imageError = action.error;
            break;

        case IMAGE_UPLOAD_REQUEST:
            draft.imageUploadLoading = true;
            draft.imageUploadError = null;
            draft.imageUploadDone = false;
            break;
        case IMAGE_UPLOAD_SUCCESS:
            draft.imageUploadLoading = false;
            draft.imageUploadDone = true;
            draft.imageUrl = action.data
            break;
        case IMAGE_UPLOAD_FAILURE:
            draft.imageUploadLoading = false;
            draft.imageUploadError = action.error;
            break;

        default:
            break;
    }
});
