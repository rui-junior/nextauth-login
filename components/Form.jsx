import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

//components
import Card from "./Card";

//styles
import styleCard from "./css/card.module.css";
import styleInput from "./css/input.module.css";
import styleButton from "./css/button.module.css";
import styleMessage from "./css/message.module.css";

export default function Form() {
  const [message, setMessage] = useState("");
  const { data: session, status } = useSession()
  // const [logged, setLogged] = useState(false);

  const router = useRouter()

  const usuarioRef = useRef();
  const senhaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let usuario = usuarioRef.current.value;
    let senha = senhaRef.current.value;

    if (usuario === "" || senha === "") {

      setMessage("Complete corretamente os campos");

    } else {

      signIn("credentials", {
        redirect: false,
        usuario: usuario,
        senha: senha,
        // callbackUrl: `${window.location.origin}/dashboard`,
      })
      
      .then((result) => {

        result.error == null ? router.push("/dashboard") : setMessage(result.error)

      });

    }
  };

  return (
    <Card>
      <form className={styleCard.form} onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          name="usuario"
          className={styleInput.input}
          ref={usuarioRef}
        />

        <label>Password:</label>
        <input
          type="password"
          name="senha"
          className={styleInput.input}
          ref={senhaRef}
        />

        <button className={styleButton.register}>Login</button>
      </form>

      <label className={styleMessage.message}>{message}</label>
    </Card>
  );
}
