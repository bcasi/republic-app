import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

const PitchTab = () => {
  return (
    <TabsContent className="mt-10" value="pitch">
      <div className="mb-5">
        <h1 className="text-left text-3xl">Investment summary</h1>
        <ul className="list-disc text-left">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            delectus esse odio dolorem inventore dolores ipsum, quos suscipit
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            delectus esse odio dolorem inventore dolores ipsum, quos suscipit
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            delectus esse odio dolorem inventore dolores ipsum, quos suscipit
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            delectus esse odio dolorem inventore dolores ipsum, quos suscipit
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            delectus esse odio dolorem inventore dolores ipsum, quos suscipit
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            delectus esse odio dolorem inventore dolores ipsum, quos suscipit
          </li>
        </ul>
      </div>
      <div className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis
        laudantium, voluptates eligendi porro perferendis inventore sunt commodi
        cupiditate. Laboriosam aliquid alias ipsam mollitia, deserunt cupiditate
        ut facilis dignissimos aperiam! <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, unde
        tempora dignissimos dolorem nostrum dolore sed fuga illo perferendis
        voluptate, adipisci accusantium nulla facere fugit. Vel tenetur nobis in
        consectetur.
      </div>
    </TabsContent>
  );
};

export default PitchTab;
