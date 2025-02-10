"use client";
import DatePicker from "@/components/Form/DatePicker";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import Builder from "@/components/Builder";

const TextEditor = dynamic(() => import("@/components/TextEditor"), { ssr: false });

const PostCreate: FC = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };
  return (
    <>
      <Tabs className="w-full" defaultValue="content">
        <TabsList className="bg-gray-200">
          <TabsTrigger className="data-[state=active]:bg-white" value="content">
            Content
          </TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-white" value="seo">
            SEO
          </TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-white" value="image">
            Image
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          <Builder />
        </TabsContent>
        <TabsContent value="seo">
          <h3>SEO</h3>
        </TabsContent>
        <TabsContent value="image">
          <h3>image</h3>
        </TabsContent>
      </Tabs>
    </>
  );
};
export default PostCreate;
