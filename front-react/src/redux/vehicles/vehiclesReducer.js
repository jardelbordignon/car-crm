import { actionTypes } from './vehiclesActions'

const initialState = {
  vehicles: {
    data: []
  },
  vehicle: {},
  success: false,
  error: {}
}

export default (state = initialState, { type, payload, isLoadMore }) => {
  switch (type) {

  case actionTypes.VEHICLES_INDEX:
    if (isLoadMore) {
      payload.vehicles.data = [...state.vehicles.data, ...payload.vehicles.data]
    }
    return { ...state, ...payload }

  case actionTypes.VEHICLES_DESTROY:
    return {
      ...state,
      vehicles: {
        ...state.vehicles,
        data: state.vehicles.data.filter(vehicle => vehicle.id !== payload)
      }
    }

  case actionTypes.VEHICLES_CHANGE:
    return {
      ...state,
      vehicle: { ...state.vehicle, ...payload }
    }

  case actionTypes.VEHICLES_SUCCESS:
    return { ...state, success: payload }

  case actionTypes.VEHICLES_ERROR:
    return { ...state, error: payload }

  default:
    return state
  }
}
