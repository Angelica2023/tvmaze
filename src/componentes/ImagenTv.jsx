const ImagenTv = ({ src, name }) => {
  return (
    <div className='image-container'>
      <img src={src} alt={name} className='image-view' />

    </div>
  )
}

export default ImagenTv
