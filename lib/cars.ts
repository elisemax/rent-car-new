import FordFocus3Img from "@/img/cars/focus3.jpeg";
import FordMondeo4Img from "@/img/cars/fordMondeo4.jpeg";
import SkodaOtcavia3Img from "@/img/cars/octavia3.jpeg";
import SkodaRapidImg from "@/img/cars/rapid.jpeg";
import SkodaOctaviaFaceImg from "@/img/cars/octaviaFacelift.jpeg";
import OpelAstraJImg from "@/img/cars/opelAstraJ.jpeg";
import OpelInsigniaImg from "@/img/cars/opelInsignia.jpeg";
import SeatIbizaImg from "@/img/cars/seatIbiza.jpeg";
import SeatLeonImg from "@/img/cars/seatLeon.jpeg";
import TeslaModelSImg from "@/img/cars/teslaModelS.jpeg";
import VolkswagenPassatB7Img from "@/img/cars/passatB7.jpeg";
import VolkswagenPassatB8Img from "@/img/cars/passatB8.jpeg";
import { StaticImageData } from "next/image";

export type Car = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
};

export const cars = [
  {
    id: 1,
    name: "Ford Focus 3",
    price: 6000,
    image: FordFocus3Img,
  },
  {
    id: 2,
    name: "Volkswagen Passat B7",
    price: 5000,
    image: VolkswagenPassatB7Img,
  },
  {
    id: 3,
    name: "Skoda Octavia 3 Facelift",
    price: 7000,
    image: SkodaOctaviaFaceImg,
  },
  {
    id: 4,
    name: "Skoda Rapid",
    price: 6000,
    image: SkodaRapidImg,
  },
  {
    id: 4,
    name: "Skoda Octavia 3 (nafta/CNG)",
    price: 5000,
    image: SkodaOtcavia3Img,
  },
  {
    id: 4,
    name: "Seat Ibiza (CNG)",
    price: 7000,
    image: SeatIbizaImg,
  },
  {
    id: 4,
    name: "Opel Insignia",
    price: 6000,
    image: OpelInsigniaImg,
  },
  {
    id: 4,
    name: "Volkswagen Passat B8",
    price: 5000,
    image: VolkswagenPassatB8Img,
  },
  {
    id: 4,
    name: "Opel Astra J",
    price: 7000,
    image: OpelAstraJImg,
  },
  {
    id: 4,
    name: "Tesla Model S",
    price: 5000,
    image: TeslaModelSImg,
  },
  {
    id: 4,
    name: "Ford Mondeo 4",
    price: 7000,
    image: FordMondeo4Img,
  },
  {
    id: 4,
    name: "Seat Leon (nafta/CNG)",
    price: 7000,
    image: SeatLeonImg,
  },
];
