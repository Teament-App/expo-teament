import React, { useState } from "react";
import { Layout, Popover } from "@ui-kitten/components";
import PriorityAnchor from "../PriorityAnchor";
import Priority from "../ModalComponents/Priority";

export default function PriorityPopover({
  priority,
  onChange,
}: {
  priority: string;
  onChange: (e: any) => void;
}) {
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);
  return (
    <Popover
      placement={"right end"}
      visible={visible}
      onBackdropPress={hide}
      anchor={() =>
        PriorityAnchor({
          toggle: () => setVisible((prev) => !prev),
          priority,
        })
      }
    >
      <Layout
        style={{
          width: 260,
        }}
      >
        <Priority priority={priority} title={false} onChange={onChange} />
      </Layout>
    </Popover>
  );
}
