import EmberRouter from '@ember/routing/router';
import config from 'repro-v-x-v2-v-y-v1-addon-coexistence/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
