"use client";
import React, { FC, ReactElement } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";

interface IDrawerProps {
  asTrigger?: boolean;
  childrenTrigger?: React.ReactNode;
  children: React.ReactNode;
}

const DrawerComponent: FC<IDrawerProps> = ({ asTrigger, childrenTrigger, children, ...props }) => {
  const renderTrigger = () => {
    if (asTrigger) {
      const trigger = React.Children.only(childrenTrigger) as ReactElement;

      return React.cloneElement(trigger, {
        ...props,
      });
    }

    console.warn(`[Missing Trigger]: Drawer trigger is missing` + `you can create button like <button asTrigger>Trigger Open</button>`);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>{renderTrigger()}</DrawerTrigger>
      <DrawerContent className="bg-white">
        <div className="w-full mx-auto max-w-sm md:max-w-2xl lg:max-w-full lg:px-4">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">asdasd</div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
              </div>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <Button variant="outline">Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerComponent;
