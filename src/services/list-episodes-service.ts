import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpidodes = async () => {
  const data = await repositoryPodcast();

    return data;
};
