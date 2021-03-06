import React from "react"

export default props => {
  const post = props.element
  return (
    <div
      className="shadow bg-white mr-4 rounded flex-shrink-0"
      style={{ width: "300px" }}
    >
      <header
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      ></header>
      <div className="p-8 text-center">
        <h4 className="font-bold h-20 overflow-y-auto">{post.title}</h4>
        <div className="text-center mt-8">
          <a href={post.link} className="btn">
            Leer
          </a>
        </div>
      </div>
    </div>
  )
}
