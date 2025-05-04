'use client'
import {MouseEvent, JSX} from "react";
import {useRouter} from "next/navigation";
import './page.sass'

const Home = (): JSX.Element => {
    const router = useRouter();
    return (
        <main className="main">
            <div className="main--container">
                <div className="image--container">
                    <picture>
                        <source src="main.webp" type="image/webp"/>
                        <img
                            className="image--container__image"
                            src="main.jpeg"
                            alt="oscar tacha"
                            loading="eager"
                            title="main image"
                        />
                    </picture>
                </div>
                <div className="description--container">
                    <div className="description--title">
                        Bienvenido
                    </div>
                    <div className="description--main">
                        Hola mi nombre es Oscar Junior Tacha Gutierrez Soy un ingeniero de sistemas me desempeño como Desarrollador
                        FullStack, arquitecto de software
                    </div>
                    <div className="description--button">
                        <button className="button--secondary"
                                onClick={(event: MouseEvent<HTMLButtonElement>) => router.push('/contact-me')}>
                            Contactame
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;