import { setSearchFocus } from "./searchBar";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp()
    }
});

const initApp = () => {
    // set the focus

    // 3 listeners

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}


const submitTheSearch = (event) => {
    event.preventDefault();
    // delete search results
    // process the search
    // set the focus
}