import React from "react"
import Form from "./contact.form"
import Illustration from "../imgs/undraw_all_the_data_h4ki.svg"

export default () => (
  <header className="bg-blue-300">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1 mx-auto" align="center">
          <h1 className="text-6xl font-bold text-purple-700"> Hola soy BASC</h1>
          <p className="font-light tex-xl"> El pt amo! </p>
        </div>
        <img
          src={Illustration}
          alt="trough the park"
          style={{ height: "300px" }}
        ></img>
      </div>

      <div>
        <Form />
      </div>
    </div>
  </header>
)
