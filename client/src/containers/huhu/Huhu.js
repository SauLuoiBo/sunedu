import React from "react";
import Link from "next/link";
import { Button, View } from "../../components";

const Huhu = () => {
  return (
    <div>
      <View>
        <Link href="/ko">hhuhu</Link>
        <Link href="/ko">hhuhu</Link>
        <Button.Link link="/ko" text="asdda" />
      </View>
    </div>
  );
};

export default Huhu;
