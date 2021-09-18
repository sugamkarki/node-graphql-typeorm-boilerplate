process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import GraphqlRoute from './routes/graphql.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new GraphqlRoute()]);

app.listen();
