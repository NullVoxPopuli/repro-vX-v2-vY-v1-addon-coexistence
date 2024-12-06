import Application from 'repro-v-x-v2-v-y-v1-addon-coexistence/app';
import config from 'repro-v-x-v2-v-y-v1-addon-coexistence/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
