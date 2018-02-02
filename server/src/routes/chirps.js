import { Router } from "express";
import store from "../chirpsStore";

let router = Router();

router.get("/:id?", (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(store.GetChirp(id));
    } else {
        res.send(store.GetChirps());
    }
});

router.post("/", (req, res) => {
    store.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put("/:id", (req, res) => {
    let id = req.params.id;
    let chirp = store.GetChirp(id);

    if (Object.keys(chirp).length === 0) {
        res.sendStatus(404);
        return;
    }

    store.UpdateChirp(id, req.body);

    res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    store.DeleteChirp(id);
    res.sendStatus(200);
});

export default router;