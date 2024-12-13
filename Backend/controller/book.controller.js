import Book from "../model/book.modle.js"

export const getBook = async (req , res) => {
    try{
        const book = await Book.find()
        res.status(200).json(book);
    }catch(error){
        console.log("Error:" , error)
        res.status(500).json({error: "Internal Server Error"});
    }
};

export default getBook