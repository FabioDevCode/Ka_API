const puppeteer = require ('puppeteer');

const pdf = async(req, res) => {
    const { url } = req.body;

    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            defaultViewport: null
        });
        const page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 2160,
        });

        await page.goto(url);
        const pdf = await page.pdf({
            displayHeaderFooter: true,
            height: 2160,
            pageRanges: '1-1',
            scale: .7,
            timeout: 5000,
            format: 'a4',
        });

        res.contentType("application/pdf");
        res.status(200).send(pdf);
    } catch (err) {
        console.error(err);
        res.status(500).send(error)
    }
};

module.exports = {
    pdf
}