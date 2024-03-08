const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllUsers(req, res) {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
      } catch (error) {
        res.status(500).send('Error retrieving users');
      }
    }

module.exports = getAllUsers