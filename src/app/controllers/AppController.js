class AppController {
  constructor() {}

  status(_, res) {
    return res.status(200).send({ status: "It's Work!" });
  }
}

module.exports = new AppController();
