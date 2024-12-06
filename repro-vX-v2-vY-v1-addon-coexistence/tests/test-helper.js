import Application from 'repro-vX-v2-vY-v1-addon-coexistence/app';
import config from 'repro-vX-v2-vY-v1-addon-coexistence/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart } from 'ember-qunit';

export function start() {
  setApplication(Application.create(config.APP));

  setup(QUnit.assert);

  qunitStart({ loadTests: false });
}
