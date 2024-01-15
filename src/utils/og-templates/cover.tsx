import { SITE } from "@config";
import { type Collection } from "../../types";


//   <img style={{ width: "50%", aspectRatio: "1/1", maskImage: "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) ", height: "100%", objectFit: "cover"}} src={cover} /> 

export default (entry: Collection) => {
  let cover = (entry.collection === "blog" ? entry.data.cover.src : entry.data.media[0].src) as string;

  console.log("cover from react", cover)
  return (
    <div style={{  color: "rgba(255,255,255)", fontFamily: "Nunito", width: "100%", height: "100%", position: "relative", display: "flex", backgroundColor: "black" }}>

    <h1 style={{position: "absolute", top: "0", right: "50px", fontFamily: "Nunito", fontWeight: "bold"}} >{SITE.title + " | " + (entry.collection === "blog" ? "Article" : "Project")}</h1>
    <div style={{position: "absolute", display: "flex", flexDirection: "column", width: "50%", top: "50%", right: "50px", fontWeight: "bold", color: "rgba(255,255,255)" }} >
      <h2 style={{fontSize: "64px"}}>{entry.data.title}</h2>
      <h3>{entry.data.description}</h3>
    </div>
  </div>

  );
};
