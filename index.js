// the height of Darth Vader
axios.get("https://swapi.dev/api/people/4");

// the population of the planet Alderaan
axios.get("https://swapi.dev/api/planets/2");

// the name of the manufacturer of the Millennium Falcon
axios.get("https://swapi.dev/api/starships/5");

// the name of the species that C-3PO belongs to (multiple URLs)
axios.get("https://swapi.dev/api/people/2");
axios.get("https://swapi.dev/api/people/C-3PO");

// the title of each film that Obi-Wan Kenobi is in (multiple URLs)
axios.get("https://swapi.dev/api/people/10");

// use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship
axios.get("https://swapi.dev/api/people/?search=millennium");

//part 2

axios.get("https://practiceapi.devmountain.com/api");

// Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?
// post expects an object with a key of text and value type of a string

// What data type does the GET request return?
//an object

// What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )
axios.delete("https://practiceapi.devmountain.com/api/posts/555");

// List the possible response codes from the GET request at ‘/posts/filter’
//Request query is missing required text property.

// Create a post whose text is your name, record the URL and body here:
axios.post("https://practiceapi.devmountain.com/api/posts/", {
  text: "Jaden",
});

// What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?
axios.put("https://practiceapi.devmountain.com/api/posts/409", {
  text: "Orange",
});
// What is the URL to get posts that contain the text “blue”?
axios.get("https://practiceapi.devmountain.com/api/posts/?text=blue");
// Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)

// What would cause a PUT request to return a 409 status?
// Request was missing req.query.id or req.body.text

// What happens if you try to send a query in the GET request URL? Why do you get that response?
