import TableComponent from "@/components/Table";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const PostPage: FC = () => {
  return (
    <Card>
      <CardHeader>Data Table</CardHeader>

      <CardContent>
        <div className="relative flex flex-row items-center gap-2 justify-end mb-5">
          <div className="flex flex-row items-center gap-2">
            <Link href={"/cms/page/create"} className={cn(buttonVariants({ variant: "outline" }), "hover:bg-slate-200")}>
              <Pencil /> Create new
            </Link>
            <Button className="bg-red-500 hover:bg-red-400 text-white" variant="outline">
              <Trash2 /> Trash (<span className="font-semibold">200</span>)
            </Button>
          </div>
        </div>
        <TableComponent />
      </CardContent>
    </Card>
  );
};

export default PostPage;
