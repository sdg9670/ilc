const config = require('config');
const localStorage = require('../../common/localStorage');
const Registry = require('./Registry');
const wrapFetchWithCache = require('../../common/wrapWithCache');

module.exports = new Registry(
    config.get('registry.address'),
    wrapFetchWithCache(localStorage, console),
    console
);
