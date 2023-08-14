const all = async(req, res, next) => {
    try {
        return res.status(200).json({
            message: 'OK'
        });
    } catch (err) {
        console.error(err)
    }
};

module.exports = {
    all,
}