
const reactElemet = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Go to Google"
}

function customRender( reactElemet , root) {

    // const elementRender = document.createElement(reactElemet.type)
    // elementRender.innerHTML = reactElemet.children
    // elementRender.setAttribute("href" , reactElemet.props.href)
    // elementRender.setAttribute("target" , reactElemet.props.target)
    // root.appendChild(elementRender)

    const elementRender = document.createElement(reactElemet.type)
    elementRender.innerHTML = reactElemet.children

    for (const prop in reactElemet.props) {
       if (prop === "children") continue
       elementRender.setAttribute(prop , reactElemet.props[prop])
    }
    root.appendChild(elementRender)

}
const root = document.getElementById('root')

customRender(reactElemet , root)
