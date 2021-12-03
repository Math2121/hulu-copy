import { useRouter } from "next/router";
import request from "../utils/request";

function Nav() {
  const route = useRouter();
  //Object.entries - converte o objeto em um array xorrespondente a seus pares de propriedades
  //Exemplo :
  //var obj = { foo: 'bar', baz: 42 };
  //console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
  // console.log(Object.entries(request))
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => route.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
