import Card from "@/components/card";
import data from "../public/db/data.json";

export default function Home() {
  const { details, positions } = data;

  return (
    <main className="w-full h-full p-5">
      <h1 className="text-center text-5xl text-gray-800 font-bold py-6">
        {details.title}
      </h1>
      <p className="text-center text-lg font-medium text-gray-500 xl:px-[15%]">
        {details.description}
      </p>

      <section className="flex flex-col gap-5 py-10 px-40">
        {positions.map((position, index) => (
          <Card
            key={index}
            title={position.title}
            location={position.location}
            salary={position.salary}
            et={position.et}
            iconClass={position.icon}
          />
        ))}
      </section>
    </main>
  );
}
