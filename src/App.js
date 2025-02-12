import React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import AppLayout from "@cloudscape-design/components/app-layout";
import Navigation from "./components/navigation";
import Breadcrumbs from "./components/breadcrumbs";
import CardView from "./components/cards"; // Import CardView component

import "./styles.css";

export default function App() {
  return (
    <>
      <div id="top-nav">
        <TopNavigation
          identity={{
            logo: { src: "/rocket.png", alt: "AWS Demo Launcher" },
            title: "AWS Demo Launcher",
            href: "/home/index.html",
          }}
          i18nStrings={{
            overflowMenuTriggerText: "More",
            overflowMenuTitleText: "All",
          }}
        />
      </div>
      <AppLayout
        headerSelector="#top-nav"
        ariaLabels={{
          navigation: "Navigation drawer",
          navigationClose: "Close navigation drawer",
          navigationToggle: "Open navigation drawer",
          notifications: "Notifications",
          tools: "Help panel",
          toolsClose: "Close help panel",
          toolsToggle: "Open help panel",
        }}
        breadcrumbs={<Breadcrumbs />}
        navigation={<Navigation />}
        content={<CardView />} // Add CardView to the AppLayout content
      />
    </>
  );
}
