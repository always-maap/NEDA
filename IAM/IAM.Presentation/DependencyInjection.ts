import { InjectInfraDependencies } from "IAM.Infrastructure";
import { AuthController } from "./Controllers/AuthController";
import { UserController } from "./Controllers/UserController";
import { AuthenticationService } from "IAM.Application";

export const InjectDependencies = async () => {
  const {
    unitOfWork,
    fakeSmsSender,
    jwtTokenGenerator,
    userRepository,
    outboxRepository,
    verifyCodeCacheProvider,
    verifyCodeGenerator,
  } = await InjectInfraDependencies();

  const authenticationService = new AuthenticationService(
    userRepository,
    verifyCodeCacheProvider,
    fakeSmsSender,
    verifyCodeGenerator,
    jwtTokenGenerator,
    unitOfWork,
    outboxRepository
  );

  const authController = new AuthController(authenticationService);

  const userController = new UserController();

  return { authController, userController };
};
