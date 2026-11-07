const Inline = () => {
  let stylesForPara = {
    color: "yellow",
    backgroundColor: "green",
    padding:"20px"
  }
  return (
    <div>
      <h1 style={{color:"white",backgroundColor:"red",textAlign:"center"}}>Inline Css</h1>
      <p style={stylesForPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde illum ut aperiam soluta deserunt neque magnam asperiores, vitae sunt laudantium, pariatur, dolore dolor corrupti reprehenderit debitis aspernatur odio est.</p>
    </div>
  )
}

export default Inline