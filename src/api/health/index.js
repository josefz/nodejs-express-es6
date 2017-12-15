/**
 * Defines the REST method for the '/health' endpoint
 */

import { Router } from 'express';

let router = Router();

router.use( ( req, res, next ) => {
    //middleware that is specific to this endpoint
    next();
} );

router.get( '/', function ( req, res ) {
    res.sendStatus( 200 );
} );

export default router;