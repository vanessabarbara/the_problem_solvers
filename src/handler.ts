import * as serverless from 'serverless-http';
import * as connection  from './config/database'
import App from './app';

const handler = serverless(App);

module.exports.handler = async (event, context) => {
    try {
        if (process.env.NODE_ENV !== 'test') await connection.default;

        return await handler(event, context);
    } catch (err) {
        console.log(err);
        return err;
    }
};
