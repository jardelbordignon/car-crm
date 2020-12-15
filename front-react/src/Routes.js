import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Home = lazy(() => import('./pages/Home'))
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<div className='d-flex justify-content-center mt-5 pt-5'> <CircularProgress /> </div>}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/vehicles' component={SignUp} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Routes
