import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Homepage() {
  return (
    <div className="inline-flex flex-col gap-4 min-w-xl p-4">
      <Button>Button</Button>
      <Input placeholder="Search here..." />
      <Progress value={50} />
      <Textarea placeholder="Write a message..." />
      <Checkbox />
    </div>
  );
}

export default Homepage;
