import React from "react";
import useSWR from "swr";

const Joke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const fetcher = async () => await fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher, {
    refreshInterval: 10000,
    revalidateIfStale: false,
  });

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return <div className="text-white text-3xl">Joke incoming...</div>;

  return (
    <section className="flex flex-col items-center justify-evenly w-full">
      <div className="">
        <h3 className="text-xl text-[#01a9c0]">{data.setup}</h3>
        <h2 className="text-3xl text-white">{data.punchline}</h2>
      </div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </section>
  );
};

export default Joke;
