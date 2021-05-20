import {Router, Request, Response} from 'express';
import {HttpCode, HttpError} from '../interfaces/http-code';

const router: Router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(HttpCode.ok)
        .json({
            ok: true,
            message: 'works fine',
        });
});

router.post('/health', (req: Request, res: Response) => {
    res.status(HttpError.methodNotAllowed)
        .json({
            ok: false,
            message: 'method not allowed'
        });
});

export default router;
