import { OPEN_ALEX_BASE_URL } from "../shared/config";

export const getBooks = async function (searchToken: string) {
  try {
    const filters = ["type:book", `title.search:${searchToken}`];
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
