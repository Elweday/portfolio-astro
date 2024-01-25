import  { getCollection, type CollectionEntry  } from "astro:content";



type Both = ["blog", "projects"] | ["projects", "blog"];
type Collection =  ["blog"] | ["projects"] | Both;

type FunctionReturn<T extends Collection> = T extends ["blog"] ? CollectionEntry<"blog"> :
 T extends ["projects"] ? CollectionEntry<"projects"> :
 T extends Both? CollectionEntry<"projects"> | CollectionEntry<"blog"> :never

type x =  FunctionReturn<["projects", "blog"]>
const getSorted = async (...collection: Collection) => {

  const items = await Promise.all(collection.map(async collection => await getCollection(collection))).then(entries => entries.flat());
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
