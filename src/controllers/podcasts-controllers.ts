import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpidodes } from "../services/list-episodes-service";

export const geListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpidodes();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
