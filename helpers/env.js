const path = require('path');

// note that we had to specify absolute paths here bc
// otherwise tests run from the root folder wont work
const env = require('@ladjs/env')({
  path: path.join(__dirname, '..', '.env'),
  defaults: path.join(__dirname, '..', '.env.defaults'),
  schema: path.join(__dirname, '..', '.env.schema'),
  errorOnExtra: false
});

if (env.NODE_ENV === 'test') {
  env.DKIM_PRIVATE_KEY_PATH = path.join(
    __dirname,
    '..',
    'test/fixtures/dkim-test-private.key'
  );
}

module.exports = env;
