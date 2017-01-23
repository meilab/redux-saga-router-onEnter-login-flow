import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  loadImageRequest: null,
  selectImage: ['image'],
  loadImageSuccess: ['images'],
  loadImageFailure: ['error']
})

export const ImageTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  images:null,
  selectedImage:null,
  fetching: null,
  keyWord:null,
  error: null
})

const requestImage = (state) =>
  state.merge({
    fetching:true,
  })

const receiveImage = (state, action) =>
  state.merge({
    fetching: false,
    images: action.images,
    error: null
  })

const failure = (state, action) =>
  state.merge({
    fetching: false,
    error:true,
    images: null
  })

const selectImage = (state, action) =>
  state.merge({
    selectedImage:action.image
  })

const ACTION_HANDLERS = {
  [Types.LOAD_IMAGE_REQUEST]: requestImage,
  [Types.SELECT_IMAGE]: selectImage,
  [Types.LOAD_IMAGE_SUCCESS]: receiveImage,
  [Types.LOAD_IMAGE_FAILURE]: failure
}

export const reducer = createReducer(INITIAL_STATE, ACTION_HANDLERS)
