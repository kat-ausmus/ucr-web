import Reports from "./components/Reports.tsx";

const App = () => {
    return (
       <main>
           <div className="pattern" />
           <div className="wrapper">
               <header className="text-3xl font-bold underline">
                   <h1> Find <span className="text-gradient">Counts</span></h1>
               </header>
                <Reports />
           </div>
       </main>
    )
}
export default App
