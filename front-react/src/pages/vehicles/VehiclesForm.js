import { useState, useEffect } from 'react'
import { CircularProgress, TextField, InputAdornment } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { vehiclesStore, vehiclesShow, vehiclesChange } from '../../redux/vehicles/vehiclesActions'
import Header from '../../components/Header'
import CustomMaskedInput from '../../components/CustomMaskedInput'


export default function VehiclesForm(props) {
  const dispatch = useDispatch()
  const data = useSelector( state => state.vehiclesReducer )

  const [state, setState] = useState({
    isLoading: true,
    isLoadingCep: false,
    isDeleted: null,
    redirect: false,
    tips: 0,
    confirmEl: null,
    vehicle_id: props.match.params.id || null
  })

  useEffect(() => {
    dispatch(
      state.vehicle_id ? vehiclesShow(state.vehicle_id) : vehiclesStore()
    )
    .then(setState({isLoading: false}))
  }, [])

  return (
    <>
      <Header title='Registro de Veículos' />
      
      <div className="container mt-4 pt-3">
        { state.isLoading
          ? <div className='d-flex justify-content-center mt-5 pt-5'><CircularProgress /></div>
          : (
            <div className='row'>
              <div className="col-md-7">
                <h3 className='font-weight-normal mb-4'>
                  Localicação do Veículo
                </h3>
                <div className='card card-body'>
                  <div className='col-md-7'>
                    <label className='label-custom mb-2'>CEP</label>
                    <TextField
                      style={state.isLoadingCep && { opacity: .5}}
                      error={!!data.error.zipCode}
                      type='tel'
                      InputProps={{
                        inputComponent: CustomMaskedInput,
                        value: data.vehicle.zipCode,
                        onChange: e => {
                          dispatch(vehiclesChange({ zipCode: e.target.value }))
                          if (e.target.value.length >= 9) {
                            setState({ isLoadingCep: true })
                          }
                        },
                        endAdornment: (
                          <InputAdornment position='start'>
                            {state.isLoadingCep ? <CircularProgress size={32} /> : <></> }
                          </InputAdornment>
                        )
                      }}
                    />
                    { data.error.zipCode && 
                      <strong className='text-danger'>{data.error.zipCode[0]}</strong>
                    }
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
