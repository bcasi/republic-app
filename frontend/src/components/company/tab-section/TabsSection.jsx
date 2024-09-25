import Container from "@/components/common/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import PitchTab from "./PitchTab";

const TabsSection = () => {
  const [tab, setTab] = useState("pitch");

  const onTabChange = (value) => {
    console.log(value);
    setTab(value);
  };
  return (
    <Tabs value={tab} defaultValue="pitch" className="w-full h-full">
      <Container>
        <TabsList className="relative gap-2 z-10  flex flex-row w-full ">
          <TabsTrigger
            onClick={() => onTabChange("pitch")}
            className="hover:text-blue-800 text-xl"
            style={tab === "pitch" && { color: "blue" }}
            value="pitch"
          >
            Pitch
          </TabsTrigger>
          <TabsTrigger
            onClick={() => onTabChange("updates")}
            style={tab === "updates" && { color: "blue" }}
            className="hover:text-blue-800 text-xl"
            value="updates"
          >
            Updates
          </TabsTrigger>
        </TabsList>
      </Container>
      <div className=" w-screen border-b-2 border-gray-200"></div>
      <Container>
        <PitchTab />
      </Container>
      <Container>
        <TabsContent className="mt-10" value="updates">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, quam
          modi. Distinctio ea, quasi cumque nemo tempore consequatur cum
          repellat minus adipisci, amet assumenda nobis illo nam ratione sit ab.
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sed!
          Provident vero maxime rem numquam, adipisci in debitis molestias nulla
          eos fugit, rerum vitae ut consequuntur autem enim. Sit, quae?
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum
          molestias fugiat libero sit, quia non adipisci quidem velit
          dignissimos neque eum veniam eaque cumque odio voluptatem pariatur,
          aliquid nostrum.
          <br></br>
        </TabsContent>
      </Container>
    </Tabs>
  );
};

export default TabsSection;
