import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useTranslations } from "next-intl";
import { Car } from "@/lib/cars";

type Props = {
  onClick: () => void;
  cars: {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  }[];
  setCurrentCar: (car: Car) => void;
};

export function CardOrders(props: Props) {
  const t = useTranslations("IndexPage");
  const { onClick, cars, setCurrentCar } = props;
  return (
    <div id="carorder" className="mx-auto max-w-7xl sm:p-0">
      <div className="mx-auto justify-items-center my-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Card key={car.name} className="xl:w-[400px] sm:w-[300px] w-[330px]">
            <CardHeader>
              <CardTitle>{car.name}</CardTitle>
              <div className="flex items-center">
                <div className="font-semibold pr-2">{t("card.price")}</div>
                <CardDescription>
                  {t("card.priceValue", { price: car.price })}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={() => {
                  setCurrentCar(car);
                  onClick();
                }}
              >
                {t("card.button")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
