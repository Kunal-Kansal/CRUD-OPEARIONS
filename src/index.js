const fs = require('fs/promises')

const { resolve } = require('path')
const { callbackify } = require('util')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent, (error) => {
		if (error) return callback("the file can not be created")
	})
	console.log(`File ${fileName} is successfully created `)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data = await fs.readFile(`./${fileName}`,{encoding: 'utf8'});
		console.log(data)
	}
	catch(err){
		console.log("error " + err)
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
		fs.appendFile(fileName,fileContent)
		console.log("File Updated Successfully")
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
		fs.unlink(fileName)
		console.log("File Deleted Successfully")
}

myFileReader("text.txt")
myFileWriter("text.txt","Hello")
// myFileUpdater("text.txt"," World")
// myFileDeleter("text.txt")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }