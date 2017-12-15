/**
 * Defines the REST method for the '/health' endpoint
 */

import { Router } from 'express';

export default () => {
    let router = Router();

    router.use( ( req, res, next ) => {
        //middleware that is specific to this endpoint
        next();
    } );

    router.get( '/', function ( req, res ) {
        res.sendStatus( 200 );
    } );

    return router;
}