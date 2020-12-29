export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    return searchTerm;
}