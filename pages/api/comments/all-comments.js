import { getFilePath, readFileContent, setFileContent } from "../../../utils/api_utils";

function Handler(req, res) {
    if(req.method === 'POST') {
        const commentsObject = req.body;
        res.status(200).json({message: commentsObject});
        const filePath = getFilePath('data/comments.json');
        const currentCommentsData = readFileContent(filePath);
        currentCommentsData.push(commentsObject);
        setFileContent(filePath, JSON.stringify(currentCommentsData))
    }

    else {
        res.status(200).json({message: 'Expected a POST request. No comment has been saved.'})
    }
}

export default Handler