import axios from "axios";
import { GetServerSideProps } from "next";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";
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
export default function Home({result}:IProps) {

  return (
    <>
      <Header />
      <Nav />
      <Results result={result} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const genres = context.query.genre;
  const req: any = request;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3${req[genres]?.url || req.fetchTrending.url}`
  );


  return {
    props: {
      result: data.results,
    },
  };
};
