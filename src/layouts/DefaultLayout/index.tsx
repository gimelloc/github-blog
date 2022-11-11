import { LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Blog } from "../../pages/Blog";

export function DefaultLayout(){
    return (
        <LayoutContainer>
            <Header />
            <main>
            <Outlet />
            </main>
        </LayoutContainer>
    )
}