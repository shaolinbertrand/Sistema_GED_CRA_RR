import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './pages/inicial';
import Login from './pages/login';
import User from './pages/user';
import ListUser from './pages/listUser'
import ListUserAtivos from './pages/listUserAtivos'
import ListUserInativos from './pages/ListUserInativos'
import CriarUser from './pages/criarUser';
import InicialUser from './pages/inicialUser';
import InicialAdm from './pages/inicialAdm';
import CriarADM from './pages/criarADM';
import ListADM from './pages/listarADM';
import Adm from './pages/ADM';
import Doc from './pages/listarDoc';
import EditUser from './pages/editUser';
import EditAdm from './pages/editAdm';
import Upload from './pages/uploadfile';
import Log from './pages/log';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component ={Inicial}/>
                <Route path="/login" component={Login}/>
                <Route path="/admin/users" component={ListUser}/>
                <Route path="/ativos" component={ListUserAtivos}/>
                <Route path="/inativos" component={ListUserInativos}/>
                <Route path="/admin/user/:id" component={User}/>
                <Route path="/admin/edituser/:id" component={EditUser}/>
                <Route path="/admin/editadm/:id" component={EditAdm}/>
                <Route path="/admin/usuario/create" component={CriarUser}/>
                <Route path="/admin/inicial" component={InicialAdm}/>
                <Route path="/user/inicial" component={InicialUser}/>
                <Route path="/user/adms/create" component={CriarADM}/>
                <Route path='/admin/listADM' component={ListADM}/>
                <Route path='/adm/:id' component={Adm}/>
                <Route path='/doc/:id/:name/:registro' component={Doc}/>
                <Route path='/upload/:id/:registro' component={Upload}/>
                <Route path='/log/:id/' component={Log}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;