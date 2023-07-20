import clientPromise from "../../lib/mongodb";

export default async (req : Request, res : Response) => {
    /*
   try {
       const client = await clientPromise;
       const db = client.db("cuisine");

       const dishes = await db
           .collection("dishes")
           .find({})
           .toArray();

       res.json(dishes);
   } catch (e) {
       console.error(e);
   }*/
};