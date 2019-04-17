# Star Wars API - Interface

Created by: Timothy Quirk

In this repository you will find a front end built with React.js set up to interact with the Star Wars API - https://swapi.co/. This is a front end only, and no data will persist if the browser tab is closed, or a complete refresh takes place.

## Instructions for use

1. After forking and cloning this repository from github, switch into your newly cloned folder.

2. Install the necessary dependencies with `npm install`.

3. You may run the `npm start` command from your terminal in this repo, and you will be able to test the site. Your internet connection speed will affect performance of the site, as you will be hitting the SWAPI - a third party API.

## Demo

[![alt text][image]][reference link]

[image]: https://github.com/tfquirk/star-wars-api-challenge/blob/master/public/images/ReadMe/star_wars_wiki_home.png "Star Wars Wiki Demo Video - click to watch"
[reference link]: https://youtu.be/Es51kKxOlEM

Please click on the image above if you would like to see a video demo of the Star Wars Wiki site.

## Overview

The project requirements included:

- Displaying character, planet, and vehicle details
- When viewing details pages, links should be included to available information
- Links should be dynamic, and altering a link should take us to the corresponding character, planet, or vehicle
- Allow users to tag characters, planets, and vehicles
- Style with CSS
- Stretch goal: include a history log of pages a user visited during their visit
- Versioned in GitHub
- Include list of assumptions from the project

## My assumptions

- Since we are using only three endpoints of the Star Wars API, the homepage should directly display highlights of the information we pull from these endpoints.
  - If we were to include additional endpoints, I would want to redesign the homepage to show the endpoints you could investigate further to clean up the homepage (eg. just show a tile/card to click on for characters, planets, vehicles, starships, etc.).
- Since the API paginates all data returned, I assumed it was best to work with that data as is instead of manipulating it too much. Thus, on the homepage each endpoint hit only displays 10 cards at a time.
- Images are not included in the SWAPI, however, I imagined it would be best to design for them as if they were. In any modern website I would expect to see a photo of a character or location to help differentiate it from others.
- Tags should only be able to be added on a detail page for a specific character, planet, or vehicle. This will improve user UX/UI, as it will limit selections from a large menu (eg all characters, etc.).
- I choose not to show every available piece of information available on the detail page, but rather what seemed like primary details. I would want confirmation from a Product Manager exactly which information they would like displayed on each page.
- For the history log, I imagined every page visited should be included in the log, including the homepage and the history page. I only wanted the page recorded once, and therefore did not allow the page to recorded if any re-renders happened.

## Additional features that could be added

1. Tags:

- Create an additional page to show all tags created
- Allow users to filter and sort by the tags they created
- Allow users to delete a tag they created
- Also show tags on cards on homepage once they have been created
- have the history page display any tags that were created while on that page

2. Create a 404 page in the event a user tries to navigate to a route that does not exist
3. Gather images for all characters, planets, and vehicles
4. Allow users to search for specific characters, planets, and vehicles
5. Create a back-end, so that users could create accounts and persist the tags they created - that way they would not be lost on a complete refresh or by closing the browser

## Technical Specs

This project uses the following technologies:

1. React
2. JavaScript ES6 and JSX
3. Redux
4. NPM
5. CSS
6. The Star Wars API - https://swapi.co/
