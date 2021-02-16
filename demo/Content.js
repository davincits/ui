import React, { memo } from "react";

const Content = memo(({ stories, hash }) => {
  const [section, story] = hash;
  const sectionData = stories.find(({ slug }) => slug === section);
  if (!sectionData) return null;
  const { stories: childStories, decorator } = sectionData;
  const storyData = childStories.find(({ slug }) => slug === story);
  if (!storyData) return null;
  const { Component } = storyData;
  return (
    <div className="Content">
      {decorator(() => (<Component />))}
    </div>
  );
});

export default Content;
