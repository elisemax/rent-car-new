"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FormContact } from "./FormContact";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  titleForm: string;
  showForm: boolean;
  contacts: {
    title: string;
    contact: string;
    img: StaticImageData;
  }[];
};

export default function CardForm(props: Props) {
  const { title, contacts, titleForm, showForm } = props;
  return (
    <div className="bg-white py-6 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 xl:justify-items-start sm:justify-items-center justify-items-unset">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7 mx-0">
          <h2 className="inline sm:block lg:inline xl:block">{title}</h2>
        </div>
        {showForm && (
          <Card className="rounded-xl border bg-card text-card-foreground shadow xl:w-[400px] sm:w-[400px] max-w-[550px] mx-0 md:mx-10 lg:mx-12">
            <CardHeader>{titleForm}</CardHeader>
            <CardContent>
              <FormContact />
            </CardContent>
          </Card>
        )}
      </div>
      <div className="grid mt-8 mx-auto grid-flow-row max-w-7xl sm:grid-cols-2 lg:grid-cols-3 xs:gap-6 gap-3 grid-cols-1 justify-items-start xs:px-10 px-6">
        {contacts.map((contact) => (
          <div key={contact.title} className="flex justify-center">
            <Image
              src={contact.img}
              alt="Picture of the author"
              width={40}
              height={40}
            />
            <div className="flex flex-col ml-2 justify-around text-sm font-semibold">
              <span>{contact.title}</span>
              <a className="text-blue-500" href={`tel:${contact}`}>
                {contact.contact}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
