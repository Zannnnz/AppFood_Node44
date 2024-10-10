import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { where } from 'sequelize';

const model = initModels(sequelize);

const likeRes = async (req,res)=>{
    try {
        let {idLikeRes} = req.params;
        let data = await model.like_res.findAll({
            where:{
                res_id:idLikeRes
            },
            attributes:["res_id"],
            include:{
                model:model.users,
                as:"user",
                attributes:["user_id","full_name"]
            },
           
        })
        return res.status(200).json({data});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error"})
    }
}

const likeResUser = async(req,res)=>{
    try {
        let {idUserLikeRes} = req.params;
        let data = await model.like_res.findAll({
            where:{
                user_id:idUserLikeRes
            },
            attributes:["user_id"],
            include:{
                model:model.restaurant,
                as:"re",
                attributes:["res_name"],
            }
        })
        return res.status(200).json({data});
    } catch (error) {
        return res.status(500).json({message: "error"})
    }
}

const rateResLike = async(req,res)=>{
    try {
        let {idRateResLike} = req.params;
        let data = await model.rate_res.findAll({
            where:{
                res_id:idRateResLike
            },
            attributes:["res_id"],
            include:{
                model:model.users,
                as:"user",
                attributes:["full_name"],
               
            }
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message:"error"});
    }
}
const rateResUserLike = async(req,res)=>{
    try {
        let{idRateUserLike} = req.params;
        let data = await model.rate_res.findAll({
            where:{
                user_id:idRateUserLike
            },
            attributes:["user_id"],
            include:{
                model:model.restaurant,
                as:"re",
                attributes:["res_name"],
            }
        })
        return res.status(200).json({data});
    } catch (error) {
        return res.status(500).json({message:"error"});
    }
}

const userOrder = async (req,res)=>{
  try {
    let { userId, foodId, Amount } = req.body;
    let newOrder = await model.orders.create({
        userId,
        foodId,
        Amount
    })
    return res.status(200).json({
        message:"add order success",
        newOrder,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"error"});
  }
}
export{
    likeRes,
    likeResUser,
    rateResLike,
    rateResUserLike,
    userOrder
}