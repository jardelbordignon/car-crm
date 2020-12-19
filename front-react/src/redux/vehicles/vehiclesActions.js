import { HttpAuth } from '../../config/Http'

import { changeLoading } from '../loading/loadingActions'

export const actionTypes = {
  VEHICLES_INDEX: 'VEHICLES_INDEX',
  //VEHICLES_STORE: 'VEHICLES_STORE',
  //VEHICLES_SHOW:  'VEHICLES_SHOW',
  //VEHICLES_UPDATE:  'VEHICLES_UPDATE',
  VEHICLES_DESTROY: 'VEHICLES_DESTROY',

  VEHICLES_CHANGE:  'VEHICLES_CHANGE',
  VEHICLES_SUCCESS: 'VEHICLES_SUCCESS',
  VEHICLES_ERROR: 'VEHICLES_ERROR'
}


export const vehiclesChange = payload => ({
  type: actionTypes.VEHICLES_CHANGE, payload
})

export const vehiclesSuccess = payload => ({
  type: actionTypes.VEHICLES_SUCCESS, payload
})

export const vehiclesError = payload => ({
  type: actionTypes.VEHICLES_ERROR, payload
})



export const vehiclesIndexResponse = (payload, isLoadMore) => ({
  type: actionTypes.VEHICLES_INDEX, payload, isLoadMore
})

// INDEX
export const vehiclesIndex = (query, isLoadMore) => dispatch => {
  return HttpAuth.get('/vehicles?' + new URLSearchParams(query))
    .then(res => !!res && dispatch(vehiclesIndexResponse(res.data, isLoadMore)))
    .catch(err => console.error(err))
}

// STORE
export const vehiclesStore = () => dispatch => {
  console.log('vehiclesStore')
  return HttpAuth.post('/vehicles')
    .then(res => !!res && dispatch(vehiclesIndexResponse(res.data)))
    .catch(err => console.error(err))
}

// SHOW
export const vehiclesShow = id => dispatch => {
  console.log('vehiclesShow '+id)
  return HttpAuth.get('/vehicles/' + id)
    .then(res => !!res && dispatch(vehiclesIndexResponse(res.data)))
    .catch(err => console.error(err))
}

// UPDATE
export const vehiclesUpdate = data => dispatch => {
  dispatch( changeLoading({open: true}))
  return HttpAuth.put('/vehicles/' + data.id, data)
    .then(res => {
      dispatch( changeLoading({open: false}))
      if ( !!res) {
        if (res.data.error) {
          dispatch(vehiclesSuccess(false))
          dispatch(vehiclesError(res.data.error))
        }

        if (res.data.status === 200) {
          dispatch(vehiclesSuccess(true))
        }
      }
    })
}


// DESTROY
export const vehiclesDestroyResponse = payload => ({
  type: actionTypes.VEHICLES_DESTROY, payload
})

export const vehiclesDestroy = id => dispatch => {
  return HttpAuth.delete('/vehicles/' + id)
    .then(res => {
      if (typeof res !== 'undefined') {
        if (res.data.status === 200) {
          dispatch(vehiclesDestroyResponse(id))
        }
      }
    })
}