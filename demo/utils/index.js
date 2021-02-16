const STORIES = [];

const decorator = (story) => story();

const slugify = (str) => str.replace(/[^a-z0-9-]/gi, "_");

export const storiesOf = (storyName) => {
  const story = {
    storyName,
    slug: slugify(storyName),
    stories: [],
    decorator,
  };
  STORIES.push(story);
  const api = {
    add(name, Component) {
      story.stories.push({
        name,
        slug: slugify(name),
        Component
      });
      return api;
    },
    addDecorator(render) {
      story.decorator = render;
      return api;
    }
  }
  return api;
};

export const getStories = () => STORIES;