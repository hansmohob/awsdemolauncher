import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";

export default () => {
  const [activeHref, setActiveHref] = React.useState("#/page1");
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "AWS Demo Launcher" }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={[
        { type: "link", text: "Demos", href: "#/page1" },
        { type: "link", text: "Deployed", href: "#/page2" },
        { type: "link", text: "Connect", href: "#/page3" },
        { type: "link", text: "Destroy", href: "#/page4" },
        { type: "divider" },
        {
          type: "link",
          text: "Notifications",
          href: "#/notifications",
        },
        {
          type: "link",
          text: "Documentation",
          href: "https://example.com",
          external: true,
        },
        {
          type: "link",
          text: "GitHub",
          href: "https://example.com",
          external: true,
        },
      ]}
    />
  );
};
