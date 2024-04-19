import Header from "./components/header";
import Sidemenu from "./components/sidemenu";
import Dashboard from "./dashboard";


export default function Home() {
  return (
    <main>
    <Header/>

    <div className="flex justify-center items-center h-screen">
    <Dashboard/>

    </div>
    <Sidemenu/>
    </main>
  );
}
