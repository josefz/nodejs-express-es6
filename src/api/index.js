import { version } from '../../package.json';
import { Router } from 'express';
import health from './health';

export default () => {
    let router = Router();

    // mount the health endpoint
    router.use( '/health', health );

    // root endpoint
    router.get( '/', ( req, res ) => {
        res.json( {version} );
    } );

    return router;
}