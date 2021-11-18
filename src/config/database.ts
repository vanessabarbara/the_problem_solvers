import * as mongoose from 'mongoose';

const connect = mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
export default connect;
