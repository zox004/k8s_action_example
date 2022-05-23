import fs from 'fs';
import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const router = express.Router();
const indexJs = path.basename(__filename);

import mainRouter from './main.js';

router.use('/', mainRouter)

export default router;
