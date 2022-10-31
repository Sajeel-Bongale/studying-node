/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577388#questions

    So far we have only been able to create static HTML pages. These pages could not render any
    dynamic data.

    With the use of templating engines we can create such dynamic templates with data populated
    from the NodeJS application. In the templates we put placeholders which get replaced with dynamic
    data before the response (HTML file) is sent back to the user. This allows us to cater to a wider
    range of content and requests.

    There are 3 popular templating engines. They are:
    1. Pug
    Syntax like: p #{name}
    2. EJS
    Syntax like: <p><%= name%></p>
    3. Handlebars
    Syntax like: <p> {{ name }} </p>

 */