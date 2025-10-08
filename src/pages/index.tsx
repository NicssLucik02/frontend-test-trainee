import { Input } from "@/components/Input/Input";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Toast } from "@/components/Toast/Toast";
import { useState } from "react";

export default function Home() {
  return (
    <body>
      <Input type="password" clearable={true} placeholder="Enter password" />
      <Sidebar theme="dark" active={true} />
      <Toast type="info" />
    </body>
  );
}
