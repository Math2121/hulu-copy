import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
interface IResultData {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  orginal_name: string;
  media_type: string;
  vote_count: number;
  release_date:string;
  first_air_date:string;
}
interface IProps {
  result: IResultData;
}

function Thumbnail({ result }: IProps) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className="group cursor-pointer  p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
          layout="responsive"
          height={1080}
          width={1920}
          alt={result.title}
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
        />
        <div className="p-2">
          <p className="truncate">{result.overview}</p>
          <h1 className="mt-1 text-2xl text-white transition-all duration-100 ease-linear group-hover:font-bold">{result.title || result.orginal_name}</h1>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type} .`} {" "}
            {result.release_date || result.first_air_date} . {" "}
            <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
          </p>
        </div>
      </div>
    </>
  );
}

export default Thumbnail;
