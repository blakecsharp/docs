import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="flex h-screen justify-center items-center">
        <h1>Enterprise Technology Strategy</h1>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex w-full p-4 items-center gap-20 border">
          <div className="w-1/2 text-left">
            <b>Challenges</b>
          </div>
          <div className="w-1/2 text-right">
            <p>
              This strategy identifies the current challenge to creating
              technology for large, bureaucratic, non-commercial enterprises,
              why existing efforts have not succeeded, and highlights the costs
              of failing to adopt modern technology practices.
            </p>
          </div>
        </div>
        <div className="flex w-full pt-4 items-center gap-20 border p-4">
          <div className="w-1/2 text-left">
            <p>
              This strategy enumerates the vision for how the enterprise will
              effectively adopt the modern product development process. This
              vision will explain the modern product development process and why
              an organization needs to adopt it, the high-level overview of the
              product development team, and how a product development team
              accomplishes their goals.
            </p>
          </div>
          <div className="w-1/2 text-right">
            <b>Vision</b>
          </div>
        </div>
        <div className="flex w-full p-4 items-center gap-20 border">
          <div className="w-1/2 text-left">
            <b>Technology Landscape and Core Principles</b>
          </div>
          <div className="w-1/2 text-right">
            <p>
              This section of the strategy provides a common definition of
              technology. This section explains how core terms used throughout
              the strategy (such as “Technology” itself) as well as popular
              industry terms intertwine by providing an overview of key
              terminology and concepts. Additionally, this section provides the
              current state of the modern technology landscape and identifies
              areas most likely to affect the enterprise including emerging
              challenges and topics (i.e., AI, quantum).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
