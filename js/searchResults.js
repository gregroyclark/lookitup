export const buildSearchResults = (resultArray) => {
    resultArray.array.forEach(result => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement("div");
        resultContents.classList.add("resultContents");
        if (result.img) {
            const resultImage = createResultImage(result);
            resultContents.append(resultImage);
        }
        const resultText = createResultText(result);
        resultContents.append(resultText);
        resultItem.appent(resultContents);
        const searchResults = document.getElementById("searchResults");
        searchResults.append(resultItem);
    });
}