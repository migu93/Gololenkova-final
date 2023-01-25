import '../App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../components/AppRouter";
import NavBar from "../components/Header/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {check} from "../http/UserAPI";
import {Spinner} from "react-bootstrap";
import Footer from "../components/Footer";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    })

    if (loading) {
        return <Spinner className={""} animation={"grow"}></Spinner>
    }

    return (
    <BrowserRouter>
        <NavBar></NavBar>
        <AppRouter/>
        <Footer/>
    </BrowserRouter>
  );
})

export default App;
