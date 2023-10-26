import { getFilePath, readFileContent, setFileContent } from "../../../utils/api_utils";

function Handler(req, res) {
    if(req.method === 'POST') {
        const emailObject = req.body;
        res.status(200).json({message: emailObject});
        const filePath = getFilePath('data/emails.json');
        const currentEmailData = readFileContent(filePath);
        currentEmailData.push(emailObject);
        setFileContent(filePath, JSON.stringify(currentEmailData))
    } 
    else {
        res.status(200).json({message: 'This get request was recieved but nothing was done with it. Did you mean to send a POST request?'})
    }
}

export default Handler;
