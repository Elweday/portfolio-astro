import  { getCollection  } from "astro:content";

const getSorted = async (...itemTypes: ("blog" | "projects")[]) => {
const items = await Promise.all(itemTypes.map(async itemType => await getCollection(itemType))).then(entries => entries.flat());
const sortedItems = items
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.dateTime).getTime() -
        new Date(a.data.dateTime).getTime()
    );
      return sortedItems;
} ;

export default getSorted;
