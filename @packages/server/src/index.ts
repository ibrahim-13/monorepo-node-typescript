import { Server } from "./server";
import { ServerConfig } from "@packages/core";
import { LoggerServer } from "./libs/logging";

const server = Server.Instance().listen(ServerConfig.port, ServerConfig.hostname, () => {
  LoggerServer(
    "info",
    `Server running on ${ServerConfig.hostname}:${ServerConfig.port}`
  );
});

function onShutdown(): void {
  LoggerServer("warn", "Shutting down...");
  server.close(() => LoggerServer("warn", "Shutdown successful"));
}

process.on("SIGTERM", onShutdown);