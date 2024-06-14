import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { AspectRatio } from "./ui/aspect-ratio";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "./func/useMediaQeury";
import { useTranslations } from "next-intl";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  car?: {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  };
};

export function DrawerDialog(props: Props) {
  const { open, setOpen, car } = props;
  const isDesktop = useMediaQuery();
  const t = useTranslations("IndexPage");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{car?.name}</DialogTitle>
            <DialogDescription>{car?.price}</DialogDescription>
          </DialogHeader>
          {car && (
            <ProfileForm
              tel={t("card.tel")}
              buttonText={t("card.buttonCall")}
              description={t("card.telOur") + t("card.tel")}
              img={car?.image}
              title={car?.name}
            />
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{car?.name}</DrawerTitle>
          <DrawerDescription>{car?.price}</DrawerDescription>
        </DrawerHeader>
        {car && (
          <ProfileForm
            tel={t("card.tel")}
            buttonText={t("card.buttonCall")}
            description={t("card.telOur") + " " + t("card.tel")}
            img={car?.image}
            title={car?.name}
            className="px-4"
          />
        )}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="outline"
            >
              {t("card.buttonCancel")}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  className,
  img,
  title,
  description,
  buttonText,
  tel,
}: {
  className?: string;
  img: StaticImageData;
  title: string;
  buttonText: string;
  description: string;
  tel: string;
}) {
  return (
    <div className={cn("grid items-start gap-4", className)}>
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image src={img} alt={title} fill className="rounded-md object-cover" />
      </AspectRatio>
      <DrawerTitle className="text-blue-500">
        <a className="text-xl text-blue-500" href={`tel:${tel}`}>
          {description}
        </a>
      </DrawerTitle>
      <Button>
        {" "}
        <a href={`tel:${tel}`}>{buttonText}</a>
      </Button>
    </div>
  );
}
