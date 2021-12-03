import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
interface IResultData {
 
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview:string;
  title:string;
  orginal_name:string;
  media_type:string;
  vote_count:number;
  release_date:string;
  first_air_date:string;
}
interface IProps {
result: IResultData[];
}
function Results({ result }: IProps) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 ">
      {result.map((res) => (
  
        <Thumbnail key={res.id} result={res} />
      ))}
    </FlipMove>
  );
}

export default Results;
