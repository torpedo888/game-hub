const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    console.log("TARGET:" + url.indexOf(target))
    console.log("LENGTH:" + target.length)
    console.log("index:" + index);
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;