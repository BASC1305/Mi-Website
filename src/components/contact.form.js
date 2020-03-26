import React from "react"

export default () => (
  <form className="tex-center mt-12">
    <label
      htmlFor="contact-content"
      className="block text-purple-700 text-sm font-bold mb-2"
    >
      {" "}
      Di que soy el pt amo:
    </label>
    <div className="flex shadow rounded bg-white border p-2">
      <textarea
        id="contact-content"
        name="contact-content"
        className="flex-1 py-2 px-3 text-grey-700 focus:outline-none focus:shadow-outline"
      ></textarea>
      <button className="btn ml-4">Enviar</button>
    </div>
  </form>
)
