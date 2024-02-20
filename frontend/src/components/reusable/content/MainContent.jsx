

export default function MainContent() {
  return (
    <div className="flex items-center ... px-12 py-12 ps-0 m-0 mx-0 my-0 ms-0 me-0 mt-0 mr-0">
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
        <div>
  <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> 
  <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
  <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
</div>
      </div>
    </div>
  )
}
