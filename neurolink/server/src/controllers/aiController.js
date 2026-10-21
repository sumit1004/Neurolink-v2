const {createRecap}=require('../services/recapService');const {generate}=require('../services/geminiService');
async function recap(req,res){const result=await createRecap(req.body.patientId,req.body.date);res.status(result.status==='insufficient_data'?422:200).json({data:result})}
async function chat(req,res){const {patientId,message}=req.body;const answer=await generate({instruction:'You are NeuroLink, a calm care-support assistant. Do not diagnose, prescribe, change medicines, pretend to be a family member, or invent facts. If urgent safety risk is described, encourage contacting the appropriate local emergency service or trusted caregiver.',context:`Caregiver question: ${message}`});res.json({data:answer})}
module.exports={recap,chat}
