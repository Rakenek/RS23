import { MongoClient } from "mongodb";
import { MONGO_PASS } from "../../secret";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://Raken:${MONGO_PASS}@cluster0.w0fzj.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
