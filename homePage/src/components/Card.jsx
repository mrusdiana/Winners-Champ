import { Link } from "react-router";

export default function Card({product}) {
  return (
    <>
      <Link to={`/detail/${product.id}`} key={product.id} className=" shadow-xs rounded-bl-lg bg-mist-50">
        <img src={product.imgUrl} alt={product.name} width={300} height={200} />
        <div className="px-4">
          <div className="font-medium flex p-1 bg-red-700 text-white w-[40%] mb-2 rounded-md text-xs items-center mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
              fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 7h-.69a3.05 3.05 0 0 0-.21-4.1c-1.16-1.16-3.19-1.16-4.35 0l-2.04 2.04C12.07 3.23 10.44 2 8.5 2 6.02 2 4 4.02 4 6.5c0 .17 0 .34.03.5H4c-.52 0-.95.4-1 .92l-.91 10.92a2.007 2.007 0 0 0 1.99 2.17h15.83a2.007 2.007 0 0 0 1.99-2.17l-.91-10.92c-.04-.52-.48-.92-1-.92Zm-3.84-2.68c.41-.41 1.12-.41 1.53 0 .2.2.32.47.32.76s-.11.56-.32.76L16.53 7h-3.05zM6 6.5a2.5 2.5 0 0 1 5 0c0 .14-.01.29-.05.46 0 .01-.01.03-.01.04H6.05C6.02 6.84 6 6.67 6 6.5M4.09 19l.83-10h14.16l.83 10z"></path><path d="M12 14c-1.65 0-3-1.35-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.65-1.35 3-3 3"></path>
            </svg> <span className="border-r border-white pr-1 mx-1"> Mall </span>  ORI</div>
          <div>
            <p className="font-medium line-clamp-2 mb-1">{product.name}</p>
            <p className="line-clamp-3 text-sm text-gray-400">{product.description}</p>
          </div>
        </div>
        <p className="text-blue-950 font-bold p-4">Rp.{product.price},-</p>
      </Link>
    </>
  )
}