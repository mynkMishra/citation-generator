import { OPEN_ALEX_BASE_URL } from "../shared/config";

export const getArticles = async (searchToken: string): Promise<any> => {
  try {
    const filters = [
      "type:article",
      "primary_location.version:submittedVersion",
      `title.search:${searchToken}`,
    ];
    const response = await fetch(
      `${OPEN_ALEX_BASE_URL}/works?filter=${filters.join(",")}`
    );

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.log(error);
  }
};
