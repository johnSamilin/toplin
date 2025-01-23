const { afterEachCleanUp } = require('./testing/test-utils');
const { shimInit } = require('./shim-init-node');
const sharp = require('sharp');
const nodeSqlite = require('sqlite3');
const pdfJs = require('pdfjs-dist');
const packageInfo = require('./package.json');

// Used for testing some shared components
const React = require('react');

require('../../jest.base-setup.js')();

shimInit({ sharp, nodeSqlite, pdfJs, React, appVersion: () => packageInfo.version });

global.afterEach(async () => {
	await afterEachCleanUp();
});
