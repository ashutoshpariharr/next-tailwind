import React from "react";
import "../globals.css";

function Hero() {
  return (
    <div>
      <div className=" text-center">
        <p>Toggle for Your Mode</p>
        <label className="toggle-switch">
          <input type="checkbox" />
          <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
      </div>

      <hr className="w-16 text-blue-600" />
      <h1 className="mb-10 text-2xl">Sport</h1>
      <div className="flex items-center justify-between rounded-xl bg-center">
        <div className="w-70 h-96 bg-gray-800">
          <img
            className="h-72 aspect-square p-2 w-60 bg-cover rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__"
            alt="This is simple img"
          />
          <div>
            <p className="ml-2">Sacramento River Cats</p>
            <div className="a text-xs flex flex-col p-1 m-2 bg-slate-700">
              <div className="flex justify-around">
                <p>Total events</p>
                <p>Sport</p>
              </div>
              <div className="flex justify-around">
                <p>48 Events</p>
                <p>Baseball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-96 bg-gray-800">
          <img
            className="h-72 aspect-square p-2 w-60 bg-cover rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__"
            alt="This is simple img"
          />
          <div>
            <p className="ml-2">Las Vegas Aviators</p>
            <div className="a text-xs flex flex-col p-1 m-2 bg-slate-700">
              <div className="flex justify-around">
                <p>Total events</p>
                <p>Sport</p>
              </div>
              <div className="flex justify-around">
                <p>48 Events</p>
                <p>Baseball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-96 bg-gray-800">
          <img
            className="h-72 aspect-square p-2 w-60 bg-cover rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtF-TuNcma0-HNbqtENI51868JjNd38EzT5jARpBJ7hvmYBWokB-dZmajh5EMHlo2vJzQl9gymCpvrM7j-OLsXKViFlh7n7qb~M8onQwwDoSvBvPrbH~d1~5N3rn6XxrGb742E~ZWxs83gLMTv8QsQ202LGEzCght4GGoLiPW7Y3aC4ADsJjQGWCoFD-TiRG8PQxSAnlgncjQAWThvQLxl695HYHxq4VShwiSl5CBfH-20XVdVi0W6gEt71vHHuQTSgOcG5eir2lvYRIvY3qLXixYYJZvT72XXJklWzu19p515wWV0QI5LTKLnfRvpPI1s9D5dRrk4tAFZGTC2J3fw__"
            alt="This is simple img"
          />
          <div>
            <p className="ml-2">New jersey devils</p>
            <div className="a text-xs flex flex-col p-1 m-2 bg-slate-700">
              <div className="flex justify-around">
                <p>Total events</p>
                <p>Sport</p>
              </div>
              <div className="flex justify-around">
                <p>48 Events</p>
                <p>Baseball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-96 bg-gray-800">
          <img
            className="h-72 aspect-square p-2 w-60 bg-cover rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__"
            alt="This is simple img"
          />
          <div>
            <p className="ml-2">Las Vegas Aviators</p>
            <div className="a text-xs flex flex-col p-1 m-2 bg-slate-700">
              <div className="flex justify-around">
                <p>Total events</p>
                <p>Sport</p>
              </div>
              <div className="flex justify-around">
                <p>48 Events</p>
                <p>Baseball</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-96 bg-gray-800">
          <div
            className="bg-black text-center"
            style={{
              width: "20%",
            }}
          >
            Add
          </div>
          <img
            className="h-50 aspect-square p-2 w-60 bg-cover rounded-xl mt-0"
            src="https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ME0JQVe21xR~EAZyQR30C2LsuJ9ZbHratF26Okpyzn6CDQ49MaxPfOMkUuQzMlc7wQSknwCfpHpz3MIf3JIe5KIyiyXqFoaye6lhdaJHbDBgNUPlHetDFDUVxZdvxvknVBjIqY9sjq77hsEy-6swkT2ewezmlCjWL2~nFHS-k7W18G-nm7U3hHc6s3q0jSQVeyl7CwNmOYdCMT0VNtQ3Z3WyLB2XKttniutJ2l-uyDkJNK6NCC5nYn001RxfZBQj0V5~FSPipdzNNQFRhCv5qBaLEEh6fHymXmgmZKpoO~1Lm-7OsgU8uvEdE6iuqKE2aszdCGNX230k-JRO1KZ2NQ__"
          />
          <div className="p-3">
            <p>Advertisement title</p>
            <p
              className="font-thin"
              style={{
                fontSize: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <button
          type="button"
          className="bg-blue-600 p-3 rounded-sm text-center text-sx hover:bg-blue-500"
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default Hero;
