import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpidodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DefaultContent = { "Content-Type": ContentType.JSON }

export const geListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpidodes();

  res.writeHead(content.statusCode, DefaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilerEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, DefaultContent);
  res.end(JSON.stringify(content.body));
};
