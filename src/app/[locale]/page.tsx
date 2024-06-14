"use client";
import React, { useState } from "react";
import MainSection from "@/components/MainSection";
import { CardOrders } from "@/components/CardOrders";
import { useTranslations } from "next-intl";
import FeatureSection from "@/components/FeatureSection";
import FooterSection from "@/components/FooterSection";
import CardForm from "@/components/CardForm";
import mail from "../../../img/icons/gmail.png";
import phone from "../../../img/icons/phone-call.png";
import telegram from "../../../img/icons/telegram.png";
import whatsapp from "../../../img/icons/whatsapp.png";
import viber from "../../../img/icons/viber.png";
import { cars, Car } from "@/lib/cars";
import { DrawerDialog } from "@/components/DrawerDialog";

export default function Home() {
  const t = useTranslations("IndexPage");
  const [open, setOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState<Car | undefined>();
  const features = [1, 2, 3, 4].map((id) => ({
    name: t(`featuresOptions.title${id}`),
    description: t(`featuresOptions.feature${id}`),
  }));
  const contacts = [phone, mail, telegram, whatsapp, viber].map(
    (img, index) => ({
      title: t(`contacts.title${index + 1}`),
      contact: t(`contacts.contact${index + 1}`),
      img,
    })
  );

  return (
    <div>
      <MainSection
        title={t("title")}
        description={t("content")}
        button={t("buttonOrder")}
      />
      <CardOrders
        cars={cars}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        setCurrentCar={(car: Car | undefined) => setCurrentCar(car)}
      />
      <FeatureSection
        title={t("title")}
        description={t("content")}
        features={features}
      />
      <CardForm
        showForm={false}
        title={t("form.title")}
        titleForm={t("form.titleForm")}
        contacts={contacts}
      />
      <FooterSection
        description={"xxx"}
        privacy={"xxx"}
        policy={"xx"}
        lang={"xx"}
      />
      <DrawerDialog open={open} setOpen={setOpen} car={currentCar} />
    </div>
  );
}
