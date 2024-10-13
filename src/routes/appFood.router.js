import express from "express";
import { likeRes,likeResUser,rateResLike,rateResUserLike,userOrder,deleteLike,deleteRate,rateRes} from "../controllers/appFOOD.controller.js";

const appfoodRoutes = express.Router();

appfoodRoutes.get("/like_res/:idLikeRes",likeRes);
appfoodRoutes.get("/like_res_user/:idUserLikeRes",likeResUser);
appfoodRoutes.get("/rate_res_like/:idRateResLike",rateResLike);
appfoodRoutes.get("/rate_res_user_like/:idRateUserLike",rateResUserLike);
appfoodRoutes.post("/add_order",userOrder);
appfoodRoutes.delete("/delete_like",deleteLike);
appfoodRoutes.delete("/delete_rate",deleteRate);
appfoodRoutes.post("/add_rate",rateRes)
export default appfoodRoutes;