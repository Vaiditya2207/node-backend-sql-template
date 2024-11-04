import dotenv from 'dotenv';
dotenv.config();

const authorization = async (req, res, next) => {
    try {
        console.log("this")
        if (!req.headers.authorization) {
            throw new Error("No authorization header");
        }
        const auth_key = req.headers.authorization.replace("Bearer ", "");
        console.log(auth_key);
        next()
    } catch (err) {
        console.error(err);
        res.status(401).json(
            {
                error: "Unauthorized Access"
            }
        )
    }
}

export default authorization;