import { connect } from "mongoose";

export async function CreateDbConnection() {
  const client = await connect(process.env.MONGO_CONN_STR!);
}
