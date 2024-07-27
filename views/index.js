const createHomepageTemplate = () => /*html*/ `
<html>
    <head>
        <title>My reading list</title>
        <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>my reading list</header>
        <main>
            <div>
                <!-- booklist here -->
            </div>
            <div>
                <h2>what do you want to read</h2>
                <!-- booklist -->
            </div>
        </main>
    </body>
</html>
`;
export default createHomepageTemplate