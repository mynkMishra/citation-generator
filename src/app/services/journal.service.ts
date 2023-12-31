import { OPEN_ALEX_BASE_URL } from "../shared/config";

export const getJounrals = async function (searchToken: string) {
  try {
    const filters = [
      "type:article",
      "primary_location.source.type:journal",
      `title.search:${searchToken}`,
    ];
    const response = await fetch(
      `${OPEN_ALEX_BASE_URL}/works?filter=${filters.join(",")}`,
      { method: "GET" }
    );

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.log(error);
  }
};
