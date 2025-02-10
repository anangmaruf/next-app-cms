"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Image } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { FC } from "react";

interface ListComponentProps {
  onChange: (data: any) => void;
}

const components = [
  {
    id: 1,
    type: "banner",
    data: [],
  },
];

const ListComponent: FC<ListComponentProps> = ({ onChange }) => {
  const handleSelectComponent = (data: string) => {
    const findComponent = components.find((item) => item.type === data);
    onChange(findComponent);
  };
  return (
    <Drawer>
      <DrawerTrigger>Add Component</DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader>
          <DrawerTitle className="text-center py-4">Choose you component</DrawerTitle>
        </DrawerHeader>
        <div className="w-6/12 mx-auto">
          <Command className="rounded-lg border md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Component">
                <CommandItem>
                  <Button onClick={() => handleSelectComponent("banner")} variant="ghost" className="hover:bg-[#f4f4f5] w-full text-left justify-start">
                    <Image />
                    <span>Banner</span>
                  </Button>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ListComponent;
