import bodyParser from "body-parser";
import cors from "cors";
import morgan from 'morgan';

export function setupMiddleware(app, config) {

    // logger
    app.use(morgan('dev'));

    // 3rd party middleware
    app.use(cors({
        exposedHeaders: config.corsHeaders
    }));

    //body parser
    app.use(bodyParser.json());

    //Avoid stacktrace leaked in responses.
    app.use(function (error, req, res, next) {
        if (error instanceof Error) {
            res.sendStatus(error.statusCode);
        } else {
            next();
        }
    });

    // Remove "x-powered-by: express" from the headers
    app.disable("x-powered-by");
}