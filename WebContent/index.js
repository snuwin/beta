/**
 * This example is following frontend and backend separation.
 *
 * Before this .js is loaded, the html skeleton is created.
 *
 * This .js performs two steps:
 *      1. Use jQuery to talk to backend API to get the json data.
 *      2. Populate the data to correct html elements.
 */


/**
 * Handles the data returned by the API, read the jsonObject and populate data into html elements
 * @param resultData jsonObject
 */
function handleStarResult(resultData) {
    console.log("handleStarResult: populating Movies table from resultData");

    // Populate the star table
    // Find the empty table body by id "star_table_body"
    // Assuming you have a table body element with id "movie_table_body" in your HTML file
    let movieTableBodyElement = $("#movie_table");

// Iterate through the resultData array
    for (let i = 0; i < resultData.length; i++) {
        // Get the movie data for the current iteration
        let movie = resultData[i];

        // Create HTML elements for each movie row
        let rowHTML = "<tr>";
        rowHTML += "<td>" + movie["title"] + "</td>";  // Title column
        rowHTML += "<td>" + movie["year"] + "</td>";   // Year column
        rowHTML += "<td>" + movie["director"] + "</td>";  // Director column
        rowHTML += "<td>" + movie["genres"] + "</td>";  // Genres column
        rowHTML += "<td>" + movie["stars"] + "</td>";  // Stars column
        rowHTML += "<td>" + movie["rating"] + "</td>";  // Rating column
        rowHTML += "</tr>";

        // Append the generated row HTML to the table body
        movieTableBodyElement.append(rowHTML);
    }
}


/**
 * Once this .js is loaded, following scripts will be executed by the browser
 */

// Makes the HTTP GET request and registers on success callback function handleStarResult
jQuery.ajax({
    dataType: "json", // Setting return data type
    method: "GET", // Setting request method
    url: "api/movie-list", // Setting request url, which is mapped by StarsServlet in Stars.java
    success: (resultData) => handleStarResult(resultData) // Setting callback function to handle data returned successfully by the StarsServlet
});