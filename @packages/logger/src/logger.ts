import winston from "winston";
import { LogLevels } from "./levels";

const logger = winston.createLogger({
  level: "silly",
  transports: [new winston.transports.Console()],
});

const Log = (level: LogLevels, topic: string, msg: string): unknown =>
  logger.log(level, `[${topic}]:${msg}`);

const CreateTopicLogger =
  (topic: string): ((level: LogLevels, msg: string) => void) =>
  (level: LogLevels, msg: string) =>
    Log(level, topic, msg);

export const Logger = {
  Log,
  CreateTopicLogger,
};
