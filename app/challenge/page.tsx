export default function AboutUs() {
  return (
    <div className="gap-10 w-full h-screen grid grid-cols-3 p-40">
      <div className="grid gap-5 bg-white text-black p-5">
        <div>
          <p className="font-bold text-4xl">Weather</p>
        </div>
        <div className="flex flex-row border border-b-4 border-bottom rounded-lg border-black p-2 justify-between items-center">
          <div>
            <p className="font-bold text-xl">Seoul</p>
            <p className="font-semibold text-sm">KOR, 12AM</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="w-5">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                ></path>
              </svg>{" "}
            </span>
            <p className="font-extrabold text-3xl">15°</p>
          </div>
        </div>{" "}
        <div className="flex flex-row border border-b-4 border-bottom rounded-lg border-black p-2 justify-between bg-yellow-500 items-center">
          <div>
            <p className="font-bold text-xl">New York</p>
            <p className="font-semibold text-sm">USA, 11AM</p>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>{" "}
            </span>
            <p className="font-extrabold text-3xl">15°</p>
          </div>
        </div>{" "}
        <div className="flex flex-row border border-b-4 border-bottom rounded-lg border-black p-2 justify-between bg-teal-500 items-center">
          <div>
            <p className="font-bold text-xl">Paris</p>
            <p className="font-semibold text-sm">FRA, 5PM</p>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                ></path>
              </svg>{" "}
            </span>
            <p className="font-extrabold text-3xl">20°</p>
          </div>
        </div>
        <div className="flex flex-row border border-b-4 border-bottom rounded-lg border-black p-2 justify-between bg-red-500 items-center">
          <div>
            <p className="font-bold text-xl">Sydney</p>
            <p className="font-semibold text-sm">AUS, 12AM</p>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                ></path>
              </svg>{" "}
            </span>
            <p className="font-extrabold text-3xl">11°</p>
          </div>
        </div>
        <div>
          <span className="flex justify-center items-center mt-5">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={50}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>{" "}
          </span>
        </div>
      </div>
      <div className="grid gap-5 bg-white text-black p-5">
        <div>
          <span>
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={50}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>{" "}
          </span>
        </div>
        <div className="flex flex-col text-center mb-5">
          <p className="font-bold">SIMPLE TAG</p>
          <p className="font-bold text-4xl">Work with best designers</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-row gap-3 border rounded-xl border-black border-b-2 h-50 items-center justify-center bg-yellow-400">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={70}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row gap-3 border rounded-xl border-black border-b-2  h-40 items-center justify-center  bg-teal-400">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={70}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>{" "}
          </div>
          <div className="flex flex-row gap-3 border rounded-xl border-black border-b-2 h-40 items-center justify-center  bg-pink-300">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={70}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>{" "}
          </div>
          <div className="flex flex-row gap-3 border rounded-xl border-black border-b-2 h-40 items-center justify-center  bg-red-400">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={70}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>{" "}
          </div>
        </div>
        <div className="bg-blue-700 text-center p-2 border rounded-xl mt-5">
          <button className="text-white font-bold text-xl">
            Let's get it done
          </button>
        </div>
      </div>
      <div className="grid gap-5 bg-yellow-400 text-black p-5 justify-center">
        <div className="grid grid-cols-3">
          <span>
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width={50}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </span>
          <div className="col-span-">
            <p className="font-bold text-4xl">Friends</p>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="Search with love ..."
              className="h-12 rounded-xl w-[350px] border-b-4 pr-10"
            />
            <span className="absolute right-4 top-2">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={30}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="border border-black rounded-xl bg-white h-16 p-2 flex flex-row gap-2 items-center w-[350px] justify-between">
          <div>
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="font-bold text-2xl">Bill Rizer</p>
            <p>Planet Designer</p>
          </div>
          <div>
            <button className="bg-yellow-400 border border-black border-b-4 rounded-xl w-20 h-10 font-bold text-lg">
              Invite
            </button>
          </div>
        </div>
        <div className="border border-black rounded-xl bg-white h-16 p-2 flex flex-row gap-2 items-center w-[350px] justify-between">
          <div>
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="font-bold text-2xl">Genbei Yagy</p>
            <p>Planet Designer</p>
          </div>
          <div>
            <button className="bg-yellow-400 border border-black border-b-4 rounded-xl w-20 h-10 font-bold text-lg">
              Invite
            </button>
          </div>
        </div>
        <div className="border border-black rounded-xl bg-white h-16 p-2 flex flex-row gap-2 items-center w-[350px] justify-between">
          <div>
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="font-bold text-2xl">Lancy Neo</p>
            <p>Rogue Corp</p>
          </div>
          <div>
            <button className="bg-black text-white rounded-xl w-20 h-10 font-bold text-lg">
              Invite
            </button>
          </div>
        </div>
        <div className="border border-black rounded-xl bg-white h-16 p-2 flex flex-row gap-2 items-center w-[350px] justify-between">
          <div>
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="font-bold text-2xl">Bill Rizer</p>
            <p>Hard Cops</p>
          </div>
          <div>
            <button className="bg-yellow-400 border border-black border-b-4 rounded-xl w-20 h-10 font-bold text-lg">
              Invite
            </button>
          </div>
        </div>
        <div className="border border-black rounded-xl bg-white h-16 p-2 flex flex-row gap-2 items-center w-[350px] justify-between">
          <div>
            <span>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={50}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="font-bold text-2xl">Konami</p>
            <p>Xenon Creator</p>
          </div>
          <div>
            <button className="bg-yellow-400 border border-black border-b-4 rounded-xl w-20 h-10 font-bold text-lg">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
