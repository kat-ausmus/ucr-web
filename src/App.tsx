import Reports from "./components/display/Reports.tsx";

const App = () => {
    return (
       <main>
           <div className="pattern" />
           <div className="wrapper">
               <header className="text-3xl font-bold underline mb-10">
                   <h1><span className="text-gradient">Human Trafficking</span> Data</h1>
               </header>
                <Reports />
           </div>
       </main>
    )
}
export default App
