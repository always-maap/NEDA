import { CreateDbConnection } from "./Profile.Persistence.Mongo/Configurations/ProfileContext";
import { UserProfileRepository } from "./Profile.Persistence.Mongo/Repositories/UserProfileRepository";

export const InjectInfraDependencies = async () => {
  const dbConnection = await CreateDbConnection();

  const userProfileRepository = new UserProfileRepository();

  return { userProfileRepository };
};
