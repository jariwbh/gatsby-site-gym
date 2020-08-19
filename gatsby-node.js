require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.GATSBY_API_URL);
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
const page = require("path")

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // Only update the `/app` page.
    // if (page.path.match(/^\/Default/)) {
    //     createPage({
    //         path: "/Default",
    //         matchPath: "/Default/*",
    //         component: path.resolve('/src/pages/Route/Default.js'),
    //     })
    // }
    if (page.path === `/`) {
        page.matchPath = `/*`
        createPage(page)
    }

}
