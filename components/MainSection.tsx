import React from "react";
import ScrollLink from "./func/ScrollLink";
import { Button } from "./ui/button";

type Props = {
  title: string;
  description: string;
  button: string;
};

export default function MainSection(props: Props) {
  const { title, description, button } = props;

  return (
    <div className="w-full h-full bg-no-repeat bg-[url('/bgImg.jpg')] bg-black/70 bg-blend-darken bg-center bg-cover ">
      <div className="flex flex-col justify-center items-center h-[85vh]">
        <h2 className="text-6xl font-bold text-white text-center">{title}</h2>
        <p className="block text-2xl text-white text-center m-3">
          {description}
        </p>
        <ScrollLink href="#carorder">
          <Button className="bg-red-600" color="red-600">
            <div className="whitespace-nowrap inline">{button}</div>
          </Button>
        </ScrollLink>
      </div>
    </div>
  );
}
