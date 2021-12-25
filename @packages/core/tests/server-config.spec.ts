import { ServerConfig } from "../src/server-config";

describe("Server Config", () => {
  test("Has defined address", () => {
    expect(ServerConfig.hostname).toBeDefined();
  });

  test("Has defined port", () => {
    expect(ServerConfig.port).toBeDefined();
  });
});