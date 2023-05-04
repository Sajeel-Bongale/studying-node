/*

    Parsing variable using URL

    To access the query and the url we can use the following code as url.parse() method is deprecated -> example 1

    example 1
    const baseURL = `http://${request.headers.host}`;
    const requestURL = new URL(request.url, baseURL);
    const pathName = requestURL.pathname;                   //Get the pathName
    const query = requestURL.searchParams.get("id");        //Access the query parameters

 */