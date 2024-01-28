import CarCard from "@/components/CarCard";
import CustomButton from "@/components/CustomButton";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";

import SearchBar from "@/components/SearchBar";

import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div>
              {allCars?.map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
