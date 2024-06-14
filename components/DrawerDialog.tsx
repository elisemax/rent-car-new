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
import TeslaModelSImg from "@/img/cars/teslaModelS.jpeg";

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

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{car?.name}</DialogTitle>
            <DialogDescription>{car?.price}</DialogDescription>
          </DialogHeader>
          {car && <ProfileForm img={car?.image} title={car?.name} />}
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
          <ProfileForm img={car?.image} title={car?.name} className="px-4" />
        )}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="outline"
            >
              Cancel
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
}: {
  className?: string;
  img: StaticImageData;
  title: string;
}) {
  return (
    <div className={cn("grid items-start gap-4", className)}>
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image src={img} alt={title} fill className="rounded-md object-cover" />
      </AspectRatio>
      <DrawerTitle>Edit profile</DrawerTitle>
      <Button>Save changes</Button>
    </div>
  );
}
