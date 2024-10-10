import exprexss from 'express';
import appfoodRoutes from './appFood.router.js';
const rootRoutes = exprexss.Router();


rootRoutes.use("/appfood",appfoodRoutes);

export default rootRoutes;