import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';
import {AppCtrl} from './appCtrl';

import login from './modules/login';
import cursos from './modules/cursos';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

angular.module('app', [uirouter, login, cursos]).config(routing);