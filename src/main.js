import './vendor';
import './assets';
import angular from 'angular';
import application from './application';

export default angular.bootstrap(document, [application.name]);
