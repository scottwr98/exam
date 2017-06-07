# Grading Rubric 

Please write your app [here](./src/App.js).

* Commit includes static page (10 pts)
* Components receiving `props` should use `prop-types` (5 pts)
* Components should only be as smart as they need to be (5 pts)

[in progress] App is styled appropriately with NM toolkit (5 pts)
    - linked to NM stiles in index.html

* Search button should be disabled if text field is blank (5 pts)
* Loading spinner should show while fetching data (5 pts)
* Error message should display if Github username not found (10 pts)

[Done] Codebase should be properly modularized (5 pts)
    - created components folder, each component in a seperate file.

* Valid username should pull repository data from Github API and display on page (10 pts)
* User should be able to filter repos by primary language (10 pts)
* Clicking on repo should bring you to accurate details page (15 pts)
* Navigating to details page should update the URL (10 pts)
* If on details page, header should contain working Home link (5 pts)