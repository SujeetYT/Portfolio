import Home from "./pages/Home"
import Skills from "./pages/Skills"
import ContactMe from "./pages/ContactMe"
import Page404 from "./pages/Page404"

const routes = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/skills",
    Component: Skills
  },
  {
    path: "/contact-me",
    Component: ContactMe
  },
  {
    path: "*",
    Component: Page404
  }
]

export default routes