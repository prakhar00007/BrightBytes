import express from "express";
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";
import { authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js"

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubscription);



//verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification);

///get razorpay key
router.route("/razorpaykey").get(getRazorPayKey);


// Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);
export default router;