import { lazy, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { DndSortableList } from "@/components/DndSortableList";
import ListComponent from "./ListComponent";

interface ComponentProps {
  id: number;
  type: string;
  data: any;
}
function getRandomInt() {
  return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
}

const Builder = () => {
  const [components, setComponents] = useState<ComponentProps[]>([]);
  const [componentName, setComponentName] = useState<string>("");

  const loadComponent = (name: string) => {
    return lazy(() => import(``));
  };

  const handlePushComponent = (data: any) => {
    const dataMap = {
      id: getRandomInt(),
      type: data.type,
      data: data.data,
    };
    setComponents((prev) => [...prev, dataMap]);
    console.log(dataMap, "components");
  };

  return (
    <div className="flex flex-row gap-3">
      <div className="w-full">
        <Card>
          <CardHeader>
            <ListComponent onChange={handlePushComponent} />
          </CardHeader>
          <CardContent className="py-5">
            <DndSortableList
              items={components}
              onChange={setComponents}
              renderItem={(item) => (
                <DndSortableList.Item id={item.id}>
                  {item.type}
                  <DndSortableList.DragHandle />
                </DndSortableList.Item>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Builder;
