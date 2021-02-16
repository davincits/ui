import React, { memo } from "react";

const SideBar = memo(({ stories, hash }) => {
  const [section, story] = hash;
  return (
    <div className="SideBar">
      <ul>
        {stories.map(({ storyName, stories, slug: parentSlug }) => {
          const isActiveSection = section === parentSlug;
          const [{ slug } = {}] = stories;
          return (
            <li key={parentSlug}>
              <a href={`#/${parentSlug}/${slug}`} className={isActiveSection ? "active" : ""}>{storyName}</a>
              {isActiveSection && (
                <ul>
                  {stories.map(({ name, slug }) => {
                    const isActive = isActiveSection && (slug === story);
                    return (
                      <li key={slug}>
                        <a href={`#/${parentSlug}/${slug}`} className={isActive ? "active" : ""}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default SideBar;
