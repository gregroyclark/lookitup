import { setSearchFocus } from "./searchBar";
import { getSearchTerm } from "./dataFunctions";
import { retrieveSearchResults } from "./dataFunctions";
import { buildSearchResults } from "./searchResults"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp()
    }
});

const initApp = () => {
    setSearchFocus();

    // TODO 3 listeners

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}


const submitTheSearch = (event) => {
    event.preventDefault();
    // TODO delete search results
    processTheSearch();
    setSearchFocus();
}

const processTheSearch = async () => {
    // clear the stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    //set stats line
}