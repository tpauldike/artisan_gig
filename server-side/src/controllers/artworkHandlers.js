//create artwork -- createArtwork
const promisifiedQuery = util.promisify(db.query).bind(db);

export const createArtwork = async (req, res) => {
    try {
        const { artwork, user_id, category, work_title, description, file } = req.body;

        const checkUserEmail = await promisifiedQuery("SELECT * FROM user WHERE user_id = ?, artwork = ?, work_title", [user_id, artwork, work_title]);

        if (checkUserEmail.length > 0) {
            return res.status(409).json({ message: "Artwork already registered!" })
        }

        await promisifiedQuery("INSERT INTO artwork (artwork, user_id, category, work_title, description, file) VALUES (?,?,?,?,?,?)", [artwork, user_id, category, work_title, description, file]);

        return res.status(201).json({ message: "Artwork successfully created" });

    } catch (error) {
        console.log("Error creating new artwork:", error);
        return res.status(500).json({ message: "Internal Server Error!" });
    };
};
//update artwork -- updateArtwork

//delete artwork -- deleteArtwork

//view an artwork -- getOneArtwork

//view all categories -- getArtworkCategories

//view all artwork in a category -- getArtworksInCategory

//view all artworks -- getAllArtworks