export default function Home() {
  return (
    <main className="font-overpass bg-fm-very-dark-blue min-h-screen flex flex-col items-center justify-center">
      <section className="space-y-6 bg-fm-dark-blue rounded-lg p-6 max-w-[320px] lg:max-w-[375px] mx-auto flex flex-col">
        <img
          className="self-start bg-fm-medium-grey p-3 rounded-full"
          src="../icon-star.svg"
          alt="Icon star"
        />
        <h1 className="text-2xl text-white font-bold">How did we do ?</h1>
        <p className="text-[15px] text-fm-light-grey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <nav>
          <ul className="flex items-center space-x-5">
            <li className="transition duration-300 cursor-pointer hover:bg-fm-light-grey hover:text-white p-3 w-12 text-center text-fm-light-grey active:bg-fm-orange bg-fm-medium-grey rounded-full">
              1
            </li>
            <li className="transition duration-300 cursor-pointer hover:bg-fm-light-grey hover:text-white p-3 w-12 text-center text-fm-light-grey active:bg-fm-orange bg-fm-medium-grey rounded-full">
              2
            </li>
            <li className="transition duration-300 cursor-pointer hover:bg-fm-light-grey hover:text-white p-3 w-12 text-center text-fm-light-grey active:bg-fm-orange bg-fm-medium-grey rounded-full">
              3
            </li>
            <li className="transition duration-300 cursor-pointer hover:bg-fm-light-grey hover:text-white p-3 w-12 text-center text-fm-light-grey active:bg-fm-orange bg-fm-medium-grey rounded-full">
              4
            </li>
            <li className="transition duration-300 cursor-pointer hover:bg-fm-light-grey hover:text-white p-3 w-12 text-center text-fm-light-grey active:bg-fm-orange bg-fm-medium-grey rounded-full">
              5
            </li>
          </ul>
        </nav>
        <button
          className="uppercase py-3 rounded-full text-white bg-fm-orange hover:bg-white transition duration-300 hover:text-fm-orange"
          type="button"
        >
          Submit
        </button>
      </section>
    </main>
  );
}
