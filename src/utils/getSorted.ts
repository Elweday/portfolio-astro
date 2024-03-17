import  { getCollection, type CollectionEntry  } from "astro:content";




type Collection =  "blog" | "projects";
const getSorted = async (...itemTypes: Collection[]) => {
const items = await Promise.all(itemTypes.map(async itemType => await getCollection(itemType))).then(entries => entries.flat());
const sortedItems = items
    .filter(({ data }) => !data.draft)
    .sort( (a, b) => b.body.length - a.body.length);
      type x = typeof itemTypes;
      return sortedItems  // idk ;
} ;

export default getSorted;
