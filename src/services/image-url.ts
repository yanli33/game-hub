const getCroppedImageUrl = (url:string)=>{
    const target = 'media/'
    const index = url.indexOf(target)+target.length
    const newUrl = url.slice(0,index)+'crop/600/400/' +url.slice(index)
    // console.log(newUrl)
    return newUrl

} 
export default getCroppedImageUrl