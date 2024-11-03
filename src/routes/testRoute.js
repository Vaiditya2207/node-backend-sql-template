export default {
    method: "get",
    path: "/test",
    controller: async (req, res) => {
        res.status(200).send("This is a test route.");
    }
};