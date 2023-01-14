import { useMemo, useState } from "react";
import { product } from "./data/product";

export function App() {
  const [is360, setIs360] = useState(false);
  const [imgActiveIndex, setImgActiveIndex] = useState(0);

  const cachedImages = useMemo(() => {
    const result: HTMLImageElement[] = [];

    for (let i = 0; i < product.image.amount; i++) {
      const imgUrl = product.image.url.replace("%d", `${i + 1}`);
      const cache = new Image();
      cache.src = imgUrl; // preload image
      result.push(cache);
    }

    return result;
  }, []);

  function handleToggle360() {
    setIs360((state) => !state);
    setImgActiveIndex(0);
  }

  return (
    <main
      className="
        h-screen w-full
        flex items-center justify-center
      "
    >
      <section
        className="
          md:w-[54rem] md:h-[32rem]
          max-md:w-full max-md:m-10 max-md:p-10
          grid
          md:grid-cols-6 md:grid-rows-6 m
          max-md:grid-cols-3 max-md:grid-rows-12
          overflow-hidden rounded-lg bg-moon-raker-200
        "
      >
        <div
          className="
            md:col-start-1 md:col-span-3 md:row-span-full
            max-md:row-span-6 max-md:col-span-full max-md:row-start-1
            flex items-center w-full
          "
        >
          <div
            className="
              w-full h-full
              flex justify-center items-center
              relative
            "
          >
            {is360 &&
              cachedImages.map((cache, index) => (
                <span
                  key={`${cache.src}`}
                  onMouseOver={() => setImgActiveIndex(index)}
                  className="h-full flex-1 block"
                ></span>
              ))}

            <img
              className="
                pointer-events-none absolute
                max-w-full max-h-full
              "
              src={cachedImages[imgActiveIndex].src}
              alt={product.name}
            />
          </div>
        </div>
        <div
          className="
            md:col-start-4 md:col-span-3 md:row-span-full
            max-md:row-start-7 max-md:col-start-1 max-md:row-span-6 max-md:col-span-full
            flex flex-col justify-center items-start
            gap-5 w-full
            anim
          "
        >
          <div className="flex flex-col gap-3 leading-none">
            <span className="uppercase text-xs">Código: {product.id}</span>
            <h1 className="text-[2rem]">{product.name}</h1>
            <span className="font-normal">
              {product.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            type="button"
            className="
              uppercase rounded-full
              border-[1px] border-solid border-port-gore-900
              text-xs font-normal py-2 px-4
              hover:bg-port-gore-900 hover:text-moon-raker-200
              transition-colors ease-in delay-200
            "
          >
            Adicionar à cesta
          </button>
        </div>
        <div
          className="
            md:col-start-3 md:row-start-2
            max-md:col-start-3 max-md:row-start-1
            flex items-end justify-center
          "
        >
          <button
            type="button"
            className="flex justify-center items-center w-8 h-6 z-10"
            onClick={handleToggle360}
            title="Toggle 360 degrees product visualization"
          >
            <img src={is360 ? "/assets/x.svg" : "/assets/360.svg"} alt="" />
          </button>
        </div>
      </section>
    </main>
  );
}
