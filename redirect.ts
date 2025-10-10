// redirect.ts

// Define the redirect URL
const redirectUrl = "http//srv233619.hoster-test.ru/red"; // Replace with the URL you want to redirect to

// Handle the request
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(null, {
      status: 302, // HTTP status for redirection
      headers: {
        "Location": redirectUrl, // The URL to redirect to
      },
    })
  );
});
