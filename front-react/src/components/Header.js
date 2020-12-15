import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaCar, 
  FaUsers, 
  FaLaptop, 
  FaCreditCard, 
  FaWhatsapp, 
  FaSignOutAlt, 
  FaBars,
  FaAngleUp,
  FaAngleDown
} from 'react-icons/fa'

import { 
  MenuList, 
  MenuItem, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Drawer, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Collapse
} from '@material-ui/core'

export default function Header({ title }) {
  const [state, setState] = useState({
    drawerOpen: false,
    collapseSite: false,
    collapseFinancial: false
  })

  return (
    <>
      { window.innerWidth < 577
        ? 
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'
              onClick={() => setState({...state, drawerOpen: true}) }>
              <FaBars />
            </IconButton>
            <Typography variant='h6'>{ title }</Typography>
          </Toolbar>
        </AppBar>
        : 
        <nav className='header navbar navbar-expand-lg navbar-light bg-white p-0'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              <img src='/assets/logo.png' alt='CAR CRM' height='40' />
            </Link>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/vehicles'>
                  <FaCar className='icon-lg' /> Veículos
                </Link>
              </li>
              <li className='nav-item'>
                <button className='nav-link bg-white' to='/vehicles'>
                  <FaUsers className='icon-lg' /> Proprietários
                </button>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#'>
                  <FaLaptop className='icon-lg' /> Site
                </a>
                <MenuList className='dropdown-menu'>
                  <MenuItem className='dropdown-item'>
                    Otimização para o Google
                  </MenuItem>
                  <MenuItem className='dropdown-item'>
                    Unidades e Telefone  
                  </MenuItem>
                  <MenuItem className='dropdown-item'>
                    Minha Logo
                  </MenuItem>
                  <MenuItem className='dropdown-item'>
                    Domínio
                  </MenuItem>
                  <MenuItem className='dropdown-item'>
                    Configurações
                  </MenuItem>
                </MenuList>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#'>
                  <FaCreditCard className='icon-lg' /> Financeiro
                </a>
                <MenuList className='dropdown-menu'>
                  <MenuItem className='dropdown-item'>
                    Meu Plano
                  </MenuItem>
                  <MenuItem className='dropdown-item'>
                    Minhas Transações
                  </MenuItem>
                </MenuList>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  <FaWhatsapp className='icon-lg' /> Ajuda
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/vehicles'>
                  <FaSignOutAlt className='icon-lg' /> Sair
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      }

      <Drawer anchor='left' open={state.drawerOpen} onClose={() => setState({...state, drawerOpen: false})}>
        <div style={{width: 320, maxWidth: window.innerWidth - 70}}>
          <List component='nav' className='menu-mobile'>
            <ListItem>
              <img className='img-fluid' src='/assets/logo.png' alt='CAR CRM' style={{maxHeight: 50}} />             
            </ListItem>
            <ListItem>
              user@teste.com
            </ListItem>
            <Divider className='mt-2 mb-3' />
            <ListItem>
              <ListItemIcon>
                <FaCar />
              </ListItemIcon>
              <ListItemText primary='Veículos' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaUsers />
              </ListItemIcon>
              <ListItemText primary='Proprietários' />
            </ListItem>
            
            <ListItem button onClick={() => setState({...state, collapseSite: !state.collapseSite})}>
              <ListItemIcon>
                <FaLaptop />
              </ListItemIcon>
              <ListItemText primary='Site' />
              { state.collapseSite ? <FaAngleUp /> : <FaAngleDown /> } 
            </ListItem>

            <Collapse in={state.collapseSite} timeout='auto' unmountOnExit>
              <List component='div' disabledPadding>
                <ListItem>
                  <ListItemText className='pl-5' primary='Otimização para o Google' />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary='Unidades e Telefones' />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary='Minha Logo' />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary='Domínio' />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary='Configurações' />
                </ListItem>
              </List>
            </Collapse>

            <Divider className='my-2' />

            <ListItem button onClick={() => setState({...state, collapseFinancial: !state.collapseFinancial})}>
              <ListItemIcon>
                <FaCreditCard />
              </ListItemIcon>
              <ListItemText primary='Financeiro' />
              { state.collapseFinancial ? <FaAngleUp /> : <FaAngleDown /> } 
            </ListItem>

            <Collapse in={state.collapseFinancial} timeout='auto' unmountOnExit>
              <List component='div' disabledPadding>
                <ListItem>
                  <ListItemText className='pl-5' primary='Meu Plano' />
                </ListItem>
                <ListItem>
                  <ListItemText className='pl-5' primary='Minhas Transações' />
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <FaWhatsapp />
              </ListItemIcon>
              <ListItemText primary='Ajuda' />
            </ListItem>

            <Divider className='my-2' />

            <ListItem>
              <ListItemIcon>
                <FaSignOutAlt />
              </ListItemIcon>
              <ListItemText primary='Sair' />
            </ListItem>

          </List>
        </div>
      </Drawer>
    </>
  )
}
