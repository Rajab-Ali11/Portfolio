import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout"
import Home from "@/pages/home"
import Projects from "@/pages/projects"
import Experience from "@/pages/experience"
import Stack from "@/pages/stack"
import Contact from "@/pages/contact"
import Review from "@/pages/review"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
