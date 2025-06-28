export default function NavBar() {
  return (
    <nav className="border-b border-yellow-100/80">
      <ol className="p-5 text-center flex justify-evenly">
        <a href="services" className="p-2" >SERRVICES</a>
        <a href="galery"  className="p-2">GALERY</a>
        <a href="/" > <span className="text-3xl text-yellow-100/80">BARBERSHOP NAME </span></a>
        <a href="about" className="p-2">ABOUT</a>
        <a href="contact" className="p-2">CONTACT</a>
      </ol>
    </nav>
  )
}
