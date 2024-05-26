import Listing from "../models/listingmodel.js"

export const createlisting = async (req,res)=>{
    try {
    const listing = await Listing.create(req.body);
    console.log(listing)
    res.status(202).send("listing created ")
    } catch (error) {
        console.log(error);
        res.status(400).send("bad request")
    }
}