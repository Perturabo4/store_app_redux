export default class BookstoreService {
    constructor() {
        this.data =  [
            {
                id: 1, 
                title: 'Visions of heresy', 
                author: 'Den Abnet',
                price: 30,
                coverImage: "https://images-na.ssl-images-amazon.com/images/I/812x6N0oGuL.jpg"
            },
    
            {
                id: 2, 
                title: 'Horus rising', 
                author: 'Den Abnet',
                price: 40,
                coverImage: "https://images-na.ssl-images-amazon.com/images/I/61sabb-ccLL.jpg"
    
            }
        ];
    }
   
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve(this.data)
                reject(new Error('Something went wrong'));
            }, 1000)
        })
    }
}