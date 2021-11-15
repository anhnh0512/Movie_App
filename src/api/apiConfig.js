const apiConfig =  {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey : 'e12a3aa420d34aac8462adeeb6092fb6',
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    
}
export default apiConfig;