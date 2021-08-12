import express from 'express';
import Ads from "../controllers/Ads";
const router = express.Router();
const ads = new Ads();
router.get("/ads",ads.getAllAds);

export default router;