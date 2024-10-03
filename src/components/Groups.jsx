import React from "react";

const Groups = () => {
  return (
    <>
      <div className="w-full px-20 flex items-center h-[80vh] py-16">
        <div
          className="h-full w-1/3 bg-cover rounded-3xl bg-center flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c289/71be/270e33de53134c872a46fd99a77fc0ac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQeUwy3kGHzVBfZMiiK05sk4csVPfMGQifldTMttWjXwhQGCtId2t9etdaK2DDvwd9HyI~P0o0AEj0tjK95r7-aSxZHBrijTHwW3uVdBA4wdHx0zFoLe7PXqKTBiOjoplisIgtct~j7xLFZKy90yXrgLYwAThFOyeFx77LQ3ZxWnddbjcC8ALJ~1YbDvGHGvkPxHtoLqame33OjhRlQEXYDQ39qi7rx4lxoHvM-zuTPgHbH09L3cQx0WKejn0sOS1sCIr6EO69~gAXjMJQ7QmxoppeGyqCagAqc4odU~68Skq~NgFUFz8DTPb9J~xlsk-g~pcZtA8Py2NlvVCLBu~g__')`,
          }}
        >
          <div className="relative w-full h-full flex items-start justify-end flex-col p-6 rounded-3xl">
            <span className="absolute top-5 right-5 rounded-full bg-zinc-900/80 backdrop-blur font-semibold py-4 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-play"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </span>
            <span className="absolute bg-white top-1/2 text-red-800 right-1/2 px-3 py-1 rounded-3xl">
              Patnership sessions
            </span>
            <h1 className="text-5xl font-bold mb-4"></h1>
            <div className="flex items-center gap-2">
              <button className="bg-zinc-50 text-black hover:bg-zinc-200 transition-all font-semibold py-2 px-8 rounded-3xl">
                Learn More
              </button>
              <button className="bg-zinc-950 text-white hover:bg-zinc-900 transition-all font-semibold py-2 px-8 rounded-3xl">
                Check ROI
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full flex flex-col px-12 items-center justify-between">
          <div className="w-full space-y-4">
            <h1 className="text-4xl font-semibold">
              Process to become a partner
            </h1>
            <p className="text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              autem ratione tenetur esse fugit eveniet quo molestias blanditiis,
              similique eum.
            </p>
            <button className="bg-zinc-950 my-4 text-white hover:bg-zinc-800 transition-all font-semibold py-2 px-8 rounded-3xl">
              Learn More
            </button>
          </div>
          <div className="w-full flex mt-6 gap-4">
            <div className="w-1/3 bg-white group gap-1 hover:bg-[#930000] items-start flex flex-col hover:text-white transition-all rounded-2xl cursor-pointer px-8 py-12">
              <div className="rounded-full group-hover:text-black transition-all bg-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-lock-keyhole"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold">Privacy</h1>
              <p className="text-md mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="w-1/3 bg-white group gap-1 hover:bg-[#930000] items-start flex flex-col hover:text-white transition-all rounded-2xl cursor-pointer px-8 py-12">
              <div className="rounded-full group-hover:text-black transition-all bg-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
              </div>
              <h1 className="text-xl font-semibold">Accessibility</h1>
              <p className="text-md mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="w-1/3 bg-white group gap-1 hover:bg-[#930000] items-start flex flex-col hover:text-white transition-all rounded-2xl cursor-pointer px-8 py-12">
              <div className="rounded-full group-hover:text-black transition-all bg-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h1 className="text-xl font-semibold">Community</h1>
              <p className="text-md mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
