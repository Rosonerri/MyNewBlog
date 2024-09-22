import { Application, Request, Response } from "express";
import { handleError } from "./Error/handleError";
import { NextFunction } from "express";
import { mainError } from "./Error/mainError";
import { HTTP } from "./utils/enums";
import user from "./router/userRouter";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api", user);
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "My Default Api",
        });
      } catch (error) {
        return res.status(400).json({
          message: "error",
        });
      }
    });
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: Because the page, ${req.originalUrl} does not exist`,
          status: HTTP.Bad_Request,
          success: false,
        })
      );
    });
    app.use(handleError);
  } catch (error) {
    return error;
  }
};
